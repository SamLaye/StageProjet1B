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