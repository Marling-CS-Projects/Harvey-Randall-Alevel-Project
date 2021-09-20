import React, { Ref, useEffect, useState } from 'react'
import { CreateWelcomePageThreejs } from './welcomePageWorld.ts'
import styles from "../styles/gameWelcome.module.scss";

interface props {
    canvas: Ref<any>
    visible: boolean
}

export default function WelcometoGame(props: props) {
    const [rendered, setRendered] = useState(false)
    const [welcomeScene, setWecomeScene] = useState(undefined)

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

    return (
        <>
            {props.visible &&
                <div className={styles.Root} onMouseMove={updateMouse}>
                    <h1>Welcome!</h1>
                </div>
            }
        </>

    )
}