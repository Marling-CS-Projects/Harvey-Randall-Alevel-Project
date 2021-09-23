import React, { Ref, useEffect, useState } from 'react'
import { CreateWelcomePageThreejs } from './welcomePageWorld.ts'
import styles from "../styles/gameWelcome.module.scss";
import JoinGame from './joinGame.tsx';

interface props {
    canvas: Ref<HTMLDivElement>
    visible: boolean
    stop: CallableFunction
}

export default function WelcometoGame(props: props) {
    const [rendered, setRendered] = useState(false)
    const [welcomeScene, setWecomeScene] = useState(undefined)
    const [showJoinGame, setShowJoinGame] = useState(false)

    useEffect(() => {
        console.log(props)
        if (props.canvas === undefined || rendered) return;
        console.log(props.canvas)
        setWecomeScene(new CreateWelcomePageThreejs(props.canvas));
        setRendered(true);

    }, [props])

    let updateMouse = (e) => {
        welcomeScene?.updateMousePos(e.screenX / window.innerWidth, e.screenY / window.innerHeight);
    }

    let joinGame = () => {
        setShowJoinGame(true)
    }

    let gameJoined = () => {
        welcomeScene?.stop()
        props.stop()
    }

    return (
        <>
            {props.visible && !showJoinGame && 
                <div className={styles.Root} onMouseMove={updateMouse}>
                    <div>
                        <h1>Welcome, to Planasurus Rex!</h1>
                        <button onClick={joinGame}>Join Game</button>
                        <button>Shop</button>
                    </div>
                </div>
            }
            {props.visible && showJoinGame &&
                <JoinGame stop={gameJoined} />
            }
        </>
    )
}