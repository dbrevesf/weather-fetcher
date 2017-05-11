const request = require('request');
const forecastApiKey = '33881283a72baa4d253c3cb38a75bc45';

var getWeather = (latitude, longitude, callback) => {
    request({
        url:`https://api.darksky.net/forecast/${forecastApiKey}/${latitude},${longitude}`,
        json:true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            var response = {
                temperature: body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            };
            callback(undefined, response);
        }
    })
};

module.exports.getWeather = getWeather;
