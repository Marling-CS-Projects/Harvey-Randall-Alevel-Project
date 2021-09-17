import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
interface connectedClients {
    id: String;
    color: String;
    name: String;
    lastUpdate: Number;
    pos: {
        x: Number;
        y: Number;
        z: Number;
    };
    rot: {
        _x: Number;
        _y: Number;
        _z: Number;
    };
}
export declare class NewGame {
    private io;
    Running: boolean;
    GameID: string;
    GamePassword: string | undefined;
    connectedClients: connectedClients[];
    timeOfDay: number;
    seed: number;
    constructor(io: Server<DefaultEventsMap, DefaultEventsMap>, gamePassword: string | undefined);
    private IncomingConnectionRouter;
    private NewConnection;
    private ChatHandler;
    private informClientsOfMovements;
    terminateServer(): void;
}
export {};
