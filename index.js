const express = require('express')
const next = require('next')


const dev = false
const apps = next({ dev })
const handle = apps.getRequestHandler()


apps.prepare()
    .then(async () => {

        app.get('*', function (req, res) {
            if (!(req.url.includes('api') || req.url.includes('xml') || req.url.endsWith("login") || req.url.endsWith("logout"))) {
                return handle(req, res)
            }
        });


        app.listen(process.env.PORT || 3000, () => {
            console.log('listening on *:3000');
        });

    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
