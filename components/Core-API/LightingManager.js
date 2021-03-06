// Written By Harvey Randall \\

import { AmbientLight, DirectionalLight, PointLight } from "three";

export function createDirectionalLight(Scene, color, brightness, pos) {
  // ---------- [Simple Directional Light Manager] ---------- \\
  const directionalLight = new DirectionalLight(color, brightness, 100);
  directionalLight.position.set(...pos); // ES6 Only way to destructure POS array

  //Shadown Managers
  directionalLight.castShadow = false;

  //Add to Scene
  Scene.add(directionalLight);
  return directionalLight;
}

export function createAmbientLight(Scene, color, brightness) {
  const light = new AmbientLight(color, brightness); // soft white light
  Scene.add(light);
  return light;
}

export function createPointLight(color, brightness, pos, intensity){
  const PointLightNew = new PointLight(color, brightness, intensity, 100)
  PointLightNew.position.set(...pos)

  
  return PointLightNew
} 
