// Written By Harvey Randall \\

import { useEffect, useState } from "react";
import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
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
        const material = new MeshBasicMaterial({ color: "#00ff00" });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

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
