import { GLTFLoader } from "./glbCore";

export async function addGLBFile(item, scene) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            // resource URL
            item,
            // called when the resource is loaded
            function (gltf) {
                scene.add(gltf.scene);

                gltf.animations;
                gltf.scene;
                gltf.scenes;
                gltf.cameras;
                gltf.asset;
                resolve(gltf)
            },
            // called while loading is progressing
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            // called when loading has errors
            function (error) {
                console.log("An error happened");
                reject(error)
            }
        );
    });
}
