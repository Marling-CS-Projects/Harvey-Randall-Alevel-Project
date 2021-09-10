import { useEffect, useState } from "react";
import { listenToEvent } from "../Core-API/ConnectAPI";
import React from "react";
import { finishedLoading } from "../Core-API/3dModelHandlers/GLBLoader";
import LoadingScreen from "./menuPages/loading";
import WelcometoGame from "./menuPages/welcompage";

export function CreateUI() {
    let [isLoading, setLoading] = useState(true);
    let [status, setStatus] = useState("Not long now!")

    let [gamefeed, setGameFeed] = useState();

    useEffect(() => {
        let timeout = setInterval(() => {
            setStatus(finishedLoading().status)
            if (finishedLoading().setLoading === false) {
                clearInterval(timeout)
                setLoading(false);
            }
        }, 100);

        listenToEvent("NewPlayer", (id, data) => {});
    }, []);

    return <>{isLoading ? <LoadingScreen status={status} /> : <WelcometoGame />}</>;
}
