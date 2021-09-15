// Written By Harvey Randall \\

import { useEffect, useState, useContext } from "react";
import * as THREE from "three";
import React from "react";
import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
var Stats = require("stats.js");
import { useAppContext } from "../components/Context/socketioContext";
import { generateLabel } from "../components/gameFundalmentals/nametag";
import {
    startSeverClientCommunication,
    listenToEvent,
    joinGame,
} from "../components/Core-API/ConnectAPI";
import { updateRenderCycle } from "../components/Core-API/RenderingHandler";
import { generateMainScene } from "../components/Scenes/MainSceneHandler";
import { CreateUI } from "../components/gameUI/entryPoint.tsx";
import { ControlEventListener } from "../components/gameFundalmentals/controls";
import { preLoadAllModels } from "../components/Core-API/3dModelHandlers/GLBLoader";
import { MakePlane } from "../components/gameFundalmentals/planeHandler/MainPlane.ts";

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
            rendered === true
        ) {
            return;
        }

        // Connect to server \\
        let mainGame = joinGame("Test", "Test")
        setSeed(mainGame.seed);
        setClients(mainGame.clients);
        setPersonalData(mainGame.userData);

        preLoadAllModels()

        setRendered(true);

        let stats = new Stats();
        stats.showPanel(0);
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


        let prevData = [];

        let addtoGameFeed = (name = "Unkown", event) => {
            let NewGameEventArray = [...gameEventData];
            NewGameEventArray.unshift({ name, event });
            delete NewGameEventArray[10];
            delete NewGameEventArray[11];
            setGameEventData([...NewGameEventArray]);
            prevData = NewGameEventArray;
        };

        clients.forEach(async (e) => {
            let newcube = new MakePlane(SceneToGet)
            await newcube.loadFiles()
            let cube = newcube.CreateGroupAndPos()
            addtoGameFeed(data?.name, "Joined the game!");

            generateLabel(e.name, cube);

            players[`${id}`] = cube;
        });

        socket.on("NewPlayer", async (id, data) => {
            if (id === socket.id) return;

            let newcube = new MakePlane(SceneToGet)
            await newcube.loadFiles()
            let cube = newcube.CreateGroupAndPos()
            addtoGameFeed(data?.name, "Joined the game!");

            generateLabel(data.name, cube);



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

        listenToEvent("PlayerLocationUpdate",async (id, pos, rot, data) => {
            if (id === socket.id) return;
            let cube = players[`${id}`];
            if (cube) {
                cube.rotation.set(rot._x, rot._y, rot._z);
                cube.position.set(pos.x, pos.y, pos.z);
            } else {
                let newcube = new MakePlane(SceneToGet)
                await newcube.loadFiles()
                let cube = newcube.CreateGroupAndPos()
                generateLabel(data.name, cube);
                addtoGameFeed(data?.name, "Joined the game!");



                players[`${id}`] = cube;
            }
        });
        socket.on("NewChat", (data, text) => {
            addtoGameFeed(data.name, text);
        });
        setInterval(() => {
            if (Camera?.parent?.position === undefined) return;
            socket.emit("LocationUpdate", Camera.parent.position, Camera.parent.rotation);
        }, 1000 / 30);

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

            <div ref={(ref) => { setChild(ref) } /* */}></div>
        </main>
    );
}
