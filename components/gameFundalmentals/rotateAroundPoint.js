export function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
    pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld;

    if (pointIsWorld) {
        obj.parent.localToWorld(obj.position); 
    }

    obj.position.sub(point); 
    obj.position.applyAxisAngle(axis, theta);
    obj.position.add(point); 

    if (pointIsWorld) {
        obj.parent.worldToLocal(obj.position);
    }

    obj.rotateOnAxis(axis, theta);
    return theta
}