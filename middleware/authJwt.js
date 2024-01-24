const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.JWT_SECRET

const authentificateToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).send({message: "Authentification failed!"})

    jwt.verify(token, secretKey, (err, user) => {
        if(err) return res.status(403).send({message: "Token is not valid, please login again"})

        req.user = user
        next()
    })
}

module.exports = authentificateToken;