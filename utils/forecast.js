const request = require('request');


const forecast = ( latitude, longitude, callback) =>{
    url = 'https://api.darksky.net/forecast/c1d13990405c503b8fc4c01bda22e6ed/'+latitude+','+longitude;

    //reference.body
    request({url,json:true},(error, {body})=>{
        if(error){
            callback('unable to connect to location services!', undefined);
        }else if (body.error){
            callback('Unable to find location. Try another search',undefined);
        }
        else{
            callback(undefined, body.daily.data[0].summary+" It is currently "+body.currently.temperature+ " degrees out. There is a "+ body.currently.precipProbability+ " % chance of raining"
            
            )}
       })

}
module.exports = forecast;