// Written By Harvey Randall \\

// Render Handler
import { addToRenderSequence } from "../Core-API/RenderingHandler"

//Functional Dependencies
import { DoubleSide, GridHelper, Mesh, MeshStandardMaterial, PlaneGeometry, Vector3 } from "three"
import { GenerateClouds } from "./clouds"
import { ControlHandlerInit, ControlHandlerUpdate } from "./controls"
import { CreateDayNightCycle } from "./DayNightCycle"
import { GenerateTerrain } from "./ProceduleTerrain"
import { ImportOBJ } from "../Core-API/OBJHandler"

let debug = true

export function GenerateMainScene(SceneToGet, Renders, document, seed, child2, Camera){

    let clouds = []
    for (let i = 0; i < 40; i++) {
        clouds.push(new GenerateClouds(new Vector3((Math.random() * 300) - 300, 80 + Math.random() * 20, (Math.random() * 600) - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1))
    }

    let daynight = new CreateDayNightCycle(SceneToGet, Renders)
    GenerateTerrain(seed, SceneToGet)
    ControlHandlerInit(document, child2)

    if(debug){
        const planeGeometry = new PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        SceneToGet.add(plane);
        const gridHelper = new GridHelper(50, 50);
        gridHelper.position.y = -1;
        SceneToGet.add(gridHelper);
    }

    ImportOBJ("Airplane", SceneToGet)

    // Add all updating parts to a function
    addToRenderSequence("Main", () => {
        clouds.forEach((e, i) => {
            e.update()
        })
    }, true)

    addToRenderSequence("Main", () => ControlHandlerUpdate(Camera))
    addToRenderSequence("Main", () =>  daynight.update())

}