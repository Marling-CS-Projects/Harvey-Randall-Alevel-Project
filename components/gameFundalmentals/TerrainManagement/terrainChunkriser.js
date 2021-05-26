import { Vector2, Vector3 } from "three";
import { roundnum } from "../../Algorithms/MathUtils";
import { generateTerrainChunk } from "../ProceduleTerrain";
import { GenerateTrees } from "../staticAssets/treeBuilder";

let loadedChunks = {}
let chunksInMem = {}

export function generateTerrainAroundPlayer(seed, camera, scene) {
    setInterval(() => {
        let vector = new Vector3();
        camera.getWorldPosition(vector);
        console.log(loadedChunks)

        let ChunkYourIn  = new Vector2(roundnum(vector.x, 500), roundnum(vector.z, 500))
        if(ChunkYourIn.x === -0){
            ChunkYourIn.x = 0
        }
        if(ChunkYourIn.y === -0){
            ChunkYourIn.y = 0
        }
        if(loadedChunks[`${ChunkYourIn.x}`] !== undefined && loadedChunks[`${ChunkYourIn.x}`][`${ChunkYourIn.y}`] === true){
            console.log('exists', ChunkYourIn.x, ChunkYourIn.y)
        }else{
            console.log('Generating, ', ChunkYourIn.x, ChunkYourIn.y, loadedChunks[`${ChunkYourIn.x}`]?.[`${ChunkYourIn.y}`])
            loadedChunks[`${ChunkYourIn.x}`] = {}
            loadedChunks[`${ChunkYourIn.x}`][`${ChunkYourIn.y}`] = true
            let chunk = generateTerrainChunk(seed, ChunkYourIn, 30);
            GenerateTrees(300, scene, new Vector3(ChunkYourIn.x-250, 250,ChunkYourIn.y-250), new Vector3(ChunkYourIn.x+250,250,ChunkYourIn.y+250), chunk)
            chunksInMem[`${ChunkYourIn.x}`] = {}
            chunksInMem[`${ChunkYourIn.x}`][`${ChunkYourIn.y}`] = chunk
            scene.add(chunk)
        }
        //let chunk = generateTerrainChunk(seed, camera, 30);
    },1000)

}
