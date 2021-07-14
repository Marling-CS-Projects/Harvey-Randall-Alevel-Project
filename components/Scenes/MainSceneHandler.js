// Written By Harvey Randall \\

// Render Handler
import { addToRenderSequence } from "../Core-API/RenderingHandler";

//Functional Dependencies
import {
    BufferGeometry,
    DoubleSide,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PlaneBufferGeometry,
    PlaneGeometry,
    Vector3,
} from "three";
import { GenerateClouds } from "../gameFundalmentals/clouds";
import { controlHandlerInit, controlHandlerUpdate } from "../gameFundalmentals/controls";
import { CreateDayNightCycle } from "../gameFundalmentals/DayNightCycle";
import { MakePlane } from "../gameFundalmentals/planeHandler/MainPlane";
import { generateTerrainAroundPlayer } from "../gameFundalmentals/TerrainManagement/terrainChunkriser";
import { GenerateWebWorker } from "../Core-API/WorkerSetup.ts";
import { debugCube } from "../Core-API/gemotryManager";

let debug = true;
 

export async function generateMainScene(
    SceneToGet,
    Renders,
    document,
    seed,
    child2,
    Camera
) {


    let collisionHandler = new Worker('webWorkers/Collision.js');
    collisionHandler.onmessage = function (event) {
        console.log(event);
    }
    collisionHandler.onmessageerror = function (event) {
        console.log(event);
    }
    collisionHandler.onerror = function (error) {
        console.log(error);
    }
    collisionHandler.postMessage({Command:"Start", origin: window.location.origin})

    setTimeout(() => {
        collisionHandler.postMessage({Command:"AddShape", data: new PlaneBufferGeometry(2, 2, 2, 2)})
    },1000);

    let clouds = [];
    for (let i = 0; i < 40; i++) {
        clouds.push(
            new GenerateClouds(
                new Vector3(
                    Math.random() * 300 - 300,
                    80 + Math.random() * 20,
                    Math.random() * 600 - 400
                ),
                SceneToGet,
                Math.random() * 0.2,
                Math.random() * 6 + 1
            )
        );
    }

    let daynight = new CreateDayNightCycle(SceneToGet, Renders);
    //generateTerrain(seed, SceneToGet);
    controlHandlerInit(document, child2);

    if (debug) {
        const planeGeometry = new PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2);
        const planeMaterial = new MeshStandardMaterial({
            color: "#567d46",
            side: DoubleSide,
        });
        const plane = new Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5;
        SceneToGet.add(plane);
        const gridHelper = new GridHelper(50, 50);
        gridHelper.position.y = -1;
        SceneToGet.add(gridHelper);
    }


    // Add all updating parts to a function
    addToRenderSequence(
        "Main",
        () => {
            clouds.forEach((e, i) => {
                e.update();
            });
        },
        true
    );
    let newPlane = new MakePlane(SceneToGet)
    await newPlane.loadFiles()
    newPlane.CreateGroupAndPos()
    newPlane.attachCameraAndControl(Camera)

    generateTerrainAroundPlayer(seed, Camera, SceneToGet)

    //addToRenderSequence("Main", () => controlHandlerUpdate(Camera));
    addToRenderSequence("Main", () => daynight.update(Camera));

    //console.log(GenerateWebWorker(`/webWorkers/basicTest.js`, [], (e) => {console.log(e)} ))
}
