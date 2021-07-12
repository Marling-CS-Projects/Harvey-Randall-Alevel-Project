import { BufferAttribute, Mesh, MeshPhongMaterial, PlaneBufferGeometry, Vector2, Vector3 } from "three";
import { radiants } from "../components/Algorithms/degToRad"
import * as SimplexNoise from 'simplex-noise'
import { randomIntFromInterval } from "../components/Algorithms/VectorUtils";


export function createOcean(scene){
    let plane = new PlaneBufferGeometry(500, 500, 100, 100);

    //const material = new MeshPhongMaterial( {color: 0x0077be, flatShading:true} );

    let noiseMap = new SimplexNoise(`${Math.random()}`)


    let offset = 10

    let Position = new Vector2(0,0)

    let gain = 0.75

    let colours = [];

    let startTime = 0
    let init =  () => {
        startTime++
        const positionAttribute = plane.getAttribute("position");
        //------------[Edit the Geomtry Accordingly]------------\\
        for (var i = 0, l = plane.attributes.position.count; i < l; i++) {
            // Get Data position
            const vertex = new Vector3();
            vertex.fromBufferAttribute(positionAttribute, i);

            // Check Height from Perlin Noise Generator
            
            //let height = noiseMap.noise2D(vertex.x+(Position.x)+offset, vertex.y-(Position.y)+offset) * gain

            let height = noiseMap.noise2D(vertex.x/10+startTime, vertex.y/10+startTime) * gain
            
            // Set the height accordingly
            plane.attributes.position.array[i * 3 + 2] = height;

            // Update Vertice colours accordinly
            
            
            if (height > 0.4) {
                colours.push(0,0.567,0.845);
            }else{
                //randomIntFromInterval
                colours.push(0,randomIntFromInterval(400, 500)/1000,randomIntFromInterval(700, 800)/1000)
            }
        }
        //mesh.updateMatrix()
    }

    init()

    setInterval(init(), 1000)

    //------------[Create Material]------------\\
    var material = new MeshPhongMaterial({
        vertexColors: colours,
        reflectivity: 0,
        roughness: 1,
        flatShading: true,
    });

    //------------[Edit colour attribute]------------\\
    plane.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colours), 3)
    );


    let mesh = new Mesh(plane, material)

    mesh.renderOrder = 100

    mesh.position.y = -2
    mesh.rotateX(radiants(-90))


    //scene.add(mesh)


}