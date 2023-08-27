import { log } from "console";
import  express  from "express";
import http, { createServer } from "http";
import { Socket, Server as SocketServer } from "socket.io";
const app= express()
const serv = http.createServer(app)
 const io = new SocketServer(serv, {
    cors: {
        origin: 'http://localhost:5173'
    }
 } )

io.on('connection', socket =>{ 
    console.log('client connected');
    socket.on('message', (data)=>{
        socket.broadcast.emit('message',data)
        console.log(data); 
    })
} )
  

serv.listen(3000)
console.log("server on port", 3000);  