const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=62dfaf5c991de19044afee1b29395c1f&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}