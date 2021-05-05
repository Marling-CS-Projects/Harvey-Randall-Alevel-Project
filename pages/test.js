// Written By Harvey Randall \\

import { useEffect, useState, useContext } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { DoubleSide, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three"
import { GenerateClouds } from '../components/gameFundalmentals/clouds'
import { CreateDayNightCycle } from "../components/gameFundalmentals/DayNightCycle";
var Stats = require('stats.js')
import { useAppContext } from '../components/Context/socketioContext'
import { GenerateLabel } from '../components/gameFundalmentals/nametag'
import { GenerateTerrain } from "../components/gameFundalmentals/ProceduleTerrain";
import { ControlHandlerInit, ControlHandlerUpdate } from "../components/gameFundalmentals/controls";
CameraControls.install({ THREE: THREE });


export default function render() {
    const [child, setChild] = useState(undefined)
    const [gameEventData, setGameEventData] = useState([])

    const [newTheta, setTheat] = useState(0)
    const [day, setDay] = useState("not day")
    const [child2, setChild2] = useState(undefined)
    const [pos, setPos] = useState(undefined)
    const [rot, setRot] = useState(undefined)
    const socket = useAppContext()
    const [recievedSeed, setSeed] = useState(undefined)
    const [rendered, setRendered] = useState(false)
    const [clients, setClients] = useState([])
    const [personData, setPersonalData] = useState(undefined)
    const [latestPerson, setLatestestPerson] = useState([])

    socket.once("welcome", (seed, client, data) => {
        setSeed(seed)
        console.log(client)
        setClients(client)
        setPersonalData(data)
    });

    useEffect(() => {
        if (child === undefined || recievedSeed === undefined || rendered === true) return;
        setRendered(true)

        let stats = new Stats();
        stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(stats.dom);

        let SceneToGet = new Scene()
        let Renders = new WebGLRenderer({
            antialias: true,
            alpha: true
        })

        Renders.setClearColor(0x87ceeb, 1);


        Renders.setSize(window.innerWidth, window.innerHeight)
        child.appendChild(Renders.domElement);


        GenerateTerrain(recievedSeed, SceneToGet)




        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        SceneToGet.add(plane);

        let daynight = new CreateDayNightCycle(SceneToGet, Renders)


        let clouds = []
        for (let i = 0; i < 40; i++) {
            clouds.push(new GenerateClouds(new Vector3((Math.random() * 300) - 300, 80 + Math.random() * 20, (Math.random() * 600) - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1))
        }
        var Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        /*const cameraControls = new CameraControls(Camera, Renders.domElement);
        cameraControls.azimuthRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.polarRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.truckSpeed = 1 / 1e-5 * 3;
        cameraControls.distance = 5
        //cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
        cameraControls.saveState();*/
        //Camera.position.z = 5;

    



        Renders.domElement.requestPointerLock()

        const gridHelper = new THREE.GridHelper(50, 50);
        gridHelper.position.y = -1;
        SceneToGet.add(gridHelper);
        let players = []

        function MakeCube(color = "rgb(0,0,0)", name = "unkown") {
            const group = new THREE.Group();
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshLambertMaterial({ color: new THREE.Color(color), emissive: new THREE.Color(color) });
            const cube = new THREE.Mesh(geometry, material);
            group.add(cube)
            const cyclinder = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 30);
            const material2 = new THREE.MeshLambertMaterial({ color: 0x000000 });
            const cylinderBuild = new THREE.Mesh(cyclinder, material2);
            cylinderBuild.rotateX((Math.PI / 2) + Math.PI)
            cylinderBuild.position.set(0, 0, -0.6)
            group.add(cylinderBuild)

            GenerateLabel(name, group)
            SceneToGet.add(group)
            group.name = name
            return group
        }

        console.log(clients)
        let prevData = []

        let addtoGameFeed = (name = "Unkown", event) => {
            let NewGameEventArray = [...prevData]
            console.log(NewGameEventArray)
            NewGameEventArray.unshift({ name: name, event: event })
            delete NewGameEventArray[10]
            delete NewGameEventArray[11]
            setGameEventData([...NewGameEventArray])
            console.log("array below")
            console.log(prevData)
            prevData = NewGameEventArray
        }

        clients.forEach(e => {
            console.log("Adding PLayer " + e)
            let cube = MakeCube(e.color, e.name)
            players[e] = cube
        })

        socket.on('NewPlayer', (id, data) => {
            console.log(data)
            console.log("New PLyer " + id)
            let cube = MakeCube(data.color, data.name)
            addtoGameFeed(data?.name, "Joined the game!")

            players[id] = cube
        })

        socket.on('LostPLayer', (id, how, data) => {
            console.log("lost PLyer " + id)
            let cube = players[id]
            SceneToGet.remove(cube)
            delete players[id]
            console.log(data)
            addtoGameFeed(data?.name, how === true ? "Was removed from the game for being inactive" : "Left the game!")
        })

        socket.on('PlayerLocationUpdate', (id, pos, rot, data) => {
            let cube = players[id]
            if (cube) {
                cube.rotation.set(rot._x, rot._y, rot._z)
                cube.position.set(pos.x, pos.y, pos.z)
            }
            else {
                let cube = MakeCube(data?.color, data?.name)

                players[id] = cube

            }

        })
        socket.on("NewChat", (data, text) => {
            addtoGameFeed(data.name, text)
        })
        setInterval(() => {
            socket.emit('LocationUpdate', Camera.position, Camera.rotation)
        }, 10)

        ControlHandlerInit(document, child2)


        var animate = function() {
            stats.begin()
            requestAnimationFrame(animate)

            daynight.update()


            clouds.forEach((e, i) => {
                e.update()
            })

           
            ControlHandlerUpdate(Camera)


            Renders.render(SceneToGet, Camera);
            stats.end()
        };

        function listChildren(children) {
            let child;
            for (let i = 0; i < children.length; i++) {
                child = children[i];

                // Calls this function again if the child has children
                if (child.children) {
                    listChildren(child.children);
                }
                // Logs if this child last in recursion
                else {
                    console.log('Reached bottom with: ', child);
                }
            }
        }

        listChildren(SceneToGet.children);
        animate();
    }, [child, clients])
    
    let sendChat = (e) => {
        e.preventDefault()
        socket.emit("sendChat", child2.value)
        child2.value = ""
    }

    return (
        <main >
            <h1 style={{position:"fixed", marginTop:"40px", color:"white"}}>{personData === undefined ? "LOADING..." : personData.name}</h1>
            <div style={{width:"100vw", height:"100vh", position:"fixed", marginTop:"80px"}}>
                <form  onSubmit={sendChat}>
                    <input ref={ref => (setChild2(ref))}></input>
                    <input type="Submit"></input>
                </form>
                {[...gameEventData].map((e) => {
                if(e == undefined) return;
                return(
                    <h4 style={{color:"white"}}>{e.name} - {e.event}</h4>
                )}) }
                
            </div>
            { recievedSeed === undefined ?? <h1>LOADING SEED!</h1>}
            <div ref = { ref => (setChild(ref)) }></div>  
        </main>
    )
}
