import { ArrowHelper, Group, MeshBasicMaterial, MeshLambertMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, Raycaster, Vector3 } from "three";
import { radiants } from "../../Algorithms/degToRad";
import { randomVectorBetweenPoints2D } from "../../Algorithms/VectorUtils";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";
import { BufferGeometryUtils } from '../../Core-API/3dModelHandlers/utils'

export async function GenerateTrees(num, scene, start, bounds, terrain){
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
    let trunk = new MeshLambertMaterial({color: 0x216734 })
    tree.scene.children[0].material = leaves
    tree.scene.children[1].material = trunk
    snowyTree.scene.children[0].material = leaves
    snowyTree.scene.children[1].material = trunk
    snowyTree.scene.children[2].material = new MeshLambertMaterial({color: 0xffffff })

    palmTree.scene.children[0].material = trunk

    
    let group = new Group()
    let raycaster = new Raycaster()
    let trees = []
    for(let i=0;i<num;i++){
        let randomVector = randomVectorBetweenPoints2D( start, bounds)
        randomVector.y = 50

        raycaster.set(randomVector, new Vector3(0,-1,0))
        const intersects = raycaster.intersectObjects( [terrain] );

        

        if(intersects[0] !== undefined && intersects[0]?.point.y > 2 && intersects[0]?.point.y < 20){
            let newTree = tree.scene.clone()
            newTree.rotateY(radiants(Math.random()*360))
            let point = intersects[0].point
            newTree.position.set(point.x, point.y, point.z)
            group.add(newTree)
        }else if(intersects[0] !== undefined && intersects[0]?.point.y < 2 && intersects[0]?.point.y > 0){
            let newTree = palmTree.scene.clone()
            newTree.rotateY(radiants(Math.random()*360))
            let point = intersects[0].point
            newTree.position.set(point.x, point.y-1, point.z)
            group.add(newTree)

        }else if(intersects[0] !== undefined && intersects[0]?.point.y > 20){
            let newTree = snowyTree.scene.clone()
            newTree.rotateY(radiants(Math.random()*360))
            let point = intersects[0].point
            newTree.position.set(point.x, point.y, point.z)
            group.add(newTree)
        }
        
    }
    scene.add(group)
}