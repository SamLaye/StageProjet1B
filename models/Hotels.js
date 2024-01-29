const mongoose = require('mongoose')
const {Schema} = mongoose

const hotelSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    adress: {type: String, required: true},
    price: {type: String, required: true},
    image:  String,
    userId: Schema.ObjectId,
    createdBy: {
        ref: "User",
        type: Schema.ObjectId
    }
},
{
    timestamps: true
})

const Hotel = mongoose.model("Hotel", hotelSchema)

module.exports = Hotel;