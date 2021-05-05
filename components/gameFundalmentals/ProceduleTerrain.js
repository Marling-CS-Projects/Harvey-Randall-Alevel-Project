// Written By Harvey Randall \\

import { BufferAttribute, Mesh, MeshPhongMaterial, PlaneBufferGeometry, } from "three"
var SimplexNoise = require('simplex-noise');

export function GenerateTerrain(seed, SceneToGet) {

    //------------[MAIN FUNCTION VARIABLES]------------\\
    const simplex = new SimplexNoise(seed)
    let geometry = new PlaneBufferGeometry(500, 500, 100, 100)
    let colours = []

    //------------[Edit the Geomtry Accordingly]------------\\
    for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
        // Get Data position
        let x = geometry.attributes.position.array[(i * 3)] / 128
        let y = geometry.attributes.position.array[(i * 3) + 1] / 128

        // Check Height from Perlin Noise Generator
        let height = simplex.noise2D(x, y) * 30
        // Set the height accordingly
        geometry.attributes.position.array[(i * 3) + 2] = height

        // Update Vertice colours accordinly
        if (height > 23) {
            colours.push(1, 1, 1)
        }
        else if (height > 5) {
            colours.push(0.56, 0.54, 0.48)
        }
        else if (height < -20) {
            colours.push(0.501, 0.772, 0.87)
        }
        else {
            colours.push(0.56, 0.68, 0.166)
        }
    }

    //------------[Create Material]------------\\
    var material = new MeshPhongMaterial({
        vertexColors: colours,
        reflectivity: 0,
        roughness: 2,
        flatShading: true,
    });

    //------------[Create MEsh]------------\\
    var plane2 = new Mesh(geometry, material);
    plane2.receiveShadow = true
    plane2.castShadow = true
    plane2.position.y = -3
    plane2.rotateX((Math.PI / 2) + Math.PI)

    //------------[Edit colour attribute]------------\\
    geometry.setAttribute('color', new BufferAttribute(new Float32Array(colours), 3));
    geometry.computeVertexNormals();
    
    
    //------------[Add to Base Scene]------------\\
    SceneToGet.add(plane2);
}