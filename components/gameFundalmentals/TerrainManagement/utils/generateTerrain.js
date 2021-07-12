export function GenerateTerrainChunkWithSettings(
    seed,
    Position,
    gain,
    divisor,
    {
        scale = 0.007,
        octaves = 6,
        persistance = 0.5,
        lacunarity = 2,
        redistribution = 2,
        height = 40,
    }
) {
    //------------[MAIN FUNCTION VARIABLES]------------\\
    const simplex = new SimplexNoise(seed);
    let geometry = new PlaneBufferGeometry(500, 500, 100, 100);
    let colours = [];
    const fbm = new FBM({
        seed: seed,
        scale,
        octaves,
        persistance,
        lacunarity,
        redistribution,
        height,
    });

    console.log(Position);

    const positionAttribute = geometry.getAttribute("position");
    //------------[Edit the Geomtry Accordingly]------------\\
    for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
        // Get Data position
        const vertex = new Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);

        // Check Height from Perlin Noise Generator

        let height =
            fbm.get2(
                new Vector2(
                    vertex.x + Position.x * divisor,
                    vertex.y - Position.y * divisor
                )
            ) *
            gain *
            4;

        // Set the height accordingly
        geometry.attributes.position.array[i * 3 + 2] = height;

        // Update Vertice colours accordinly
        if (height > 43) {
            colours.push(1, 1, 1);
        } else if (height > 5) {
            colours.push(0.56, 0.54, 0.48);
        } else if (height < -20) {
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

export function HeighWhereIam(arrayInput) {
    const fbm = new FBM({
        seed: seed,
        scale,
        octaves,
        persistance,
        lacunarity,
        redistribution,
        height,
    });
    let heights = [];
    arrayInput.forEach((element) => {
        heights.push(
            fbm.get2(
                new Vector2(
                    (element.x + Position.x) * divisor,
                    (element.y - Position.y) * divisor
                )
            ) *
                gain *
                4
        );
    });

    return heights;
}
