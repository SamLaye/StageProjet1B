import axios from 'axios'
// Axios est une bibliothèque JavaScript populaire qui permet d'effectuer des requêtes HTTP depuis un navigateur ou depuis Node.js. Elle simplifie l'interaction avec les API HTTP en fournissant une interface simple et puissante pour effectuer des requêtes.

const SERVER_URL = 'http://localhost:5000/api'

const registerUser = (data) => {
    return axios.post(SERVER_URL + '/register', data)
}

const loginUser = (data) => {
    return axios.post(SERVER_URL + '/login', data)
}

const AuthServices = {
    registerUser,
    loginUser
}

export default AuthServices