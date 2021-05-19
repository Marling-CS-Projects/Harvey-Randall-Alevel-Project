
import { TestApp } from "./server/setupMultiplayer";
import express from "express"

const next = require("next");
import { Server } from "socket.io"
import { SetupLogger } from "./server/setupLogger";

const dev = process.env.DevOn === "false" ? false : true;
const apps = next({ dev , dir:"."});
const handle = apps.getRequestHandler();

const http = require("http");
const seed = Math.random();
var rug = require("random-username-generator");

let _PORT = process.env.PORT || 8080;

let games = [
    {
        id: 1,
        connectedClients: [],
        timeOfDay: 0,
    },
];
let connectedClients:{
    id: String,
    color:  String,
    name: String,
    lastUpdate: Number,
    pos: { x: Number, y: Number, z: Number},
    rot: { _x: Number, _y: Number, _z: Number },
}[] = [];

TestApp()
let logger = SetupLogger()

apps.prepare()
    .then(async () => {
        let app = express();
        const server = http.createServer(app);

        const io = new Server(server);
        var r = () => (Math.random() * 256) >> 0;

        io.on("connection", (socket) => {
            let data = {
                id: socket.id,
                color: `rgb(${r()}, ${r()}, ${r()})`,
                name: rug.generate(),
                lastUpdate: Date.now(),
                pos: { x: 0, y: 0, z: 0 },
                rot: { _x: 0, _y: 0, _z: 0 },
            };
            connectedClients[Number(socket.id)] = data;
            io.emit("NewPlayer", socket.id, data);
            io.to(socket.id).emit("welcome", seed, connectedClients, data);

            socket.on("LocationUpdate", (pos:{}, rot:{}) => {
                if (typeof connectedClients[Number(socket.id)] !== "undefined") {
                    connectedClients[Number(socket.id)].lastUpdate = Date.now();
                    socket.broadcast.emit(
                        "PlayerLocationUpdate",
                        socket.id,
                        pos,
                        rot,
                        connectedClients[Number(socket.id)]
                    );
                }
            });

            socket.on("sendChat", (data:String) => {
                io.emit("NewChat", connectedClients[Number(socket.id)], data);
            });

            socket.on("disconnect", () => {
                io.emit(
                    "LostPLayer",
                    socket.id,
                    false,
                    connectedClients[Number(socket.id)]
                );
                delete connectedClients[Number(socket.id)];
            });

            let iid = setInterval(function () {
                if (typeof connectedClients[Number(socket.id)] === "undefined") {
                    clearInterval(iid);
                    return;
                }
                if (
                    connectedClients[Number(socket.id)].lastUpdate <
                    Date.now() - 5000
                ) {
                    io.emit(
                        "LostPLayer",
                        socket.id,
                        true,
                        connectedClients[Number(socket.id)]
                    );
                    logger.info(`Lost Player ${socket.id}`);
                    delete connectedClients[Number(socket.id)];
                    io.to(socket.id).emit("Disconencted", true);
                    clearInterval(iid);
                }
            }, 2000);

        });

        /*eslint complexity: ["error", 20]*/
        app.get("*", function (req, res) {
            if (
                !(
                    req.url.includes("api") ||
                    req.url.includes("xml") ||
                    req.url.endsWith("login") ||
                    req.url.endsWith("logout")
                )
            ) {
                return handle(req, res);
            }
        });

        server.listen(_PORT, () => {
            logger.info("listening on localhost:" + _PORT);
        });
    })
    .catch((ex:{stack:String}) => {
        logger.info(ex.stack);
        process.exit(1);
    });


