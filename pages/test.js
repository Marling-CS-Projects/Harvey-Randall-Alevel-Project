// Written By Harvey Randall \\

import { useEffect, useState, useContext } from "react";
import * as THREE from "three";
import CameraControls from "camera-controls";
import { DoubleSide, PerspectiveCamera, Scene, WebGLRenderer } from "three";
var Stats = require("stats.js");
import { useAppContext } from "../components/Context/socketioContext";
import { generateLabel } from "../components/gameFundalmentals/nametag";
import {
    startSeverClientCommunication,
    listenToEvent,
} from "../components/Core-API/ConnectAPI";
import { updateRenderCycle } from "../components/Core-API/RenderingHandler";
import { generateMainScene } from "../components/gameFundalmentals/MainSceneHandler";
import { CreateUI } from "../components/gameUI/gameFeed";
CameraControls.install({ THREE: THREE });

export default function render() {
    const [child, setChild] = useState(undefined);
    const [gameEventData, setGameEventData] = useState([]);

    const [newTheta, setTheat] = useState(0);
    const [day, setDay] = useState("not day");
    const [child2, setChild2] = useState(undefined);
    const [pos, setPos] = useState(undefined);
    const [rot, setRot] = useState(undefined);
    const socket = useAppContext();
    const [recievedSeed, setSeed] = useState(undefined);
    const [rendered, setRendered] = useState(false);
    const [clients, setClients] = useState([]);
    const [personData, setPersonalData] = useState(undefined);
    const [latestPerson, setLatestestPerson] = useState([]);

    startSeverClientCommunication(socket);

    socket.once("welcome", (seed, client, data) => {
        setSeed(seed);
        setClients(client);
        setPersonalData(data);
    });

    useEffect(() => {
        if (
            child === undefined ||
            recievedSeed === undefined ||
            rendered === true
        )
            return;
        setRendered(true);

        let stats = new Stats();
        stats.showPanel(1);
        document.body.appendChild(stats.dom);

        let SceneToGet = new Scene();
        let Renders = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        Renders.setClearColor("#87ceeb", 1);

        Renders.setSize(window.innerWidth, window.innerHeight);
        child.appendChild(Renders.domElement);

        let CurrentScene = "Main";

        var Camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        generateMainScene(
            SceneToGet,
            Renders,
            document,
            recievedSeed,
            child2,
            Camera
        );

        Renders.domElement.requestPointerLock();

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
            let NewGameEventArray = [...gameEventData]
            NewGameEventArray.unshift({ name: name, event: event });
            delete NewGameEventArray[10];
            delete NewGameEventArray[11];
            setGameEventData([...NewGameEventArray]);
            prevData = NewGameEventArray;
        };

        clients.forEach((e) => {
            let cube = makeCube(e.color, e.name);
            players[e] = cube;
        });

        socket.on("NewPlayer", (id, data) => {
            let cube = makeCube(data.color, data.name);
            addtoGameFeed(data?.name, "Joined the game!");

            players[id] = cube;
        });

        socket.on("LostPLayer", (id, how, data) => {
            let cube = players[id];
            SceneToGet.remove(cube);
            delete players[id];
            addtoGameFeed(
                data?.name,
                how === true
                    ? "Was removed from the game for being inactive"
                    : "Left the game!"
            );
        });

        listenToEvent("PlayerLocationUpdate", (id, pos, rot, data) => {
            let cube = players[id];
            if (cube) {
                cube.rotation.set(rot._x, rot._y, rot._z);
                cube.position.set(pos.x, pos.y, pos.z);
            } else {
                let cube = makeCube(data?.color, data?.name);

                players[id] = cube;
            }
        });
        socket.on("NewChat", (data, text) => {
            addtoGameFeed(data.name, text);
        });
        setInterval(() => {
            socket.emit("LocationUpdate", Camera.position, Camera.rotation);
        }, 10);

        var animate = function () {
            stats.begin();
            requestAnimationFrame(animate);

            // Update all moving parts
            updateRenderCycle(CurrentScene);

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
            <h1
                style={{
                    position: "fixed",
                    marginTop: "40px",
                    color: "white",
                }}>
                {personData === undefined ? "LOADING..." : personData.name}
            </h1>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    marginTop: "80px",
                }}>
                <CreateUI />
                <form onSubmit={sendChat}>
                    <input ref={(ref) => setChild2(ref)}></input>
                    <input type="Submit"></input>
                </form>
                {[...gameEventData].map((e) => {
                    if (e == undefined) return;
                    return (
                        <h4 style={{ color: "white" }}>
                            {e.name} - {e.event}
                        </h4>
                    );
                })}
            </div>
            {recievedSeed === undefined ?? <h1>LOADING SEED!</h1>}
            <div ref={(ref) => setChild(ref)}></div>
            <div ref={(ref) => setChild(ref)}></div>
        </main>
    );
}
