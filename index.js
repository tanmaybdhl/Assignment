const express = require("express");
const mongoose = require("mongoose");


const app = express();

mongoose.connect('mongodb://localhost:27017/chatlog',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("success")}).catch((err)=>{console.log(err)})

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("data");
    console.log("welcome");
})

app.use('/chatlogs/',require("./routes/index.js"));


app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));