
self.onmessage = function handleTheMessage(msg) {
    let world;
    let bodies;
    if (msg.data.Command === "Start") {
        importScripts(
            msg.data.origin + "/Scripts/cannon.min.js"
        );

        postMessage("I'm a webworker");

        world = new CANNON.World();
        world.gravity.set(0, -10, 0);
        world.solver.tolerance = 0.001;

        bodies = [];

    }

    // Now handle what it wants to do
    if (msg.data.Command === "AddShape") {
        const body = new CANNON.Body({ mass: 0 });
        let shape = msg.data.data;
        console.log(shape);

        let shapes = []
        let cannonPoints = shape.attributes.position.array
        for(let i=0;cannonPoints.length>i;i+=3){
            shapes.push(new CANNON.Vec3(cannonPoints[i],cannonPoints[i+1],cannonPoints[i+2]))
        }
        console.log(shapes);
        console.log(cannonPoints);
    }

};
