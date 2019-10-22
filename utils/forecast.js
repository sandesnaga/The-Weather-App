const request = require('request');


const forecast = ( latitude, longitude, callback) =>{
    url = 'https://api.darksky.net/forecast/c1d13990405c503b8fc4c01bda22e6ed/'+latitude+','+longitude;
    request({url:url,json:true},(error, response)=>{
        if(error){
            callback('unable to connect to location services!', undefined);
        }else if (response.body.error){
            callback('Unable to find location. Try another search',undefined);
        }
        else{
            callback(undefined, response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature+ " degrees out. There is a "+ response.body.currently.precipProbability+ " % chance of raining"
            
            )}
       })

}
module.exports = forecast;