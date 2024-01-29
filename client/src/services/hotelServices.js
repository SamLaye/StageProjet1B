import axios from 'axios'
// Axios est une bibliothèque JavaScript populaire qui permet d'effectuer des requêtes HTTP depuis un navigateur ou depuis Node.js. Elle simplifie l'interaction avec les API HTTP en fournissant une interface simple et puissante pour effectuer des requêtes.

// const SERVER_URL = 'http://localhost:5000/api/hotel'
// const SERVER_URL = 'https://stageprojet1b-samlaye.onrender.com/api'
const SERVER_URL = 'https://stageprojet1b-samlaye0.onrender.com/api'

const createHotel = (data) => {
    return axios.post(SERVER_URL + '/create-hotel', data)
}

const getAllHotel = () => {
    return axios.get(SERVER_URL + '/all-hotel' )
}

const updateHotel = (id) => {
    return axios.patch(SERVER_URL + '/update-hotel/' +id)
}

const deleteHotel = (id, data) => {
    return axios.delete(SERVER_URL + '/delete-hotel/' +id, data)
}

const HotelServices = {
    createHotel,
    getAllHotel,
    updateHotel,
    deleteHotel
}

export default HotelServices