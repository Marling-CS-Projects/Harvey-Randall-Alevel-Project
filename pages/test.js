// Written By Harvey Randall \\

import React, { useEffect, useState } from "react";
import { useAppContext } from "../components/Context/socketioContext";
import {
    joinGame,
    listenToEvent,
    startSeverClientCommunication,
} from "../components/Core-API/ConnectAPI";
import { CreateUI } from "../components/gameUI/entryPoint.tsx";
import { GenerateWorld } from "../components/Core-API/GenerateWorld.ts";
import { preLoadAllModels, stopLoading } from "../components/Core-API/3dModelHandlers/GLBLoader";

export default function render() {
    const [child, setChild] = useState();
    const [child2, setChild2] = useState();
    const socket = useAppContext();
    const [recievedSeed, setSeed] = useState(0);
    const [rendered, setRendered] = useState(false);

    startSeverClientCommunication(socket);

    useEffect(() => {
        (async () => {
            if (typeof child === "undefined" || rendered === true) {
                return;
            }
            await preLoadAllModels();

            stopLoading(1);


            listenToEvent("GameConnect_Callback", ([seed, clients, userData]) => {
                let game = new GenerateWorld();
                game.update(child, recievedSeed, child, clients, socket.id);
                setRendered(true);
            });


        })();
    }, [child, child2]);

    return (
        <main>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                }}>
                <CreateUI canvas={child} />
            </div>

            <div
                ref={(ref) => {
                    setChild(ref);
                }}></div>
        </main>
    );
}

/*let sendChat = (e) => {
        e.preventDefault();
        socket.emit("sendChat", child2.value);
        child2.value = "";
    };
    
    let mainGame = await joinGame("Test", "Test");
            
            setSeed(mainGame.seed);
            setClients(mainGame.clients);
            setPersonalData(mainGame.userData);*/
