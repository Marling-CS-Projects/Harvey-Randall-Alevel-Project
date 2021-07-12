import { BufferGeometry, Matrix4, Vector3 } from "three";
import { BufferGeometryUtils } from "./utils";

export function MergeMeshes(input: BufferGeometry[], location: Vector3[]): BufferGeometry {
    console.log(input);

    input.forEach((e,i) => {
        input[i] =  e.applyMatrix4(new Matrix4().makeTranslation(location[i].x, location[i].y, location[i].z))
    })

    let bufferGeom = BufferGeometryUtils.mergeBufferGeometries(input, false)

    return bufferGeom
}
