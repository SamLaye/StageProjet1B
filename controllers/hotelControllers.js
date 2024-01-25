const Hotel = require("../models/Hotels")


exports.createHotel = async (req, res) => {
    try{

        // const hotelObject = JSON.parse(req.body)
        // console.log(req.body)


        const data = req.body
        delete data.image;
        delete data._id;
        const hotel = new Hotel({
            ...data,
            image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
        })
        const result = await hotel.save()
        console.log(result)
        res.status(201).send({message: "Hotel create with success!"})

    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

exports.getAllHotel = async(req, res) => {
    try{
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