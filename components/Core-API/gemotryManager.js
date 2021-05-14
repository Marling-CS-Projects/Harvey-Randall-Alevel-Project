// Written By Harvey Randall \\
import * as THREE from "three";
let GameCoreShadows = true; // TODO add to GUI

export function createGeo(type, data, pos, rot, mat, shadow) {
  //Create type, using destructuring to pass in values
  let geo = new THREE[type](...data);

  //Set Geo Position and Rotation
  geo.position.set(pos);
  geo.rotation.set(rot);

  //Create the Mesh
  let Mesh = THREE.Mesh(geo, mat);

  //Handle Reciving shadows and casting
  Mesh.castShadow = shadow && GameCoreShadows ? true : false;
  Mesh.receiveShadow = shadow && GameCoreShadows ? true : false;

  //Return Mesh
  return Mesh;
}
