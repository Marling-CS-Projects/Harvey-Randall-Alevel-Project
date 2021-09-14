// Written By Harvey Randall \\

import { useEffect, useState, useContext } from "react";
import * as THREE from "three";
import React from "react";
import { Fog, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
var Stats = require("stats.js");
import { useAppContext } from "../components/Context/socketioContext";
import { generateLabel } from "../components/gameFundalmentals/nametag";
import {
    startSeverClientCommunication,
    listenToEvent,
} from "../components/Core-API/ConnectAPI";
import { updateRenderCycle } from "../components/Core-API/RenderingHandler";
import { generateMainScene } from "../components/Scenes/MainSceneHandler";
import { CreateUI } from "../components/gameUI/entryPoint.tsx";
import { ControlEventListener } from "../components/gameFundalmentals/controls";
import { preLoadAllModels } from "../components/Core-API/3dModelHandlers/GLBLoader";

export default function render() {
    const [child, setChild] = useState();
    const [gameEventData, setGameEventData] = useState([]);

    const [day, setDay] = useState("not day");
    const [child2, setChild2] = useState();
    const socket = useAppContext();
    const [recievedSeed, setSeed] = useState();
    const [rendered, setRendered] = useState(false);
    const [clients, setClients] = useState([]);
    const [personData, setPersonalData] = useState();

    const [positon, setPosition] = useState(new Vector3().toArray());

    startSeverClientCommunication(socket);

    socket.once("welcome", (seed, client, data) => {
        setSeed(seed);
        setClients(client);
        setPersonalData(data);
    });

    useEffect(() => {
        if (
            typeof child === "undefined" ||
            typeof recievedSeed === "undefined" ||
            rendered === true
        ) {
            return;
        }

        preLoadAllModels()

        setRendered(true);

        let stats = new Stats();
        stats.showPanel(2);
        document.body.appendChild(stats.dom);

        let SceneToGet = new Scene();
        let Renders = new WebGLRenderer({
            antialias: true,
            alpha: true,
            ogarithmicDepthBuffer: true,
        });

        Renders.setClearColor("#87ceeb", 1);



        Renders.setSize(window.innerWidth, window.innerHeight);
        child.appendChild(Renders.domElement);

        let CurrentScene = "Main";

        var Camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100000000
        );

        window.addEventListener("resize", onWindowResize, false);

        function onWindowResize() {
            Camera.aspect = window.innerWidth / window.innerHeight;
            Camera.updateProjectionMatrix();

            Renders.setSize(window.innerWidth, window.innerHeight);
        }

        generateMainScene(
            SceneToGet,
            Renders,
            document,
            recievedSeed,
            child2,
            Camera
        );

        Renders.domElement.requestPointerLock();
        ControlEventListener(document, child2);

        let players = [];

        function makeCube(color = "rgb(0,0,0)", name = "unkown") {
            const group = new THREE.Group();
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshLambertMaterial({
                color: new THREE.Color(color),
                emissive: new THREE.Color(color),
            });
            const cube = new THREE.Mesh(geometry, material);
            group.add(cube);
            const cyclinder = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 30);
            const material2 = new THREE.MeshLambertMaterial({
                color: "#000000",
            });
            const cylinderBuild = new THREE.Mesh(cyclinder, material2);
            cylinderBuild.rotateX(Math.PI / 2 + Math.PI);
            cylinderBuild.position.set(0, 0, -0.6);
            group.add(cylinderBuild);

            generateLabel(name, group);
            SceneToGet.add(group);
            group.name = name;
            return group;
        }

        let prevData = [];

        let addtoGameFeed = (name = "Unkown", event) => {
            let NewGameEventArray = [...gameEventData];
            NewGameEventArray.unshift({ name, event });
            delete NewGameEventArray[10];
            delete NewGameEventArray[11];
            setGameEventData([...NewGameEventArray]);
            prevData = NewGameEventArray;
        };

        clients.forEach((e) => {
            let cube = makeCube(e.color, e.name);
            players[`${e}`] = cube;
        });

        socket.on("NewPlayer", (id, data) => {
            let cube = makeCube(data.color, data.name);
            addtoGameFeed(data?.name, "Joined the game!");

            players[`${id}`] = cube;
        });

        socket.on("LostPLayer", (id, how, data) => {
            let cube = players[`${id}`];
            SceneToGet.remove(cube);
            delete players[`${id}`];
            addtoGameFeed(
                data?.name,
                how === true
                    ? "Was removed from the game for being inactive"
                    : "Left the game!"
            );
        });

        listenToEvent("PlayerLocationUpdate", (id, pos, rot, data) => {
            let cube = players[`${id}`];
            if (cube) {
                cube.rotation.set(rot._x, rot._y, rot._z);
                cube.position.set(pos.x, pos.y, pos.z);
            } else {
                let cube = makeCube(data?.color, data?.name);

                players[`${id}`] = cube;
            }
        });
        socket.on("NewChat", (data, text) => {
            addtoGameFeed(data.name, text);
        });
        setInterval(() => {
            let vector = new Vector3();
            Camera.getWorldPosition(vector);
            socket.emit("LocationUpdate", vector, Camera.rotation);
        }, 10);

        var animate = async function () {
            stats.begin();
            requestAnimationFrame(animate);

            // Update all moving parts
            updateRenderCycle(CurrentScene);

            setPosition(
                `X: ${Math.round(Camera.position.x)}} Y: ${Math.round(
                    Camera.position.y
                )}} Z: ${Math.round(Camera.position.z)}}`
            );

            Renders.render(SceneToGet, Camera);
            stats.end();
        };

        animate();
    }, [child, clients]);

    let sendChat = (e) => {
        e.preventDefault();
        socket.emit("sendChat", child2.value);
        child2.value = "";
    };

    return (
        <main>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                }}>
                <CreateUI />
            </div>

            <div ref={(ref) => { setChild(ref) } /* */   }></div>
        </main>
    );
}
