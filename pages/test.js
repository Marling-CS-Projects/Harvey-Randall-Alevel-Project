// Written By Harvey Randall \\

import React, { useEffect, useState } from "react";
import { useAppContext } from "../components/Context/socketioContext";
import { startSeverClientCommunication } from "../components/Core-API/ConnectAPI";
import { CreateUI } from "../components/gameUI/entryPoint.tsx";
import { GenerateWorld } from "../components/Core-API/GenerateWorld.ts";

export default function render() {
    const [child, setChild] = useState();
    const [child2, setChild2] = useState();
    const socket = useAppContext();
    const [recievedSeed, setSeed] = useState(0);
    const [rendered, setRendered] = useState(false);
    const [clients, setClients] = useState([]);

    startSeverClientCommunication(socket);

    useEffect(() => {
        if (typeof child === "undefined" || rendered === true) {
            return;
        }
        /*
        
        let mainGame = await joinGame("Test", "Test");
            
            setSeed(mainGame.seed);
            setClients(mainGame.clients);
            setPersonalData(mainGame.userData);*/

        let game = new GenerateWorld()
        game.update(
            child,
            recievedSeed,
            child,
            clients,
            socket.id
        );
        setRendered(true)
    }, [child, child2]);

    return (
        <main>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                }}>
                <CreateUI />
            </div>

            <div
                ref={
                    (ref) => {
                        setChild(ref);
                    } /* */
                }></div>
        </main>
    );
}



/*let sendChat = (e) => {
        e.preventDefault();
        socket.emit("sendChat", child2.value);
        child2.value = "";
    };*/