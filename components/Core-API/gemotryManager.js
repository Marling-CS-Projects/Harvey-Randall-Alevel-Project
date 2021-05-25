// Written By Harvey Randall \\
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import * as three from "three";
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
    let mesh = new Mesh(geo, mat);

    //Handle Reciving shadows and casting
    mesh.castShadow = shadow && GameCoreShadows ? true : false;
    mesh.receiveShadow = shadow && GameCoreShadows ? true : false;

    //Return Mesh
    return mesh;
}

export function debugCube(){
    const geometry = new BoxGeometry( 10, 10, 10 );
    const material = new MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new Mesh( geometry, material );
    return cube
}