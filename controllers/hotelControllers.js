const Hotel = require("../models/Hotels")


exports.createHotel = async (req, res) => {
    try{
        // res.status(201).send({message: "Hotel create with success!"})
        const data = req.body
        console.log("data", data)
        const hotel = new Hotel({
            ...data,
            // image
            image: `${req.protocol}://${req.get('host')}/images/${req.file ? req.file.filename : ""}`
            // image: req.file ? req.file.filename : null
        })
        console.log("hotel", hotel)
        const result = await hotel.save()
        // console.log("result", result)
        res.status(201).send({message: "Hotel create with successffff!"})
        console.log(req.file)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

exports.getAllHotel = async(req, res) => {
    // const {userId} = req.params;
    try{
        // const result = await Hotel.find({createdBy: userId})
        const result = await Hotel.find()
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