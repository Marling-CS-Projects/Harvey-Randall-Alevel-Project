import seedrandom from "seedrandom";
import { Vector3 } from "three";

export function randomIntFromInterval( min, max) {
    let myrng = new seedrandom();
    return Math.floor(myrng() * (max - min + 1) + min);
}
export function randomVectorBetweenPoints2D(Vector1, Vector2){
    return new Vector3(randomIntFromInterval( Vector1.x, Vector2.x),randomIntFromInterval( Vector1.y, Vector2.y),randomIntFromInterval( Vector1.z, Vector2.z))
}