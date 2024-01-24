export const getUserDetails = () => {
    
    const user = JSON.parse(localStorage.getItem('hotelAppUser'))

    return user;
}