// Written By Harvey Randall \\

import {
    BufferAttribute,
    Mesh,
    MeshPhongMaterial,
    PlaneBufferGeometry,
    Vector2,
    Vector3,
} from "three";

import { Perlin, FBM } from "../Core-API/PerlinNoise/PerlingNoise";
var SimplexNoise = require("simplex-noise");

let currentTerrain;

export function ReturnTerrainPointer() {
    return currentTerrain;
}

/*eslint complexity: ["error", 20]*/
export function generateTerrain(seed, SceneToGet) {
    //------------[MAIN FUNCTION VARIABLES]------------\\
    const simplex = new SimplexNoise(seed);
    let geometry = new PlaneBufferGeometry(500, 500, 100, 100);
    let colours = [];

    const positionAttribute = geometry.getAttribute("position");

    //------------[Edit the Geomtry Accordingly]------------\\
    for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
        // Get Data position
        const vertex = new Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);

        // Check Height from Perlin Noise Generator
        let height = simplex.noise2D(vertex.x / 128, vertex.y / 128) * 30;
        // Set the height accordingly
        geometry.attributes.position.array[i * 3 + 2] = height;

        // Update Vertice colours accordinly
        if (height > 23) {
            colours.push(1, 1, 1);
        } else if (height > 5) {
            colours.push(0.56, 0.54, 0.48);
        } else if (height < 2) {
            colours.push(0.501, 0.772, 0.87);
        } else {
            colours.push(0.56, 0.68, 0.166);
        }
    }

    //------------[Create Material]------------\\
    var material = new MeshPhongMaterial({
        vertexColors: colours,
        reflectivity: 0,
        roughness: 1,
        flatShading: true,
    });

    //------------[Create Mesh]------------\\
    var plane2 = new Mesh(geometry, material);
    plane2.receiveShadow = true;
    plane2.castShadow = true;
    plane2.position.y = -3;
    plane2.rotateX(Math.PI / 2 + Math.PI);

    //------------[Edit colour attribute]------------\\
    geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colours), 3)
    );
    //geometry.computeVertexNormals();

    //------------[Add to Base Scene]------------\\
    currentTerrain = plane2;
    plane2.name = "MAIN_TERRAIN";
    SceneToGet.add(plane2);
}

export function generateTerrainChunk(seed, Position, gain) {
    //------------[MAIN FUNCTION VARIABLES]------------\\
    const simplex = new SimplexNoise(seed);
    let geometry = new PlaneBufferGeometry(500, 500, 100, 100);
    let colours = [];
    const fbm = new FBM({
        seed: seed,
        scale: 0.007,
        octaves: 6,
        persistance: 0.5,
        lacunarity: 2,
        redistribution: 2,
        height: 40,
      });


    const positionAttribute = geometry.getAttribute("position");
    //------------[Edit the Geomtry Accordingly]------------\\
    for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
        // Get Data position
        const vertex = new Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);

        // Check Height from Perlin Noise Generator
        
        let height = fbm.get2(new Vector2(vertex.x+(Position.x), vertex.y-(Position.y))) *gain * 4
        
        // Set the height accordingly
        geometry.attributes.position.array[i * 3 + 2] = height;

        // Update Vertice colours accordinly
        if (height > 43) {
            colours.push(1, 1, 1);
        } else if (height > 5) {
            colours.push(0.56, 0.54, 0.48);
        } else if (height < 2) {
            colours.push(0.8949, 0.9686, 0.651);
        } else {
            colours.push(0.56, 0.68, 0.166);
        }
    }
    //------------[Create Material]------------\\
    var material = new MeshPhongMaterial({
        vertexColors: colours,
        reflectivity: 0,
        roughness: 1,
        flatShading: true,
        blending:false
    });

    //------------[Create Mesh]------------\\
    var plane2 = new Mesh(geometry, material);
    plane2.receiveShadow = true;
    plane2.castShadow = true;
    plane2.position.set(Position.x, -3, Position.y);
    plane2.rotateX(Math.PI / 2 + Math.PI);

    //------------[Edit colour attribute]------------\\
    geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colours), 3)
    );

    //------------[Add to Base Scene]------------\\
    currentTerrain = plane2;
    plane2.name = `Terrain_Chunk_${Position.x}:${Position.y}`;
    return plane2;
}
