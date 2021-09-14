import { Group, Vector2, Vector3 } from "three";
import { roundnum } from "../../Algorithms/MathUtils";
import { stopLoading } from "../../Core-API/3dModelHandlers/GLBLoader";
import { generateTerrainChunk } from "../ProceduleTerrain";
import { GenerateTrees } from "../staticAssets/treeBuilder";
import { checkBiomeLocation } from "./utils/GenerateBiomesMap.ts";

let renderDistance = 5;

export function generateTerrainAroundPlayer(seed, camera, scene) {
    let loadedChunks = {};
    let chunksInMem = {};
    let laoding = true

    let TerrainGroup = new Group()

    scene.add(TerrainGroup)
    setInterval(() => {
        let vector = new Vector3();
        camera.getWorldPosition(vector);
        let yourChunk = new Vector2(
            roundnum(vector.x, 500),
            roundnum(vector.z, 500)
        );

        let chunkyThing = async (ChunkYourIn) => {
            if (ChunkYourIn.x === -0) {
                ChunkYourIn.x = 0;
            }
            if (ChunkYourIn.y === -0) {
                ChunkYourIn.y = 0;
            }
            if (
                loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] !==
                    undefined &&
                loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] === true
            ) {
                // Existing terrain, left hear for a future API
            } else {
                // Check Chunk

                loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = true;
                let chunk = generateTerrainChunk(seed, ChunkYourIn, 120, 0.1);
                let trees = await GenerateTrees(50, scene, new Vector3(ChunkYourIn.x-250, 250,ChunkYourIn.y-250), new Vector3(ChunkYourIn.x+250,250,ChunkYourIn.y+250), seed, 120, 0.1, ChunkYourIn)
                chunksInMem[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = {chunk, trees};
                TerrainGroup.add(chunk);
                TerrainGroup.add(trees)
            }
        };

        chunkyThing(yourChunk)
        let defaultX = (-(renderDistance * 500)) + yourChunk.x
        let lookingChunkX = defaultX
        let lookingChunkY = (-(renderDistance * 500)) + yourChunk.y
        for(let i=0;i<renderDistance * 2;i++){
            for(let k=0;k<renderDistance * 2;k++){
                chunkyThing(new Vector2(lookingChunkX, lookingChunkY))
                lookingChunkX += 500
            }
            lookingChunkX = defaultX
            lookingChunkY += 500
        }

        let chunkDistmance = (renderDistance * 500)
        let diagonal = Math.sqrt(chunkDistmance**2+chunkDistmance**2)

        // Unload chunks
        Object.entries(chunksInMem).forEach(
            ([key, value]) => {
                let [x, y] = key.split(":")
                let vectorNew = new Vector2(x,y)
                let magnitide = vectorNew.distanceTo(yourChunk)

                if(magnitide > diagonal){
                    // Remove chunk
                    loadedChunks[key] = false;
                    TerrainGroup.remove(value.chunk)
                    TerrainGroup.remove(value.trees)
                    console.log(`Removed ${key}!`)
                }
            }
        );

        /*
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y))
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y-500))
        chunkyThing(new Vector2(yourChunk.x, yourChunk.y-500))
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y-500))*/

        // Now unload old chunks



        if(laoding){
            laoding = false
            stopLoading()
        }
    }, 1000);
}

