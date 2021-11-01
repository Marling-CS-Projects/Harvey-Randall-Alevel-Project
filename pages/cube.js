// Written By Harvey Randall \\

import { useEffect, useState } from "react";
import { MeshPhongMaterial } from "three";
import { DirectionalLight } from "three";
import { AmbientLight } from "three";
import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

export default function render() {
    const [child, setChild] = useState();

    useEffect(() => {
        if (typeof child === "undefined") {
            return;
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        child.appendChild(renderer.domElement);

        const geometry = new BoxGeometry();
        const material = new MeshPhongMaterial({ color: "#0000ff" });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
        const color = 0xffffff;
        const intensity = 1;
        const light = new DirectionalLight(color, intensity);
        light.position.set(10, 10, 0);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);

        const light2 = new AmbientLight(color, 0.1);
        scene.add(light2);


        const animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }, [child]);

    return (
        <>
            <div ref={(ref) => setChild(ref)} />
        </>
    );
}
