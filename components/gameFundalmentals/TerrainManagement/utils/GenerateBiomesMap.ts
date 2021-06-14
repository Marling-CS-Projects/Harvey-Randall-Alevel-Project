import { Vector2 } from "three";
import { MultiplyVector2 } from "../../../Algorithms/VectorMaths.ts";
import * as SimplexNoise from 'simplex-noise'


export function checkBiomeLocation(position:Vector2, seed:number, gain:number = 1, minHeight:number = 0):String{
    // Create new noise map \\
    let noiseMap = new SimplexNoise(`${seed}`)

    // Calculate X value \\
    let vector = MultiplyVector2(position, 0.05)
    let XValue = noiseMap.noise2D(vector.x, vector.y) + minHeight
    console.log(XValue)

    return XValue > 0 ? "Plains" : "Sea"

}
