import { Fog, PerspectiveCamera, Scene, SpotLight, SpotLightHelper, Vector2, Vector3, WebGLRenderer } from "three"
import { stopLoading } from "../../Core-API/3dModelHandlers/GLBLoader";
import { createAmbientLight } from "../../Core-API/LightingManager";
import { MakePlane } from "../../gameFundalmentals/planeHandler/MainPlane.ts";
import { generateTerrainChunk } from "../../gameFundalmentals/ProceduleTerrain";
import { GenerateTrees } from "../../gameFundalmentals/staticAssets/treeBuilder";


export class CreateWelcomePageThreejs {
    private running = true
    private x: number = 0;
    private y: number = 0;

    constructor(ref: any) {
        this.start(ref)
    }

    stop() {
        this.running = false
    }

    async start(ref: any) {
        let SceneToGet = new Scene();

        let pixelRatio = window.devicePixelRatio
        let AA = true
        if (pixelRatio > 1) {
            AA = false
        }
        

        let Renders = new WebGLRenderer({
            alpha: true,
            logarithmicDepthBuffer: true,
            antialias: AA,
            powerPreference: "high-performance",
        });

        Renders.setClearColor("#87ceeb", 1);

        Renders.shadowMap.enabled = true

        Renders.setSize(window.innerWidth, window.innerHeight);
        ref.appendChild(Renders.domElement);


        var Camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        window.addEventListener("resize", onWindowResize, false);

        function onWindowResize() {
            Camera.aspect = window.innerWidth / window.innerHeight;
            Camera.updateProjectionMatrix();

            Renders.setSize(window.innerWidth, window.innerHeight);
        }

        let newPlane = new MakePlane(SceneToGet)
        await newPlane.loadFiles()
        newPlane.CreateGroupAndPos()


        createAmbientLight(SceneToGet, "#aaaaaa", 0.8)

        Camera.position.set(10, 6, 10);
        Camera.lookAt(newPlane.group.position);

        let pointLight = new SpotLight("#fdfbd3", 2, 200)
        pointLight.position.set(100, 100, -100)
        pointLight.lookAt(newPlane.group.position)
        SceneToGet.add(pointLight)
        pointLight.castShadow = true
    
        let mesh = generateTerrainChunk(1, new Vector2(0, 0), 120, 0.1, true)

        SceneToGet.add(await GenerateTrees(50, SceneToGet, new Vector3(-250, 250, -250), new Vector3(250, 250, 250), 1, 120, 0.1))
        SceneToGet.add(mesh)

        var animate = async () => {
            if (this?.running) {
                requestAnimationFrame(animate);
            }
            Renders.render(SceneToGet, Camera);
            Camera.position.set(10 + this.x, 6 + this.y, 10);
            Camera.lookAt(newPlane.group.position);
            newPlane.spinProp()
        };

        stopLoading(2)

        animate();
    }

    updateMousePos(mousePosX: number, mousePosY: number) {
        this.x = mousePosX 
        this.y = mousePosY 
    }

}