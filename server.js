const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server)

app.use(express.static("public"));


io.on("connection",(socket)=>{

    
    

    socket.on("message",(messageObject)=>{
        io.emit("message",messageObject);
    })

    socket.on("disconnect",()=>{
        
    })
})








const PORT = 3005;
server.listen(PORT,()=>{
    console.log(`Listning to port : ${PORT}`);
})

