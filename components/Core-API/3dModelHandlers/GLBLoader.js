import { GLTFLoader } from "./glbCore";

let setLoading = true
let status = "Loading canvas and game world!"
export function finishedLoading(){
    return {setLoading, status}
}

// Preloader 
let allFiles = [
    {
        Name: "Plane.glb",
        location: "/Aircraft/BasicPlane/Plane.glb",
    },
    {
        Name: "Blades.glb",
        location: "/Aircraft/BasicPlane/Blades.glb",
    },
    {
        Name: "LeftAirelone.glb",
        location: "/Aircraft/BasicPlane/LeftAirelone.glb",
    },
    {
        Name: "RightAirelone.glb",
        location: "/Aircraft/BasicPlane/RightAirelone.glb",
    },
    {
        Name: "LeftWingControlsSurface.glb",
        location: "/Aircraft/BasicPlane/LeftWingControlsSurface.glb",
    },
    {
        Name: "RightWingControlsSurface.glb",
        location: "/Aircraft/BasicPlane/RightWingControlsSurface.glb",
    },
    {
        Name: "Rudder.glb",
        location: "/Aircraft/BasicPlane/Rudder.glb",
    },
    {
        Name: "PineTree.glb",
        location: "/Assets/PineTree.glb",
    },
    {
        Name: "SnowyPineTree.glb",
        location: "/Assets/SnowyPineTree.glb",
    },
    {
        Name: "PalmTree.glb",
        location: "/Assets/Palm_Tree.glb",
    },
    {
        Name: "Airport.glb",
        location: "/Assets/Airport.glb",
    },

    
]

let preimportedModels = {

}

export async function preLoadAllModels(){
    for(let i=0;i<allFiles.length; i++){
        let item = allFiles[i]
        status = `Currently Loading Model: ${item.Name}, (${i + 1}/${allFiles.length})`
        let model = await addGLBFile(item.location)
        preimportedModels[item] = model
    }

    status = "Generating terrain and placing trees!"
}


export function stopLoading(){
    setLoading = false
}

export async function addGLBFile(item) {

    if(preimportedModels[item] !== undefined){
        return preimportedModels[item]
    }

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            // resource URL
            item,
            // called when the resource is loaded
            function (gltf) {
                gltf.animations;
                gltf.scene;
                gltf.scenes;
                gltf.cameras;
                gltf.asset;
                resolve(gltf)
            },
            // called while loading is progressing
            function (xhr) {

            },
            // called when loading has errors
            function (error) {
                console.log("An error happened");
                reject(error)
            }
        );
    });
}
