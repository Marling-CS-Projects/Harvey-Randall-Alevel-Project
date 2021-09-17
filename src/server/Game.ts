import { Namespace, Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { v4 } from "uuid";
import { fetchLogger } from "./setupLogger";
import { ListenToConnection } from "./utils/connectionHook";
var rug = require("random-username-generator");

interface connectedClients {
    id: String,
    color: String,
    name: String,
    lastUpdate: Number,
    pos: { x: Number, y: Number, z: Number },
    rot: { _x: Number, _y: Number, _z: Number },
};

export class NewGame {
    private io: Server<DefaultEventsMap, DefaultEventsMap>

    // Important one \\
    public Running = true

    public GameID: string
    public GamePassword: string | undefined

    public connectedClients: connectedClients[] = []
    public timeOfDay = 0
    public seed = Math.random();
    

    constructor(io: Server<DefaultEventsMap, DefaultEventsMap>, gamePassword: string | undefined ) {
        this.io = io

        this.GameID = `${Math.floor(100000 + Math.random() * 900000)}`
        this.GamePassword = gamePassword


        ListenToConnection((socket: Socket, event: string, gameId: string, password: string) => {
            console.log({gameId, password, event})
            if (event !== "GameConnect" || this.GameID !== gameId) return;

            if(password !== this.GamePassword){
                socket.emit("GameConnect_Callback", [false])
            }

            this.NewConnection(socket)
        })
    }

    private IncomingConnectionRouter(socket: Socket<DefaultEventsMap, DefaultEventsMap>, eventName: string, args: unknown[]) {
        if (!this.Running) {
            this.io.to(socket.id).emit(eventName + "_Callback", "Server is dead RIP, Harvey was here")
        }
        switch (eventName) {
            case "LocationUpdate":
                this.informClientsOfMovements(socket, args[0] as {}, args[1] as {})
                break
            case "sendChat":
                this.ChatHandler(socket, args[0] as string)
                break;
        }
    }



    private NewConnection(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
        var r = () => (Math.random() * 256) >> 0;
        let data = {
            id: socket.id,
            color: `rgb(${r()}, ${r()}, ${r()})`,
            name: rug.generate(),
            lastUpdate: Date.now(),
            pos: { x: 0, y: 0, z: 0 },
            rot: { _x: 0, _y: 0, _z: 0 },
        };
        fetchLogger().info("New Player ", data.name)

        this.connectedClients[Number(socket.id)] = data;
        this.io.to(this.GameID).emit("NewPlayer", socket.id, data)

        socket.emit("GameConnect_Callback", [this.seed, this.connectedClients, data])

        socket.join(this.GameID)

        socket.onAny((eventName, ...args) => {
            this.IncomingConnectionRouter(socket, eventName, args)
        })
    }

    private ChatHandler(socket: Socket, data: string) {
        this.io.to(this.GameID).emit("NewChat", this.connectedClients[Number(socket.id)], data)
    }




    private informClientsOfMovements(socket: Socket<DefaultEventsMap, DefaultEventsMap>, pos: {}, rot: {}) {
        if (typeof this.connectedClients[Number(socket.id)] !== "undefined") {
            this.connectedClients[Number(socket.id)].lastUpdate = Date.now();
            this.io.to(this.GameID).emit("PlayerLocationUpdate",
                socket.id,
                pos,
                rot,
                this.connectedClients[Number(socket.id)]
            )

        }
    }

    terminateServer() {
        this.Running = false
    }
}


