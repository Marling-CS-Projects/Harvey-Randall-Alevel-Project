import { useState } from "react"
import styles from "../styles/gameWelcome.module.scss"
import { joinGame } from "../../Core-API/ConnectAPI"
import { carryOnLoading } from "../../Core-API/3dModelHandlers/GLBLoader"

export default function JoinGame(props) {

    let [val, setVal] = useState("")
    let [codeNotFound, setNotFound] = useState(false)
    let [currenthandling, setCurrentlyhandling] = useState(false)
    let [joining, setJoining] = useState(false)


    let textUpdated = (e) => {
        e.preventDefault()
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value) && e.target.value.length < 7) {
            setVal(e.target.value)
        } else {
            setVal(val)
        }
    }

    let joinGameCode = async () => {
        if (currenthandling === true || joining === true) return; 
        setCurrentlyhandling(true)
        let mainGame = await joinGame(val, "Test");
        setCurrentlyhandling(false)
        if (mainGame === true) {
            setNotFound(true)
            return;
        }
        setJoining(true)
        setNotFound(false)
        carryOnLoading()
        props.stop()
    }

    return (
        <div className={styles.Root}>
            <div>
                <h1>Enter your game code to join!</h1>
                {codeNotFound && <h3 style={{ color: "red" }}>The code you entered could not be found!</h3>}
                <input className={(val.length !== 6 ? styles.moveDown : "")} value={val} onChange={(e) => { e.preventDefault(); textUpdated(e) }} type="text" placeholder="Enter game code"

                />

                {val.length === 6 &&
                    <button className={styles.JoinButton} onClick={joinGameCode} >{currenthandling === true ? "Loading!" : joining ? `Joining game ${val}!` : "Join game!"}</button>
                }

            </div>
        </div>

    )
}