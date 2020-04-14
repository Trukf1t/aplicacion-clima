const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');



const getInfoTemp = async(direccion) => {
    let coordenadas;
    let temp;

    try {
        coordenadas = await lugar.getLugarLatLng(direccion);
        temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.nombre} es de ${temp} C`;
    } catch (e) {
        return `No se pudo encontrar informacion de ${direccion}`
    }



    // await lugar.getLugarLatLng(direccion).then(data => {
    //         clima.getClima(data.lat, data.lng).then(data => {
    //             temp = data;

    //         }).catch(err => {
    //             console.log(err);
    //         });

    //         nombre = data.nombre;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });


}


getInfoTemp(argv.direccion).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// lugar.getLugarLatLng(argv.direccion).then(data => {
//     console.log(data)
// });


// clima.getClima(40.750000, -74.000000)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     });