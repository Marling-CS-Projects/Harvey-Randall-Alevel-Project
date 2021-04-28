// Written By Harvey Randall \\

import { AmbientLight, DirectionalLight } from "three";

export function CreateDirectionalLight(Scene, color, brightness, pos) {

    // ---------- [Simple Directional Light Manager] ---------- \\
    const directionalLight = new DirectionalLight(color, brightness, 100);
    directionalLight.position.set(...pos) // ES6 Only way to destructure POS array

    //Shadown Managers
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.far = 3000;

    //Add to Scene
    Scene.add(directionalLight);
    return directionalLight
}


export function CreateAmbientLight(Scene, color, brightness){
    const light = new AmbientLight(color, brightness); // soft white light
    Scene.add(light);
    return light
}