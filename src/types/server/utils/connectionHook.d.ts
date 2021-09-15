import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
export declare function addConnectionToIo(ioInput: Server<DefaultEventsMap, DefaultEventsMap>): void;
export declare function ListenToConnection(callBack: CallableFunction): string;
export declare function stopListening(id: string): void;
export declare function FetchIo(): Server<DefaultEventsMap, DefaultEventsMap> | undefined;
