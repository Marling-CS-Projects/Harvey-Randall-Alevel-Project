// Written By Harvey Randall \\

import { useEffect, useState } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { BoxGeometry, Clock, DoubleSide, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene, Vector3, WebGLRenderer, MeshLambertMaterial } from "three"
var perlin = require('perlin-noise');
var SimplexNoise = require('simplex-noise');
import { GenerateClouds } from '../components/clouds'
import { getRandomStarField} from '../components/stars'

CameraControls.install({ THREE: THREE });

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function lerpColor(a, b, amount) {

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16,
        ag = ah >> 8 & 0xff,
        ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16,
        bg = bh >> 8 & 0xff,
        bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

export default function render() {
    const [child, setChild] = useState(undefined)
    const [newTheta, setTheat] = useState(0)
    const [day, setDay] = useState("not day")

    useEffect(() => {
        if (child === undefined) return;

        let SceneToGet = new Scene()
        let Renders = new WebGLRenderer()

        Renders.setClearColor(0x87ceeb, 1);
        Renders.shadowMap.enabled = true;
        Renders.shadowMap.type = THREE.PCFShadowMap;


        Renders.setSize(window.innerWidth, window.innerHeight)
        child.appendChild(Renders.domElement);

        var geometry = new BoxGeometry(1, 1, 1);
        var material = new MeshStandardMaterial({ color: 0xfffff });
        var cube = new Mesh(geometry, material);
        cube.castShadow = true
        cube.receiveShadow = true
        SceneToGet.add(cube);

        const simplex = new SimplexNoise(Math.random())




        const clock = new Clock();
        const noise = perlin.generatePerlinNoise(300, 300, { amplitude: 600 });

        const directionalLight = new THREE.DirectionalLight(0xddffee, 0.5, 100);

        /*
        directionalLight.shadowCameraLeft = -200;
        directionalLight.shadowCameraRight = 200;
        directionalLight.shadowCameraTop = 250;
        directionalLight.shadowCameraBottom = -200;*/
        directionalLight.position.set(1, 100, 100)
        directionalLight.castShadow = true
        SceneToGet.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.2, 100);
        directionalLight2.position.set(-1, -100, -100)
        directionalLight2.castShadow = true
        SceneToGet.add(directionalLight2);

        const light = new THREE.AmbientLight(0xaaaaaa, 0.5); // soft white light
        SceneToGet.add(light);

        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        plane.receiveShadow = true;
        SceneToGet.add(plane);

        const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        //SceneToGet.add(helper);

        var skyBox = new THREE.BoxGeometry(700, 700, 700);
        var skyBoxMaterial = new THREE.MeshBasicMaterial({
            map: getRandomStarField(600, 2048, 2048),
            side: THREE.BackSide,
        });
        var sky = new THREE.Mesh(skyBox, skyBoxMaterial);


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
        var material = new THREE.MeshStandardMaterial({
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
        const cameraControls = new CameraControls(Camera, Renders.domElement);
        cameraControls.azimuthRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.polarRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.truckSpeed = 1 / 1e-5 * 3;
        cameraControls.distance = 5
        cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
        cameraControls.saveState();
        Camera.position.z = 5;


        Renders.domElement.requestPointerLock()

        const gridHelper = new THREE.GridHelper(50, 50);
        gridHelper.position.y = -1;
        SceneToGet.add(gridHelper);

        function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
            pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld;

            if (pointIsWorld) {
                obj.parent.localToWorld(obj.position); // compensate for world coordinate
            }

            obj.position.sub(point); // remove the offset
            obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
            obj.position.add(point); // re-add the offset

            if (pointIsWorld) {
                obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
            }

            obj.rotateOnAxis(axis, theta); // rotate the OBJECT
            return theta
        }
        let time = 0

        let sun = new THREE.SphereBufferGeometry(20, 20, 100, 100)
        let sunMaterial = new MeshLambertMaterial({
            emissive: 0xf9d71c,
        })
        let sunmesh = new THREE.Mesh(sun, sunMaterial)
        sunmesh.position.set(1, 300, 300)
        SceneToGet.add(sunmesh)

        let moon = new THREE.SphereBufferGeometry(10, 10, 100, 100)
        let moonMaterial = new MeshLambertMaterial({
            emissive: 0xffffff,

        })
        let moonMesh = new THREE.Mesh(moon, moonMaterial)
        moonMesh.position.set(-1, -300, -300)
        SceneToGet.add(moonMesh)
        let t = 0
        let d = 0


        var animate = function() {
            requestAnimationFrame(animate); //cube.rotation.x += 0.01;
            let theta = rotateAboutPoint(directionalLight, new Vector3(0, 0, 0), new Vector3(1, 0, 0), 0.001, true)

            rotateAboutPoint(sunmesh, new Vector3(100, 0, 0), new Vector3(1, 0, 0), 0.001, true)
            rotateAboutPoint(moonMesh, new Vector3(100, 0, 0), new Vector3(1, 0, 0), 0.001, true)
            rotateAboutPoint(directionalLight2, new Vector3(0, 0, 0), new Vector3(1, 0, 0), 0.001, true)
            let angle = THREE.MathUtils.radToDeg(cube.rotation.x)
            setTheat(THREE.MathUtils.radToDeg(cube.rotation.x))
            if (angle < 20) {
                t = 0
                directionalLight.color.setHex(0xddffee)
                d += 0.01
                 if(d >= 1){
                    d = 1
                }
                Renders.setClearColor( new THREE.Color().lerpColors(new THREE.Color( 0x000000 ), new THREE.Color( 0x87ceeb ), d),1);
                light.intensity = 0.5
                directionalLight2.color.setHex(0x000000)
                setDay("Day")
                directionalLight.intensity = 0.5
                directionalLight2.intensity = 0
                SceneToGet.remove(sky);
            }
            else if (angle) {
                let d = 0
                setDay("Night")
               
                t += 0.01;
                if(t >= 1){
                    t = 1
                }
                directionalLight2.color.setHex(0xffffff)
                //console.log(new THREE.Color().lerpColors(new THREE.Color( 0x87ceeb ), new THREE.Color( 0x000000 ), t))
                Renders.setClearColor( new THREE.Color().lerpColors(new THREE.Color( 0x87ceeb ), new THREE.Color( 0x000000 ), t),1);
                if(t >= 1){
                    SceneToGet.add(sky);
                }
                light.intensity = 0.2
                directionalLight.intensity = 0
                directionalLight2.intensity = 0.2
                
                sky.rotation.x += -0.0004
            }
            cube.rotateOnAxis(new Vector3(1, 0, 0), theta)

            const delta = clock.getDelta();
            const elapsed = clock.getElapsedTime();
            const updated = cameraControls.update(delta);

            clouds.forEach((e, i) => {
                let result = e.update()
            })

            Renders.render(SceneToGet, Camera);
        };
        animate();
    }, [child])

    return ( <
        >
        <
        div ref = { ref => (setChild(ref)) }
        />  < /
        >
    )
}
