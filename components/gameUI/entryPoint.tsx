import { useEffect, useState } from "react";
import { listenToEvent } from "../Core-API/ConnectAPI";
import React from "react";
import { finishedLoading } from "../Core-API/3dModelHandlers/GLBLoader";
import LoadingScreen from "./menuPages/loading.tsx";
import WelcometoGame from "./menuPages/welcompage.tsx";

export function CreateUI(props) {
    let [isLoading, setLoading] = useState(true);
    let [status, setStatus] = useState("Not long now!")

    let [gamefeed, setGameFeed] = useState();
    let [showWelcome, setWelcome] = useState(true)

    useEffect(() => {
        let timeout = setInterval(() => {
            setStatus(finishedLoading().status)
            if (finishedLoading().setLoading === false) {
                setLoading(false);
            }else{
                setLoading(true)
            }
        }, 100);

        listenToEvent("NewPlayer", (id, data) => { });
        return () => {
            clearInterval(timeout)
        }

        
    }, []);

    let stopShowingWelcome = () => {
        setWelcome(false)
    }

    return (
    <> 
        {showWelcome && <WelcometoGame canvas={props.canvas} visible={!isLoading} stop={stopShowingWelcome}/>}
        {isLoading && <LoadingScreen status={status} />}
    </>);
}
