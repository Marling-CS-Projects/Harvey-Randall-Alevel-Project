import { Vector2, Vector3 } from "three";
import { roundnum } from "../../Algorithms/MathUtils";
import { generateTerrainChunk } from "../ProceduleTerrain";
import { GenerateTrees } from "../staticAssets/treeBuilder";
import { checkBiomeLocation } from "./utils/GenerateBiomesMap.ts";

export function generateTerrainAroundPlayer(seed, camera, scene) {
    let loadedChunks = {};
    let chunksInMem = {};
    setInterval(() => {
        let vector = new Vector3();
        camera.getWorldPosition(vector);
        let yourChunk = new Vector2(
            roundnum(vector.x, 500),
            roundnum(vector.z, 500)
        );

        let chunkyThing = (ChunkYourIn) => {
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
                GenerateTrees(100, scene, new Vector3(ChunkYourIn.x-250, 250,ChunkYourIn.y-250), new Vector3(ChunkYourIn.x+250,250,ChunkYourIn.y+250), seed, 120, 0.1, ChunkYourIn)
                chunksInMem[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = chunk;
                scene.add(chunk);
            }
        };

        chunkyThing(yourChunk)
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y))
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y+500))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y))
        chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y-500))
        chunkyThing(new Vector2(yourChunk.x, yourChunk.y-500))
        chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y-500))
    }, 1000);
}
