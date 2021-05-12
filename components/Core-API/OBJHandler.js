
import { MaterialLoader } from 'three';
import dynamic from 'next/dynamic'
const OBJLoader = dynamic(import('three/examples/jsm/loaders/OBJLoader.js'), { ssr: false })



export function ImportOBJ(Name, Scene) {
    console.log(OBJLoader)
    let loader = OBJLoader.OBJLoader
    const objLoader = new loader();
    objLoader.load(`/${Name}/index.obj`, (root) => {
        Scene.add(root);
        console.log("Added")
    });

    const mtlLoader = new MaterialLoader();
    mtlLoader.load(`/${Name}/index.mtl`, (mtl) => {
        mtl.preload();
        const objLoader = new ObjectLoader();
        objLoader.setMaterials(mtl);
        objLoader.load(`/${Name}/index.obj`, (root) => {
            Scene.add(root);
            console.log("Added")
        });
    });
}
