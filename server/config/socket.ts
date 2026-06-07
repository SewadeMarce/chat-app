import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";



 const app = express();
const server = createServer(app)
const io = new Server(server)
app.get('/test', (req,res)=> res.json({test: 'Tesk is Ok'}))
app.get('/tesst', (req,res)=> res.json({test: 'Test is Ok'}))

export {app,
    server,
    io
}