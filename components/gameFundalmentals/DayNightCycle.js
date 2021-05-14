// Written By Harvey Randall \\
import {
    BackSide,
    BoxGeometry,
    Color,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    SphereBufferGeometry,
    Vector3,
} from "three";
import {
    createAmbientLight,
    createDirectionalLight,
} from "../Core-API/LightingManager";
import { getRandomStarField } from "./stars";
import { rotateAboutPoint } from "./rotateAroundPoint";

export class CreateDayNightCycle {
    constructor(SceneToGet, Renders) {
        // ---------- [Two to level global variables] ---------- \\
        this.SceneToGet = SceneToGet;
        this.Renders = Renders;

        // ---------- [Create Sun Mesh] ---------- \\
        let sun = new SphereBufferGeometry(20, 20, 100, 100);
        let sunMaterial = new MeshLambertMaterial({
            emissive: 0xf9d71c,
        });
        let sunmesh = new Mesh(sun, sunMaterial);
        sunmesh.position.set(1, 300, 300);
        SceneToGet.add(sunmesh);

        // ---------- [Create Moon Mesh] ---------- \\
        let moon = new SphereBufferGeometry(10, 10, 100, 100);
        let moonMaterial = new MeshLambertMaterial({
            emissive: 0xffffff,
        });
        let moonMesh = new Mesh(moon, moonMaterial);
        moonMesh.position.set(-1, -200, -300);
        SceneToGet.add(moonMesh);

        // ---------- [Create Box Gometry for handling rotation] ---------- \\
        var geometry = new BoxGeometry(1, 1, 1);
        var cube = new Mesh(geometry);
        cube.visible = false;
        SceneToGet.add(cube);
        // ^ This is a very bad work around fix later

        // ---------- [All defintions for the moving part] ---------- \\
        this.cube = cube;
        this.moonMesh = moonMesh;
        this.sunmesh = sunmesh;
        this.t = 0;
        this.dTIme = 0;

        // ---------- [All defintions for lights to create shadows] ---------- \\
        this.directionalLight = createDirectionalLight(
            SceneToGet,
            0xddffee,
            0.5,
            [1, 100, 100]
        );
        this.directionalLight2 = createDirectionalLight(
            SceneToGet,
            0xffffff,
            0.2,
            [1, -100, -100]
        );
        this.light = createAmbientLight(SceneToGet, 0xaaaaaa, 0.5);

        // ---------- [Create Stary night] ---------- \\
        let skyBox = new BoxGeometry(1200, 1200, 1200);
        let skyBoxMaterial = new MeshBasicMaterial({
            map: getRandomStarField(600, 2048, 2048),
            side: BackSide,
        });
        this.sky = new Mesh(skyBox, skyBoxMaterial);
    }
    update() {
        // This two lines are  important as it is part of the hacky work around to get time of day on varying FPS
        let theta = rotateAboutPoint(
            this.directionalLight,
            new Vector3(0, 0, 0),
            new Vector3(1, 0, 0),
            0.001,
            true
        );
        let angle = MathUtils.radToDeg(this.cube.rotation.x);

        // ---------- [Rotate all the lights and Meshes] ---------- \\
        rotateAboutPoint(
            this.sunmesh,
            new Vector3(100, 0, 0),
            new Vector3(1, 0, 0),
            0.001,
            true
        );
        rotateAboutPoint(
            this.moonMesh,
            new Vector3(100, 0, 0),
            new Vector3(1, 0, 0),
            0.001,
            true
        );
        rotateAboutPoint(
            this.directionalLight2,
            new Vector3(0, 0, 0),
            new Vector3(1, 0, 0),
            0.001,
            true
        );

        // ---------- [If it is day] ---------- \\
        if (angle < 40 && this.dTIme < 1) {
            this.t = 0;
            this.directionalLight.color.setHex(0xddffee);
            this.dTIme += 0.003;
            if (this.dTIme >= 1) {
                this.dTIme = 1;
            }
            this.Renders.setClearColor(
                new Color().lerpColors(
                    new Color(0xfdb813),
                    new Color(0x87ceeb),
                    this.dTIme
                ),
                1
            );
            this.light.intensity = 0.5;
            this.directionalLight2.color.setHex(0x000000);
            this.directionalLight.intensity = 0.5;
            this.directionalLight2.intensity = 0;
            this.SceneToGet.remove(this.sky);
        } else if (!(angle < 40) && this.sky.parent !== this.SceneToGet) {
            // ---------- [If it is night] ---------- \\
            this.dTIme = 0;

            this.t += 0.01;
            if (this.t >= 1) {
                this.t = 1;
                this.SceneToGet.add(this.sky);
            }
            this.directionalLight2.color.setHex(0xffffff);
            this.Renders.setClearColor(
                new Color().lerpColors(
                    new Color(0x87ceeb),
                    new Color(0x000000),
                    this.t
                ),
                1
            );
            this.light.intensity = 0.2;
            this.directionalLight.intensity = 0;
            this.directionalLight2.intensity = 0.2;
        }
        if (this.sky.parent === this.SceneToGet) {
            this.sky.rotation.x += -0.0004;
        }
        this.cube.rotateOnAxis(new Vector3(1, 0, 0), theta);
    }
}
