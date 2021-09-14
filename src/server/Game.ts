import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
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

    public GameID = Math.round(Math.random() * 1000)
    public id = 1
    public connectedClients: connectedClients[] = []
    public timeOfDay = 0
    public seed = Math.random();

    constructor(io: Server<DefaultEventsMap, DefaultEventsMap>) {
        this.io = io
    }

    private IncomingConnectionRouter(socket: Socket<DefaultEventsMap, DefaultEventsMap>, eventName: string, args: unknown[]) {
        if(!this.Running){
            this.io.to(socket.id).emit(eventName+"_Callback", "Server is dead RIP, Harvey was here")
        }
        switch (eventName) {
            case "LocationUpdate":
                this.informClientsOfMovements(socket, args[0] as {}, args[1] as {})
                break
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
        this.connectedClients[Number(socket.id)] = data;
        this.io.emit("NewPlayer", socket.id, data);
        this.io.to(socket.id).emit("welcome", this.seed, this.connectedClients, data);

        socket.onAny((eventName, ...args) => {
            this.IncomingConnectionRouter(socket, eventName, args)
        })
    }




    private informClientsOfMovements(socket: Socket<DefaultEventsMap, DefaultEventsMap>, pos: {}, rot: {}) {
        if (typeof this.connectedClients[Number(socket.id)] !== "undefined") {
            this.connectedClients[Number(socket.id)].lastUpdate = Date.now();
            socket.broadcast.emit(
                "PlayerLocationUpdate",
                socket.id,
                pos,
                rot,
                this.connectedClients[Number(socket.id)]
            );
        }
    }

    terminateServer() {
        this.Running = false
    }
}