// Written By Harvey Randall \\

import { useEffect, useState } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { BoxGeometry, Clock, DoubleSide, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene, Vector3, WebGLRenderer } from "three"
import { Sky } from "../components/sky";

CameraControls.install({ THREE: THREE });

export default function render() {
    const [child, setChild] = useState(undefined)

    useEffect(() => {
        if (child === undefined) return;

        let SceneToGet = new Scene()
        let Renders = new WebGLRenderer()

        Renders.shadowMap.enabled = true;
        Renders.shadowMap.type = THREE.PCFSoftShadowMap;


        Renders.setSize(window.innerWidth, window.innerHeight)
        child.appendChild(Renders.domElement);

        var geometry = new BoxGeometry(1, 1, 1);
        var material = new MeshStandardMaterial({ color: 0xfffff });
        var cube = new Mesh(geometry, material);
        cube.castShadow = true
        cube.receiveShadow = true
        SceneToGet.add(cube);


        const clock = new Clock();

        const directionalLight = new THREE.DirectionalLight(0xddffee, 1, 100);
        directionalLight.position.set(1, 10, 10);
        directionalLight.castShadow = true
        //directionalLight.castShadow = true
        //directionalLight.target = geometry
        SceneToGet.add(directionalLight);

        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, side:DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        SceneToGet.add(plane);

        const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        SceneToGet.add(helper);

        var Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const cameraControls = new CameraControls(Camera, Renders.domElement);
        cameraControls.azimuthRotateSpeed = - 0.3; // negative value to invert rotation direction
        cameraControls.polarRotateSpeed = - 0.3; // negative value to invert rotation direction
        cameraControls.truckSpeed = 1 / 1e-5 * 3;
        cameraControls.distance = 5
        cameraControls.mouseButtons.wheel = CameraControls.ACTION.ZOOM;
        cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
        cameraControls.saveState();
        Camera.position.z = 5;


        Renders.domElement.requestPointerLock()

        const gridHelper = new THREE.GridHelper(50, 50);
        gridHelper.position.y = - 1;
        SceneToGet.add(gridHelper);
        var animate = function () {
            requestAnimationFrame(animate);
            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;

            const delta = clock.getDelta();
            const elapsed = clock.getElapsedTime();
            const updated = cameraControls.update(delta);

            if (updated) {

                //Renders.render(SceneToGet, Camera);

            }
            Renders.render(SceneToGet, Camera);
        };
        animate();
    }, [child])

    return (
        <>
            <div ref={ref => (setChild(ref))} />
        </>
    )
}