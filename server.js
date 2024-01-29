const express = require("express")
const APP = express()
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const hotelRoutes = require('./routes/hotelRoutes')
const mongoose = require("mongoose")
// const multer = require("multer")
const PORT = process.env.PORT || 5000

require('dotenv').config()


APP.use(cors())
APP.use(cors({
    origin: 'https://stage-projet1-b.vercel.app'
}))
APP.use(express.json())

// const fileStorageEngine = multer({
//     destination: (req, file, cb) => {
//         cb(null, "./images")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date().now + "_" +  file.originalname)
//     }
// })

// const upload = multer( {storage: fileStorageEngine} )

// APP.post('/single', upload.single("image"), (req, res) => {
//     res.status(200).send("Single file upload success")
//     console.log(req.file)
// })

APP.use("/api", authRoutes)
APP.use("/api/hotel", hotelRoutes)

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Connected to DB, successfuly")
}).catch(err => console.log(err))

APP.listen(PORT, () => {
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