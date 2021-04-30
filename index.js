const fs = require("fs");

const express = require("express");

const port = express();
const cors = require("cors");

port.use(cors())
port.use(express.json())

port.get("/",(req,res)=>{
fs.readdir("D:/", (err, data) => {
    res.json(
      data.map((item)=>{
        return {fileName:item}
      })
    )
  })
});

port.post("/getapi",(req,res)=>{
  let direc = "D:/"+ req.body.data+"/"+req.body.file+".txt";
  fs.writeFile(direc,req.body.time_S,(err)=>{if(err)console.log(err);})
})

port.listen(process.env.PORT || 8080,()=>{console.log("server is running")})
