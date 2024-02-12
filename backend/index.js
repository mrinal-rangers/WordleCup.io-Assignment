const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
require('dotenv').config()

const app = express();
const PORT = 8000 || Process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hiiiii");
})



app.listen(PORT,()=>console.log(`app started on ${PORT}`))