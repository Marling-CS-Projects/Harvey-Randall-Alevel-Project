import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { ControlEventListener } from "../gameFundalmentals/controls";
import { generateLabel } from "../gameFundalmentals/nametag";
import { MakePlane } from "../gameFundalmentals/planeHandler/MainPlane.ts";
import { addToFeed } from "../gameUI/components/mainFeed.ts";
import { generateMainScene } from "../Scenes/MainSceneHandler";
import { listenToEvent, sendDataToServer } from "./ConnectAPI";
import { updateRenderCycle } from "./RenderingHandler";
var Stats = require("stats.js");

export interface PlayerData {
    name: string
    id: string
}

export class GenerateWorld {
    private running: Boolean

    constructor() {
        this.running = true
    }

    end = () => {
        this.running = false
    }

    async update(child: any, recievedSeed: string, child2: any, clients: PlayerData[], myId: string) {
        // Connect to server \\


        let stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        let SceneToGet = new Scene();

        let pixelRatio = window.devicePixelRatio
        let AA = true
        if (pixelRatio > 1) {
            AA = false
        }

        let Renders = new WebGLRenderer({
            alpha: true,
            logarithmicDepthBuffer: true,
            antialias: AA,
            powerPreference: "high-performance",
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


        clients.forEach(async (e) => {
            let newcube = new MakePlane(SceneToGet);
            await newcube.loadFiles();
            let cube = newcube.CreateGroupAndPos();
            addToFeed(e?.name, "Joined the game!")

            generateLabel(e.name, cube);

            players[`${e.id}`] = cube;
        });

        listenToEvent("NewPlayer", async (id, data) => {
            if (id === myId) return;

            let newcube = new MakePlane(SceneToGet);
            await newcube.loadFiles();
            let cube = newcube.CreateGroupAndPos();
            addToFeed(data?.name, "Joined the game!")

            generateLabel(data.name, cube);

            players[`${id}`] = cube;
        })


        listenToEvent("LostPLayer", (id, how, data) => {
            let cube = players[`${id}`];
            SceneToGet.remove(cube);
            delete players[`${id}`];
            addToFeed(
                data?.name,
                how === true
                    ? "Was removed from the game for being inactive"
                    : "Left the game!"
            );
        });

        listenToEvent(
            "PlayerLocationUpdate",
            async (id, pos, rot, data) => {
                if (id === myId) return;
                let cube = players[`${id}`];
                if (cube) {
                    cube.rotation.set(rot._x, rot._y, rot._z);
                    cube.position.set(pos.x, pos.y, pos.z);
                } else {
                    let newcube = new MakePlane(SceneToGet);
                    await newcube.loadFiles();
                    let cube = newcube.CreateGroupAndPos();
                    generateLabel(data.name, cube);
                    addToFeed(data?.name, "Joined the game!");

                    players[`${id}`] = cube;
                }
            }
        );
        listenToEvent("NewChat", (data, text) => {
            addToFeed(data.name, text);
        });
        setInterval(() => {
            if (Camera?.parent?.position === undefined) return;
            sendDataToServer("LocationUpdate",
                [Camera.parent.position,
                Camera.parent.rotation])
        }, 1000 / 30);

        console.log("here")

        var animate = async () => {
            stats.begin();

            console.log("Scene polycount:", Renders.info.render.triangles)
            console.log("Active Drawcalls:", Renders.info.render.calls)
            console.log("Textures in Memory", Renders.info.memory.textures)
            console.log("Geometries in Memory", Renders.info.memory.geometries)

            if (this?.running) {
                requestAnimationFrame(animate);
            }


            // Update all moving parts
            updateRenderCycle(CurrentScene);

            Renders.render(SceneToGet, Camera);
            stats.end();
        };

        animate();
    }
}