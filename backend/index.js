const http = require('http');
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.get('/',(req,res)=>{
    res.send("hiiiii");
})

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", () => {
    console.log("new connection");
});


app.listen(PORT,()=>console.log(`app started on ${PORT}`))