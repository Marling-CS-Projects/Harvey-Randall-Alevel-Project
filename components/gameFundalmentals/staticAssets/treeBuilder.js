import { Group } from "three";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";

export async function GenerateTrees(num, scene){
    let tree = await addGLBFile(
        "/Assets/PineTree.glb",
        scene
    );
    scene.add(tree.scene)
    console.log(tree.scene.children)
    tree.scene.children[0].material.color.setHex( 0x694b37 );
    tree.scene.children[1].material.color.setHex( 0x694b37 );
    /*
    let group = new Group()
    for(let i=0;i<num;i++){
        let newTree = tree.scene.clone()
        newTree.position.set(Math.random()*50,Math.random()*50, Math.random()*50)
        group.add(newTree)
        console.log('here')
    }
    scene.add(group)*/
}