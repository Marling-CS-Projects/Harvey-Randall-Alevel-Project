import { Group, Mesh, MeshLambertMaterial, Raycaster, Vector3 } from "three";
import { radiants } from "../../Algorithms/degToRad";
import { _mergeMeshes } from "../../Algorithms/meshMerger.js";
import { randomVectorBetweenPoints2D } from "../../Algorithms/VectorUtils";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";
import { MergeMeshes } from "../../Core-API/3dModelHandlers/MeshMerger.ts";
import { getTerrainHeight } from "../ProceduleTerrain";

function placeTree(tree, intersects, randomVec){
    let newTree = tree.scene.clone()
    newTree.rotateY(radiants(Math.random()*360))
    let point = intersects
    newTree.position.set(randomVec.x, point, randomVec.z)
    return {newTree, vetor: new Vector3(randomVec.x, point, randomVec.z)}
}

export async function GenerateTrees(num, scene, start, bounds, seed, gain, divisor){
    let tree = await addGLBFile(
        "/Assets/PineTree.glb",
        scene
    );
    let snowyTree = await addGLBFile(
        "/Assets/SnowyPineTree.glb",
        scene
    );
    let palmTree = await addGLBFile(
        "/Assets/Palm_Tree.glb",
        scene
    )

    let leaves = new MeshLambertMaterial({color: 0x694b37 })
    let brighLeaves = new MeshLambertMaterial({color: 0x6F9940 })
    let trunk = new MeshLambertMaterial({color: 0x216734 })
    let snowy = new MeshLambertMaterial({color: 0xffffff })
    tree.scene.children[0].material = leaves
    tree.scene.children[1].material = trunk
    snowyTree.scene.children[0].material = leaves
    snowyTree.scene.children[1].material = trunk
    snowyTree.scene.children[2].material = snowy

    let newpalmTree = palmTree.scene.children[0]


    newpalmTree.children[0].material = trunk
    newpalmTree.children[1].material = brighLeaves
    newpalmTree.children[2].material = brighLeaves

    tree.scene.scale.set(3,3,3);
    snowyTree.scene.scale.set(3,3,3);
    palmTree.scene.scale.set(4,4,4);

    let trees = new Group()
    
    for(let i=0;i<num;i++){
        let randomVector = randomVectorBetweenPoints2D( start, bounds)
        randomVector.y = 50   

        let height = getTerrainHeight(randomVector, seed, gain, divisor, scene)
        if(height > 80 && height < 200){
            let placeTreeOut = placeTree(snowyTree, height, randomVector)
            trees.add(placeTreeOut.newTree)
        }else if(height < 80 && height > 8){
            let placeTreeOut = placeTree(tree, height, randomVector)
            trees.add(placeTreeOut.newTree)
        }else if(height > 5 ){
            let placeTreeOut = placeTree(palmTree, height, randomVector)
            trees.add(placeTreeOut.newTree)
        }
        
    }

    return trees

}