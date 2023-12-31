const express = require("express");
const mongoose = require("mongoose");
var url = "mongodb+srv://roshankumarsinghbhumca21:Roshan1234@booking.i5pfloe.mongodb.net/?retryWrites=true&w=majority"

const app = express()
const port = process.env.PORT || 8080

require('dotenv').config();

if (process.env.heroku==true){
    url = process.env.database
}

console.log(url)

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on("open", () => {
    console.log("Database Connected")
})

app.use(express.json())
const seats = require('./urls/seats.js')
const booking = require('./urls/booking.js')

app.use('/seats/', seats)
app.use('/booking/', booking)
 
app.listen(port, () => {
    console.log("Server Started...")
})