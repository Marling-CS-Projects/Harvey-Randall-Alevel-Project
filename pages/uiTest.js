import { useState } from "react";
import { useAppContext } from "../components/Context/socketioContext";
import { startSeverClientCommunication } from "../components/Core-API/ConnectAPI";
import WelcometoGame from "../components/gameUI/menuPages/welcompage.tsx";


export default function TestUI(){
    const [ref, setRef] = useState();
    const socket = useAppContext();

    startSeverClientCommunication(socket);

    
    return(
        <div style={{backgroundColor:"black", marginTop:0, position:"Fixed"}}>
            <WelcometoGame visible={true} />
            <div ref={(e) => setRef(e)}> </div>
        </div>
    )
}