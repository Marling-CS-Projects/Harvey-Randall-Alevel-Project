const express = require('express')
const next = require('next')


const dev = false
const apps = next({ dev })
const handle = apps.getRequestHandler()


apps.prepare()
    .then(async () => {
        let app = express()
        let dbo = db.db("Training-Logs");

        setInterval(() => {
            require('./server/striker.js')(dbo, client)
        }, 3600000)


        app.use(session({
            secret: 'youshallnotpass',
            store: store,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                maxAge: 31540000000
            }
        }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(helmet());

        require('./server/basicData.js')(app, passport)
        require('./server/imageupload.js')(app, upload, client, Discord, dbo)

        app.get("/api/givePeopleGUI", function (req, res) {
            res.json(true)
        });

        app.get("/api/giveGUIToMarineGroup", function (req, res) {
            res.json(true)
        });


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
