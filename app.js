const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const request = require ('request');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, geoCodeResults) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(geoCodeResults.address);
        weather.getWeather(geoCodeResults.latitude, geoCodeResults.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's ${weatherResults.temperature} degrees, but it feels like ${weatherResults.apparentTemperature} degrees!`);
            }
        })
    }
});
