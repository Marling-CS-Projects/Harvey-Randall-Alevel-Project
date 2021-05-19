import { useEffect, useState } from "react";
import { listenToEvent } from "../Core-API/ConnectAPI";
import React from 'react'
import { makeNewCubePlayer } from "../gameFundalmentals/multiplayer/MainPlayerHandler";

export function CreateUI() {
    let [gamefeed, setGameFeed] = useState();
    useEffect(() => {
        listenToEvent("NewPlayer", (id, data) => {
            //let cube = MakeNewCubePlayer(data.color, data.name)
            //MakeNewCubePlayer(data?.name, "Joined the game!")

            //players[id] = cube
        });
    }, []);
    return <h1>Hello</h1>;
}
