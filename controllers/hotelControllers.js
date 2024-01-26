const Hotel = require("../models/Hotels")


exports.createHotel = async (req, res) => {
    try{
         const data = req.body
        const hotel = new Hotel(data)
        const result = await hotel.save()
        console.log(result)
        res.status(201).send({message: "Hotel create with success!"})

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

exports.getAllHotel = async(req, res) => {
    const {userId} = req.params;
    try{
        const result = await Hotel.find({createdBy: userId})
        res.send(result)
    }catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}

exports.updateHotel = async (req, res) => {
    try{
        const {id} = req.params
        const data = req.body 
        const result = await Hotel.findByIdAndUpdate(id, {$set:data}, {returnOriginal:false})
        res.send({message: "Update hotel successfull"})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

exports.deleteHotel = async (req, res) => {
    try{
        const {id} = req.params
        const result = await Hotel.findOneAndDelete(id)
        res.status(200).send({message: "Hotel delete successfully!"})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}