import { ArrowHelper, Group, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, Raycaster, Vector3 } from "three";
import { radiants } from "../../Algorithms/degToRad";
import { randomVectorBetweenPoints2D } from "../../Algorithms/VectorUtils";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";
import { ReturnTerrainPointer } from "../ProceduleTerrain";

export async function GenerateTrees(num, scene, start, bounds, seed){
    let tree = await addGLBFile(
        "/Assets/PineTree.glb",
        scene
    );
    scene.add(tree.scene)
    console.log(tree.scene.children)
    tree.scene.children[0].material = new MeshStandardMaterial({color: 0x694b37 })
    tree.scene.children[1].material = new MeshStandardMaterial({color: 0x216734 })
    
    let group = new Group()
    let raycaster = new Raycaster()
    for(let i=0;i<num;i++){
        let randomVector = randomVectorBetweenPoints2D( start, bounds)
        randomVector.y = 50

        raycaster.set(randomVector, new Vector3(0,-1,0))
        const intersects = raycaster.intersectObjects( [ReturnTerrainPointer()] );

        if(intersects[0] !== undefined && intersects[0]?.point.y > -20){
            let newTree = tree.scene.clone()
            newTree.rotateY(radiants(Math.random()*360))
            let point = intersects[0].point
            newTree.position.set(point.x, point.y, point.z)
            group.add(newTree)
        }
    }
    scene.add(group)
}