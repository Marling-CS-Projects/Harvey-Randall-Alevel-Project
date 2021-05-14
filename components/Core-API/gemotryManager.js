// Written By Harvey Randall \\
import { Mesh } from "three";
import * as three from 'three'
let GameCoreShadows = true; // TODO add to GUI

/*eslint complexity: ["error", 20]*/
export function createGeo(type, data, pos, rot, mat, shadow) {
  //Create type, using destructuring to pass in values
  let geo = new three[`${type}`](...data);

  //Set Geo Position and Rotation
  geo.position.set(pos);
  geo.rotation.set(rot);

  //Create the Mesh
  /*eslint new-cap: "error"*/
  let mesh = Mesh(geo, mat);

  //Handle Reciving shadows and casting
  mesh.castShadow = shadow && GameCoreShadows ? true : false;
  mesh.receiveShadow = shadow && GameCoreShadows ? true : false;

  //Return Mesh
  return mesh;
}
