import { Vector2, Vector3 } from "three";
import { roundnum } from "../../Algorithms/MathUtils";
import { generateTerrainChunk } from "../ProceduleTerrain";
import { GenerateTrees } from "../staticAssets/treeBuilder";
import { checkBiomeLocation } from "./utils/GenerateBiomesMap.ts";


export function generateTerrainAroundPlayer(seed, camera, scene) {
    let loadedChunks = {}
    let chunksInMem = {}
    setInterval(() => {
        let vector = new Vector3();
        camera.getWorldPosition(vector);
        let ChunkYourIn  = new Vector2(roundnum(vector.x, 500), roundnum(vector.z, 500))
        if(ChunkYourIn.x === -0){
            ChunkYourIn.x = 0
        }
        if(ChunkYourIn.y === -0){
            ChunkYourIn.y = 0
        }
        if(loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] !== undefined && loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] === true){
            // Existing terrain, left hear for a future API
        }else{

            // Check Chunk
            console.log(checkBiomeLocation(ChunkYourIn,seed, 0.1, 0))

            console.log('Generating, ', ChunkYourIn.x, ChunkYourIn.y, loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`])
            loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`]= true
            let chunk = generateTerrainChunk(seed, ChunkYourIn, 30);
            GenerateTrees(300, scene, new Vector3(ChunkYourIn.x-250, 250,ChunkYourIn.y-250), new Vector3(ChunkYourIn.x+250,250,ChunkYourIn.y+250), chunk)
            chunksInMem[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = chunk
            scene.add(chunk)
        }
    },1000)

}
