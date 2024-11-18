const express = require("express");
const app = express();
const dotEnv = require("dotenv")
const connection = require("./database/connection");
const cors = require("cors")
const bodyParser = require("body-parser")

dotEnv.config();

const PORT = process.env.PORT || 3001

//request payload middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());
connection()

app.use("/patient",require('./routes/patientRouters'))
app.use("/visit",require('./routes/visitRouters'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

app.use((err,req,res,next)=>{
    console.log(`Somthing went wrong ${err}`)
    res.status(500);
    res.send({
        status: 500,
        message: err.message,
        body : {}
    })
})
