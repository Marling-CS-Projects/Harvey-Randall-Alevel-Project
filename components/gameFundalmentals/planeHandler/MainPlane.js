import { Group, MeshPhongMaterial, Vector3 } from "three";
import { radians_to_degrees, radiants } from "../../Algorithms/degToRad";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";
import { addToRenderSequence } from "../../Core-API/RenderingHandler";

export class MakePlane {
    constructor(SceneToGet, settings) {
        this.SceneToGet = SceneToGet;
        this.settings = settings;
        this.group = new Group();

    }

    async loadFiles() {
        this.plane = await addGLBFile(
            "/Aircraft/BasicPlane/Plane.glb",
            this.SceneToGet
        );
        this.props = await addGLBFile(
            "/Aircraft/BasicPlane/Blades.glb",
            this.SceneToGet
        );
        this.leftAirelone = await addGLBFile(
            "/Aircraft/BasicPlane/leftAirelone.glb",
            this.SceneToGet
        );
        this.rightAirelone = await addGLBFile(
            "/Aircraft/BasicPlane/rightAirelone.glb",
            this.SceneToGet
        );
        this.leftControlSurface = await addGLBFile(
            "/Aircraft/BasicPlane/LeftWingControlsSurface.glb",
            this.SceneToGet
        );
        this.rightControlSurface = await addGLBFile(
            "/Aircraft/BasicPlane/RightWingControlsSurface.glb",
            this.SceneToGet
        );
        this.rudder = await addGLBFile(
            "/Aircraft/BasicPlane/Rudder.glb",
            this.SceneToGet
        );
    }

    CreateGroupAndPos() {
        this.group.add(this.plane.scene);
        this.group.add(this.props.scene);
        this.group.add(this.leftAirelone.scene);
        this.group.add(this.rightAirelone.scene);
        this.group.add(this.rightControlSurface.scene);
        this.group.add(this.leftControlSurface.scene);
        this.group.add(this.rudder.scene);


        this.leftAirelone.scene.position.set(12.936, 15.994, -59.264);
        this.rightAirelone.scene.position.set(-12.495, 15.888, -59.294);

        this.leftControlSurface.scene.position.set(46.243, 22.536, -13.541)
        this.leftControlSurface.scene.rotateY(radiants(-7))

        this.rightControlSurface.scene.position.set(-46.2718, 22.5411, -13.5447)
        this.rightControlSurface.scene.rotateY(radiants(6.8))
        this.rightControlSurface.scene.rotateZ(radiants(-3.5))
        //this.rightControlSurface.scene.rotateX(radiants(183.57))

        this.rudder.scene.position.set(-0.022, 24.67, -68.17)
        this.rudder.scene.rotateX(radiants(-22))

        this.props.scene.position.set(0, 15, 22);
        this.SceneToGet.add(this.group);

        this.group.scale.set(0.05, 0.05, 0.05);

        let [props, leftAirelone] = [this.props.scene, this.leftAirelone.scene]

        // For testing \\
        addToRenderSequence("Main", () => {
            console.log('here')
            props.rotateZ(0.3);
            leftAirelone.rotateX(0.005);
        }, false);

        return this.group
    }
}
