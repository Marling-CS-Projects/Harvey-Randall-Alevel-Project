import { BufferGeometry, Group, Mesh, MeshLambertMaterial } from "three";
import { BufferGeometryUtils } from "../Core-API/3dModelHandlers/utils";

export function _mergeMeshes(meshes) {

    console.log(([].concat(meshes.map(e => e.children))).flat())

    let inputGeo = BufferGeometryUtils.mergeBufferGeometries(([].concat(meshes.map(e => e.children))).flat(), true)


    return new Mesh(inputGeo, new MeshLambertMaterial({color:0xff0000}));

}