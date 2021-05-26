// Written By Harvey Randall \\

// Render Handler
import { addToRenderSequence } from "../Core-API/RenderingHandler";

//Functional Dependencies
import {
    DoubleSide,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PlaneGeometry,
    Vector3,
} from "three";
import { GenerateClouds } from "../gameFundalmentals/clouds";
import { controlHandlerInit, controlHandlerUpdate } from "../gameFundalmentals/controls";
import { CreateDayNightCycle } from "../gameFundalmentals/DayNightCycle";
import { MakePlane } from "../gameFundalmentals/planeHandler/MainPlane";
import { generateTerrainAroundPlayer } from "../gameFundalmentals/TerrainManagement/terrainChunkriser";

let debug = true;

export async function generateMainScene(
    SceneToGet,
    Renders,
    document,
    seed,
    child2,
    Camera
) {
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
    addToRenderSequence("Main", () => daynight.update());
}
