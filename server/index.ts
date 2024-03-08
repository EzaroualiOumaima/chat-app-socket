import express from "express";
import http from "http";
import {Server} from "socket.io";
import messageModel from "./models/messageSchema";
import connectMongoDB from "./connection/connectiondb";

const app  = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin :'http://localhost:3000',
        methods: ["GET" , "POST"]
    }
}
)
io.on("connection", (socket)=> {
    console.log("A user connected") 
    socket.on("message" , async (message, room ) => {
        await connectMongoDB()
        await messageModel.create({content:message})
        socket.emit("message" , message)
        console.log(message , room)
    })
    
    socket.on("disconnect" , ()=> {
        console.log("user disconnect")
    })
})
server.listen(8080)

