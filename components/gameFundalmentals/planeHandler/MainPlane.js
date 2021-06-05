import { Group, MeshPhongMaterial, Vector3 } from "three";
import { radiants } from "../../Algorithms/degToRad";
import { wait } from "../../Algorithms/MathUtils";
import { addGLBFile } from "../../Core-API/3dModelHandlers/GLBLoader";
import { attachToMainEventStream } from "../../Core-API/ConnectAPI";
import { debugCube } from "../../Core-API/gemotryManager";
import { createPointLight } from "../../Core-API/LightingManager";
import { addToRenderSequence } from "../../Core-API/RenderingHandler";
import { listenToConrols } from "../controls";
import { addtoDayTimeChecker, getDayState, removeFromDayTimeHook } from "../DayNightCycle";

export class MakePlane {
    constructor(SceneToGet, settings) {
        this.SceneToGet = SceneToGet;
        this.settings = settings;
        this.group = new Group();
        this.speed = 0;
        this.elevatorPitch = 0;
        this.airelonePitch = 0;
        this.rudderPitch = 0;
        this.checker = -1;
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
            "/Aircraft/BasicPlane/LeftAirelone.glb",
            this.SceneToGet
        );
        this.rightAirelone = await addGLBFile(
            "/Aircraft/BasicPlane/RightAirelone.glb",
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

        this.leftControlSurface.scene.position.set(46.243, 22.536, -13.541);
        this.leftControlSurface.scene.rotateY(radiants(-7));

        this.rightControlSurface.scene.position.set(
            -46.2718,
            22.5411,
            -13.5447
        );
        this.rightControlSurface.scene.rotateY(radiants(6.8));
        this.rightControlSurface.scene.rotateZ(radiants(-3.5));
        //this.rightControlSurface.scene.rotateX(radiants(183.57))

        this.rudder.scene.position.set(-0.022, 24.67, -68.17);
        this.rudder.scene.rotateX(radiants(-22));

        this.props.scene.position.set(0, 15, 22);
        this.SceneToGet.add(this.group);

        this.group.scale.set(0.05, 0.05, 0.05);

        let [props, leftAirelone] = [this.props.scene, this.leftAirelone.scene];
        // For testing \\

        let light = createPointLight(0xff0000, 3, [60, 22.5, -10], 2.5);
        let light2 = createPointLight(0x00ff00, 3, [-60, 22.5, -10], 2.5);
        let whiteLight = createPointLight(0xffffff, 3, [0, 30, -60], 2.5);
        let day = true
        this.group.add(light);
                this.group.add(light2);

        setInterval(() => {
            console.log(getDayState())
            if(getDayState() === false && day === true){
                day = false
                this.group.add(light);
                this.group.add(light2);
            }else if(getDayState() === true && day === false){
                day = true
                this.group.remove(light);
                this.group.remove(light2);
            }
        }, 1000)

        let currentEvelatorPitch = 0;
        let airelonePitch = 0;
        let rudderPitch = 0;
        addToRenderSequence(
            "Main",
            () => {
                let direction = new Vector3();
                this.group.getWorldDirection(direction);
                this.group.position.add(direction.multiplyScalar(this.speed));
                //this.group.position.z += this.speed;

                props.rotateZ(this.speed);
                if (currentEvelatorPitch < this.elevatorPitch) {
                    this.leftAirelone.scene.rotateX(-0.01);
                    this.rightAirelone.scene.rotateX(-0.01);
                    currentEvelatorPitch += 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateX(
                        (currentEvelatorPitch / 50) * this.speed
                    );
                } else if (currentEvelatorPitch > this.elevatorPitch) {
                    this.leftAirelone.scene.rotateX(0.01);
                    this.rightAirelone.scene.rotateX(0.01);
                    currentEvelatorPitch -= 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateX(
                        (currentEvelatorPitch / 50) * this.speed
                    );
                }

                if (airelonePitch < this.airelonePitch) {
                    this.leftControlSurface.scene.rotateX(0.01);
                    this.rightControlSurface.scene.rotateX(-0.01);
                    airelonePitch += 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateZ((-airelonePitch / 50) * this.speed);
                } else if (airelonePitch > this.airelonePitch) {
                    this.leftControlSurface.scene.rotateX(-0.01);
                    this.rightControlSurface.scene.rotateX(0.01);
                    airelonePitch -= 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateZ((-airelonePitch / 50) * this.speed);
                }

                if (rudderPitch < this.rudderPitch) {
                    this.rudder.scene.rotateY(-0.01);
                    rudderPitch += 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateY((rudderPitch / 50) * this.speed);
                } else if (rudderPitch > this.rudderPitch) {
                    this.rudder.scene.rotateY(0.01);
                    rudderPitch -= 0.01;
                    //if(this.speed < 0.4)return
                    this.group.rotateY((rudderPitch / 50) * this.speed);
                }
            },
            false
        );

        return this.group;
    }
    attachCameraAndControl(Camera) {
        this.UUID = listenToConrols(
            ({
                wKey,
                aKey,
                sKey,
                dKey,
                upKey,
                downKey,
                eKey,
                qKey,
                shiftKey,
                zKey,
                xKey,
            }) => {
                if (zKey) {
                    if (this.speed < 3) {
                        this.speed += 0.01;
                    }
                }
                if (xKey) {
                    if (this.speed > 0) {
                        this.speed -= 0.01;
                    }
                }
                if (wKey) {
                    this.elevatorPitch = 0.5;
                } else if (sKey) {
                    this.elevatorPitch = -0.5;
                } else {
                    this.elevatorPitch = 0;
                }
                if (qKey) {
                    this.rudderPitch = 0.3;
                } else if (eKey) {
                    this.rudderPitch = -0.3;
                } else {
                    this.rudderPitch = 0;
                }

                if (aKey) {
                    this.airelonePitch = 0.5;
                } else if (dKey) {
                    this.airelonePitch = -0.5;
                } else {
                    this.airelonePitch = 0;
                }
            }
        );
        this.group.add(Camera);
        Camera.position.set(0, 40, -100);
        Camera.rotateY(radiants(180));
        Camera.rotateX(radiants(-20));
    }

    cleanUp() {
        if (this.UUID !== undefined) {
            CleanUpListener(this.UUID);
        }
        this.group.remove();
        if (this.checker !== -1) {
            removeFromDayTimeHook(this.checker);
        }
        return { success: true };
    }
}
