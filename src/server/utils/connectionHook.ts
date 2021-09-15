import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { generateUUID } from "three/src/math/MathUtils";

interface hooksInterface {
    [key: string]: CallableFunction
}

let io: Server<DefaultEventsMap, DefaultEventsMap> | undefined
let hooks: hooksInterface = {}

export function addConnectionToIo(ioInput: Server<DefaultEventsMap, DefaultEventsMap>): void {
    io = ioInput

    io.on("connection", (socket) => {
        for (const [key, value] of Object.entries(hooks)) {
            value(socket, "Connection")
        }

        socket.on("GameConnect", (id, password) => {
            for (const [key, value] of Object.entries(hooks)) {
                value(socket, "Game", id, password)
            }
        })
    })


}

export function ListenToConnection(callBack: CallableFunction): string {
    let UUID = generateUUID()
    hooks[UUID] = callBack
    return UUID
}

export function stopListening(id:string){
    delete hooks[id]
}

export function FetchIo() {
    return io
}