const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    //console.log(encodeURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'babaefb927mshcce29816819adfcp15a24ajsn87de6d1bdc47' }
    });

    // Forma sin await y sin async
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0])
    //     })
    //     .catch(err => {
    //         console.log('Error!!!!', err)
    //     });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        nombre,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}