const express = require('express')
const next = require('next')
const { Server } = require("socket.io");

const dev = process.env.DevOn || true
const apps = next({ dev })
const handle = apps.getRequestHandler()

const http = require('http');
const seed = Math.random()
console.log("Seen is " + seed)
var rug = require('random-username-generator');


let games = [{
    id: 1,
    connectedClients: [],
    timeOfDay: 0,
}]
let connectedClients = []


apps.prepare()
    .then(async() => {

        let app = express()
        const server = http.createServer(app);

        const io = new Server(server);
        var r = () => Math.random() * 256 >> 0;

        io.on('connection', (socket) => {

            let data = { id: socket.id, color: `rgb(${r()}, ${r()}, ${r()})`, name: rug.generate(), lastUpdate: Date.now(), pos: { x: 0, y: 0, z: 0 }, rot: { _x: 0, _y: 0, _z: 0 } }
            console.log('a user connected', data.name, socket.id);
            connectedClients[socket.id] = data
            io.emit("NewPlayer", socket.id, data)
            io.to(socket.id).emit("welcome", seed, connectedClients, data)

            socket.on('LocationUpdate', (pos, rot) => {
                if (connectedClients[socket.id] !== undefined) {
                    connectedClients[socket.id].lastUpdate = Date.now()
                }

                socket.broadcast.emit("PlayerLocationUpdate", socket.id, pos, rot, connectedClients[socket.id])
            })

            socket.on('disconnect', () => {
                console.log("Today we lost one of the boys", connectedClients.length)
                io.emit("LostPLayer", socket.id, false, connectedClients[socket.id])
                delete connectedClients[socket.id]
            })

            let iid = setInterval(function() {
                if(connectedClients[socket.id] === undefined){
                    clearInterval(iid);
                    return
                }
                if (connectedClients[socket.id].lastUpdate < Date.now() - 5000) {
                    io.emit("LostPLayer", socket.id, true, connectedClients[socket.id])
                    console.log("Forcably Disconnected Client", connectedClients[socket.id].name)
                    delete connectedClients[socket.id]
                    io.to(socket.id).emit("Disconencted", true)
                    clearInterval(iid);
                }
            }, 2000);

            /*while (connectedClients[socket.id] !== undefined) {
                if (connectedClients[socket.id].lastUpdate < Date.now() - 10000) {
                    console.log("Forcably Disconnected Client", connectedClients[socket.id].name)
                    delete connectedClients[socket.id]
                    io.to(socket.id).emit("Disconencted", true)
                    io.emit("LostPLayer", socket.id)
                }
            }*/



        });


        app.get('*', function(req, res) {
            if (!(req.url.includes('api') || req.url.includes('xml') || req.url.endsWith("login") || req.url.endsWith("logout"))) {
                return handle(req, res)
            }
        });


        server.listen(process.env.PORT || 8080, () => {
            console.log('listening on *:3000');
        });

    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
