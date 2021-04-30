// Written By Harvey Randall \\

import { useEffect, useState, useContext } from "react"
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { BoxGeometry, Clock, DoubleSide, Material, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene, Vector3, WebGLRenderer, MeshLambertMaterial } from "three"
var perlin = require('perlin-noise');
var SimplexNoise = require('simplex-noise');
import { GenerateClouds } from '../components/clouds'
import { getRandomStarField } from '../components/stars'
import { CreateDayNightCycle } from "../components/gameFundalmentals/DayNightCycle";
var Stats = require('stats.js')
import { useAppContext } from '../components/contextHandler'
import { GenerateLabel } from '../components/nametag'
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
        console.log("UPDAET!!!!")
        console.log(gameEventData)
    }, [gameEventData])


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


        const simplex = new SimplexNoise(recievedSeed)




        const clock = new Clock();


        const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        planeGeometry.rotateX(Math.PI / 2)
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x567d46, side: DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.y = -0.5
        SceneToGet.add(plane);

        let daynight = new CreateDayNightCycle(SceneToGet, Renders)

        var geometry = new THREE.PlaneBufferGeometry(500, 500, 100, 100)

        let colours = []




        for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
            //console.log(geometry.attributes.position.array[(i*3)+2])
            let x = geometry.attributes.position.array[(i * 3)] / 128
            let y = geometry.attributes.position.array[(i * 3) + 1] / 128
            let height = simplex.noise2D(x, y) * 30
            geometry.attributes.position.array[(i * 3) + 2] = height
            if (height > 23) {
                colours.push(1, 1, 1)
            }
            else if (height > 5) {
                colours.push(0.56, 0.54, 0.48)
            }
            else if (height < -20) {
                colours.push(0.501, 0.772, 0.87)
            }
            else {
                colours.push(0.56, 0.68, 0.166)
            }
        }
        var material = new THREE.MeshPhongMaterial({
            vertexColors: THREE.VertexColors,
            reflectivity: 0,
            roughness: 2,
        });
        material.flatShading = true
        var plane2 = new THREE.Mesh(geometry, material);
        plane2.receiveShadow = true
        plane2.castShadow = true
        plane2.position.y = -3
        geometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colours), 3));
        geometry.computeVertexNormals();

        let clouds = []
        for (let i = 0; i < 40; i++) {
            clouds.push(new GenerateClouds(new Vector3((Math.random() * 300) - 300, 80 + Math.random() * 20, (Math.random() * 600) - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1))
        }

        plane2.rotateX((Math.PI / 2) + Math.PI)
        SceneToGet.add(plane2);

        var Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        /*const cameraControls = new CameraControls(Camera, Renders.domElement);
        cameraControls.azimuthRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.polarRotateSpeed = -0.3; // negative value to invert rotation direction
        cameraControls.truckSpeed = 1 / 1e-5 * 3;
        cameraControls.distance = 5
        //cameraControls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
        cameraControls.saveState();*/
        //Camera.position.z = 5;

        let [w, a, s, d, up, down, e, q, shift] = [false, false, false, false, false, false, false, false, 1]

        document.addEventListener("keydown", (e) => { onDocumentKeyDown(e, true) }, false);
        document.addEventListener("keyup", (e) => { onDocumentKeyDown(e, false) }, false);

        function onDocumentKeyDown(event, val) {
            if(child2 === document.activeElement) return
            var keyCode = event.which;
            if (keyCode == 87) {
                w = val
            }
            if (keyCode == 83) {
                s = val
            }
            if (keyCode == 65) {
                a = val
            }
            if (keyCode == 68) {
                d = val
            }
            if (keyCode == 38) {
                up = val
            }
            if (keyCode == 40) {
                down = val
            }
            if (keyCode == 69) {
                e = val
            }
            if (keyCode == 81) {
                q = val
            }
            if (keyCode == 16) {
                shift = val ? 0.5 : 1
            }
        };



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


        var animate = function() {
            stats.begin()
            requestAnimationFrame(animate)

            daynight.update()


            clouds.forEach((e, i) => {
                e.update()
            })

            if (w) {
                var direction = new THREE.Vector3();
                Camera.getWorldDirection(direction);
                Camera.position.add(direction.multiplyScalar(shift == 1 ? 1 : 0.25));
                //Camera.position.z -= 0.1
            }
            if (s) {
                var direction = new THREE.Vector3();
                Camera.getWorldDirection(direction);
                Camera.position.add(direction.multiplyScalar(-(shift == 1 ? 1 : 0.25)));
            }
            if (a) {
                Camera.rotateY(0.04 * shift)
            }
            if (d) {
                Camera.rotateY(-0.04 * shift)
            }
            if (up) {
                Camera.rotateX(0.04 * shift)
            }
            if (down) {
                Camera.rotateX(-0.04 * shift)
            }
            if (q) {
                Camera.rotateZ(0.02 * shift)
            }
            if (e) {
                Camera.rotateZ(-0.02 * shift)
            }



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
