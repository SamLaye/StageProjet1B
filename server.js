const express = require("express")
const app = express()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const hotelRoutes = require('./routes/hotelRoutes')
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use("/api", authRoutes)
app.use("/api/hotel", hotelRoutes)

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Connected to DB, successfuly")
}).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log('Server started at port', PORT)
})


// Identifiant MongoDB
// psw:        SamMongoDB1
// username:   layesam

// npm install mongodb

// mongodb+srv://layesam:SamMongoDB1@sam-app.o5ijisv.mongodb.net/?retryWrites=true&w=majority

// Connection String
// mongodb+srv://layesam:<password>@sam-app.o5ijisv.mongodb.net/

// mongodb+srv://layesam:SamMongoDB1@sam-app.o5ijisv.mongodb.net/