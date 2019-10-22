
const request = require("request");
const chalk = require ("chalk");


// const url = 'https://api.darksky.net/forecast/c1d13990405c503b8fc4c01bda22e6ed/'+longitude+","+latitude;
// request({url: url, json: true}, (error, response, body) =>{
//     if(error){
//         console.log("unable to reach the server");        
//     }else if (response.body.error) {
//         console.log("Unable to find the location");
//     } else {
//         console.log(chalk.red.inverse(response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature+ " degrees out. There is a "+ response.body.currently.precipProbability+ " % chance of raining"));
//     }
   
// } )

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FuZGVzaG5hZ2EiLCJhIjoiY2sxemRlYWVoMG00YjNjcTg0ZDdleWsybSJ9.gSOPg8okmzUp7nJqFVNVLQ';
    request({url: url, json: true},(error, response) =>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (response.body.features.length === 0){
            callback("unable to find location. Try another search.", undefined);
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name           
             })
        }
    })
}
module.exports = geocode;
