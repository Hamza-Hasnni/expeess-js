const express = require('express');
const app = express();
const port = 8081 ;
const isWorking = require ("./middleware/workingHours")

app.use(express.static(__dirname + '/public'));
app.use(isWorking);


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/Home.html")
})

app.get("/servecis",(req,res)=>{
    res.sendFile(__dirname + "/Servecis.html")
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/ContactUs.html")
})


app.listen(port, ()=>{
    console.log(`Your server is runing... at http://localhost:${port}`)
    
})


