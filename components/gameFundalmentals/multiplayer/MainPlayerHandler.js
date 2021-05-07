// Written By Harvey Randall \\

import { BoxGeometry, Color, CylinderGeometry, Group, Mesh, MeshLambertMaterial } from "three";
import { ListenToEvent } from "../../Core-API/ConnectAPI";
import { GenerateLabel } from "../nametag";
let players = []

export function MakeNewCubePlayer(color = "rgb(0,0,0)", name = "unkown", SceneToGet) {
    const group = new Group();
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshLambertMaterial({ color: new Color(color), emissive: new Color(color) });
    const cube = new Mesh(geometry, material);
    group.add(cube)
    const cyclinder = new CylinderGeometry(0.3, 0.3, 0.6, 30);
    const material2 = new MeshLambertMaterial({ color: 0x000000 });
    const cylinderBuild = new Mesh(cyclinder, material2);
    cylinderBuild.rotateX((Math.PI / 2) + Math.PI)
    cylinderBuild.position.set(0, 0, -0.6)
    group.add(cylinderBuild)

    GenerateLabel(name, group)
    SceneToGet.add(group)
    group.name = name
    return group
}

export function InitMainGameHandler() {
    ListenToEvent("NewPlayer", (id, data) => {
        console.log(data)
        console.log("New PLyer " + id)
        let cube = MakeCube(data.color, data.name)
        addtoGameFeed(data?.name, "Joined the game!")

        players[id] = cube
    })
}