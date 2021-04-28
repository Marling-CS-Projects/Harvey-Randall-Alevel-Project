// Written By Harvey Randall \\

import { useEffect, useState } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { BoxGeometry, Clock, DoubleSide, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene, Vector3, WebGLRenderer, MeshLambertMaterial } from "three"
var perlin = require('perlin-noise');
var SimplexNoise = require('simplex-noise');
import { GenerateClouds } from '../components/clouds'
import { getRandomStarField } from '../components/stars'
import { CreateDayNightCycle } from "../components/gameFundalmentals/DayNightCycle";
var Stats = require('stats.js')


CameraControls.install({ THREE: THREE });


export default function render() {
    const [child, setChild] = useState(undefined)
    const [newTheta, setTheat] = useState(0)
    const [day, setDay] = useState("not day")
    const [child2, setChild2] = useState(undefined)

    useEffect(() => {
        if (child === undefined) return;

        let stats = new Stats();
        stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom);

        let SceneToGet = new Scene()
        let Renders = new WebGLRenderer({
            antialias: true,
            alpha: true
        })

        Renders.setClearColor(0x87ceeb, 1);
        Renders.shadowMap.enabled = true;
        Renders.shadowMap.type = THREE.PCFShadowMap;


        Renders.setSize(window.innerWidth, window.innerHeight)
        child.appendChild(Renders.domElement);


        const simplex = new SimplexNoise(Math.random())




        const clock = new Clock();


        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        plane.receiveShadow = true;
        SceneToGet.add(plane);

        let daynight = new CreateDayNightCycle(SceneToGet, Renders)

        var geometry = new THREE.PlaneBufferGeometry(500, 500, 100, 100)

        let colours = []

    


        for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
            //console.log(geometry.attributes.position.array[(i*3)+2])
            let x = geometry.attributes.position.array[(i * 3)] / 128
            let y = geometry.attributes.position.array[(i * 3) + 1] / 128
            let height = simplex.noise2D(x, y) * 30
            geometry.attributes.position.array[(i * 3) + 2] = height
            if (height > 23) {
                colours.push(1, 1, 1)
            }
            else if (height > 5) {
                colours.push(0.56, 0.54, 0.48)
            }
            else if (height < -20) {
                colours.push(0.501, 0.772, 0.87)
            }
            else {
                colours.push(0.56, 0.68, 0.166)
            }
        }
        var material = new THREE.MeshPhongMaterial({
            vertexColors: THREE.VertexColors,
            reflectivity: 0,
            roughness: 2,
        });
        material.flatShading = true
        var plane2 = new THREE.Mesh(geometry, material);
        plane2.receiveShadow = true
        plane2.castShadow = true
        plane2.position.y = -3
        geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colours), 3));
        geometry.computeVertexNormals();

        let clouds = []
        for (let i = 0; i < 40; i++) {
            clouds.push(new GenerateClouds(new Vector3((Math.random() * 300) - 300, 80 + Math.random() * 20, (Math.random() * 600) - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1))
        }

        plane2.rotateX((Math.PI / 2) + Math.PI)
        SceneToGet.add(plane2);

        var Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        /*const cameraControls = new CameraControls(Camera, Renders.domElement);
        cameraControls.azimuthRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.polarRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.truckSpeed = 1 / 1e-5 * 3;
        cameraControls.distance = 5
        //cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
        cameraControls.saveState();*/
        Camera.position.z = 5;

        document.addEventListener("keydown", onDocumentKeyDown, false);
        function onDocumentKeyDown(event) {
            var keyCode = event.which;
            if (keyCode == 87) {
                Camera.position.z += 1
            } else if (keyCode == 83) {
                Camera.position.z -= 1
            } else if (keyCode == 65) {
                cCamera.position.x += 1
            } else if (keyCode == 68) {
                Camera.position.x -= 1
            } 
        };


        Renders.domElement.requestPointerLock()

        const gridHelper = new THREE.GridHelper(50, 50);
        gridHelper.position.y = -1;
        SceneToGet.add(gridHelper);


        var animate = function () {
            stats.begin()
            requestAnimationFrame(animate)

            daynight.update()


            clouds.forEach((e, i) => {
                e.update()
            })

            Renders.render(SceneToGet, Camera);
            stats.end()
        };
        function listChildren(children) {
            let child;
            for (let i = 0; i < children.length; i++) {
                child = children[i];

                // Calls this function again if the child has children
                if (child.children) {
                    listChildren(child.children);
                }
                // Logs if this child last in recursion
                else {
                    console.log('Reached bottom with: ', child);
                }
            }
        }

        listChildren(SceneToGet.children);
        animate();
    }, [child])

    return ( 
        <>
            <div ref={ref => (setChild2(ref))}></div>

            <
                div ref={ref => (setChild(ref))}
            />  < />
    )
}
