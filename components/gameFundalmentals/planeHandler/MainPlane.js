import { Vector3 } from "three"
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader"


export async function MakePlane(SceneToGet, settings){
    let plane
    try{
        plane = await addGLBFile("/Airplane/index.glb",  SceneToGet)
    }catch(e){
        console.log(e)
        return false
    }
    plane.scene.scale.set(0.05,0.05,0.05)
}