// Written By Harvey Randall \\

import { useEffect, useState } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { BoxGeometry, Clock, DoubleSide, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene, Vector3, WebGLRenderer } from "three"

CameraControls.install({ THREE: THREE });

export default function render() {
    const [child, setChild] = useState(undefined)

    useEffect(() => {
        if (child === undefined) return;

        let SceneToGet = new Scene()
        let Renders = new WebGLRenderer()
        
        Renders.setClearColor( 0x999999, 1 );
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

        const light = new THREE.AmbientLight(0xaaaaaa); // soft white light
        SceneToGet.add(light);

        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        plane.receiveShadow = true;
        SceneToGet.add(plane);

        const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        SceneToGet.add(helper);


        var geometry = new THREE.PlaneBufferGeometry(60, 60, 199, 199)


        for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
            console.log(geometry.attributes.position[i])
          geometry.attributes.position[i].position.z = Math.random()
        }
        var plane2 = new THREE.Mesh(geometry, material);
        
        var material = new THREE.MeshPhongMaterial({
          color: 0xdddddd, 
          wireframe: true
        });
        
        

        plane2.rotateX(Math.PI / 2)
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
        }
        var animate = function() {
            requestAnimationFrame(animate);
            //cube.rotation.x += 0.01;
            rotateAboutPoint(directionalLight, new Vector3(0, 0, 0), new Vector3(0, 1, 0), 0.01, true)
            //cube.rotation.y += 0.01;

            const delta = clock.getDelta();
            const elapsed = clock.getElapsedTime();
            const updated = cameraControls.update(delta);

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
