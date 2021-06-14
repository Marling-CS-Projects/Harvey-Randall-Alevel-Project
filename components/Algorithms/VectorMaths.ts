import { Vector2, Vector3 } from "three";

export function MultiplyVector2(vector:Vector2, multiplier:number):Vector2 {
    console.log(vector)
    return new Vector2(vector.x * multiplier, vector.y * multiplier)
}
export function MultiplyVector3(vector:Vector3, multiplier:number):Vector3 {
    return new Vector3(vector.x * multiplier, vector.y * multiplier, vector.z * multiplier)
}