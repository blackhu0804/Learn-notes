#!/usr/bin/env node

var axios = require('axios');
console.log(process.argv)

var data = {}

if(process.argv[2]){
  data.params = {
    city: process.argv[2]
  }
}

axios.get('https://weixin.jirengu.com/weather', data)
  .then(function(response){
    console.log(response.data.weather[0].city_name)
    console.log(response.data.weather[0].now.text)
    console.log(response.data.weather[0].now.temperature + "℃")
  })
  .catch(function(error){
    console.log(error);
  })
