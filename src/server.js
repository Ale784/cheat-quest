import  Express from "express";
import { createServer } from "node:http"
import { Server } from "socket.io";

const app = Express()
const server = createServer(app)
const io = new Server(server)
const __dirname = new URL('../client/', import.meta.url).pathname;

app.use(Express.static(__dirname))

io.on('connection', (socket) => {
    console.log('A user is connected')
    socket.on('chat message', (msg) => {
        console.log("New message", msg)
        io.emit('chat message', msg)
    })
})

server.listen(3001, () => {
    console.log('listening at port http://localhost:3001/')
})
