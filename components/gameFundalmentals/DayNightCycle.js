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
import { v4 } from "uuid";
import { Group } from "three";

let recieveDaytimeUpdate = {};

let day = true
export function addtoDayTimeChecker(arg) {
    let UUID = v4();
    recieveDaytimeUpdate[UUID] = arg;
    return UUID;
}
export function removeFromDayTimeHook(UUID) {
    delete recieveDaytimeUpdate[UUID];
}
export function getDayState() {
    return day
}

export class CreateDayNightCycle {
    constructor(SceneToGet, Renders) {
        // ---------- [Two to level global variables] ---------- \\
        this.SceneToGet = SceneToGet;
        this.Renders = Renders;

        this.announcedDay = false;
        this.announcedNight = false;

        // ---------- [Create Sun Mesh] ---------- \\
        let sun = new SphereBufferGeometry(20, 20, 100, 100);
        let sunMaterial = new MeshLambertMaterial({
            emissive: "#f9d71c",
        });
        let sunmesh = new Mesh(sun, sunMaterial);
        sunmesh.position.set(1, 300, 300);
        SceneToGet.add(sunmesh);

        // Create group to easily move it \\
        let sunGroup = new Group()
        sunGroup.add(sunmesh)
        SceneToGet.add(sunGroup)

        // ---------- [Create Moon Mesh] ---------- \\
        let moon = new SphereBufferGeometry(10, 10, 100, 100);
        let moonMaterial = new MeshLambertMaterial({
            emissive: "#ffffff",
        });
        let moonMesh = new Mesh(moon, moonMaterial);
        moonMesh.position.set(-1, -200, -300);
        SceneToGet.add(moonMesh);

        // Create group to easily move it \\
        let moonGroup = new Group()
        moonGroup.add(moonMesh)
        SceneToGet.add(moonGroup)

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
        this.sunGroup = sunGroup;
        this.moonGroup = moonGroup;
        this.t = 0;
        this.dTIme = 0;

        // ---------- [All defintions for lights to create shadows] ---------- \\
        this.directionalLight = createDirectionalLight(
            SceneToGet,
            "#ddffee",
            0.5,
            [1, 100, 100]
        );
        this.directionalLight2 = createDirectionalLight(
            SceneToGet,
            "#ffffff",
            0.2,
            [1, -100, -100]
        );
        this.light = createAmbientLight(SceneToGet, "#aaaaaa", 0.5);

        this.sunGroup.add(this.directionalLight)
        this.moonGroup.add(this.directionalLight2)

        // ---------- [Create Stary night] ---------- \\
        let skyBox = new BoxGeometry(500, 500, 500);
        let skyBoxMaterial = new MeshBasicMaterial({
            map: getRandomStarField(1000, 1000, 1000),
            side: BackSide,
        });
        this.sky = new Mesh(skyBox, skyBoxMaterial);
    }
    /*eslint complexity: ["error", 20]*/
    update(Camera) {

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

        let cameraPos = new Vector3()
        Camera.getWorldPosition(cameraPos)


        this.sunGroup.position.set(cameraPos.x + 100 , cameraPos.y , cameraPos.z);
        this.moonGroup.position.set(cameraPos.x + 100, cameraPos.y, cameraPos.z) ;

        this.sky.position.set(cameraPos.x, cameraPos.y, cameraPos.z);


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
            day = true

            this.t = 0;
            this.directionalLight.color = new Color("#ddffee");
            this.dTIme += 0.003;
            if (this.dTIme >= 1) {
                this.dTIme = 1;
            }
            this.Renders.setClearColor(
                new Color().lerpColors(
                    new Color("#fdb813"),
                    new Color("#87ceeb"),
                    this.dTIme
                ),
                1
            );
            this.light.intensity = 0.5;
            this.directionalLight2.color = new Color("#000000");
            this.directionalLight.intensity = 0.5;
            this.directionalLight2.intensity = 0;
            this.SceneToGet.remove(this.sky);
        } else if (!(angle < 40) && this.sky.parent !== this.SceneToGet) {
            // ---------- [If it is night] ---------- \\
            day = false

            this.dTIme = 0;

            this.t += 0.01;
            if (this.t >= 1) {
                this.t = 1;
                this.SceneToGet.add(this.sky);
            }
            this.directionalLight2.color = new Color("#ffffff");
            this.Renders.setClearColor(
                new Color().lerpColors(
                    new Color("#87ceeb"),
                    new Color("#000000"),
                    this.t
                ),
                1
            );
            this.light.intensity = 0.2;
            this.directionalLight.intensity = 0;
            this.directionalLight2.intensity = 0.2;
        }
        if (this.sky.parent === this.SceneToGet) {
            this.sky.rotation.x -= 4 / 10000;
        }
        this.cube.rotateOnAxis(new Vector3(1, 0, 0), theta);
    }
}
