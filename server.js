const express = require('express');
const app = express();
const dotenv = require('dotenv');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Variables de entorno
dotenv.config();
const port = process.env.PORT || 4000;

//WebSockets
io.on('connection', (ws) => {
    console.log('Connection established');
    ws.on('new message', (msg) => {
        console.log(`${msg}`);
        ws.join("some room");
        ws.to("some room").emit('new message', `${msg}`);
        //ws.emit('new message', `${msg}`);

    })
})

//Rutas
/*app.get('/', (req, res) => {
    res.send('Server running!');
})

server.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});*/
/*Rutas para VERCEL*/
/*app.get("/", (req, res) => {res.send("Express on Vercel")}
);*/

server.listen(3000, () =>
    console.log("Server ready on port 3000."));

module.exports = app;