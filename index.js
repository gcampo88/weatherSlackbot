const qs = require('qs');
const http = require('http');
WEATHERURL = "http://api.openweathermap.org/data/2.5/weather";
APIKEY = "e20168e3f3241b43f2b0eb41d892a61f";

exports.handler = (event, context, callback) => {
    let params, url;
    params = qs.parse(event.event);
    url = `${WEATHERURL}?zip=${params.text}&appid=${APIKEY}`


    http.get(url, (res) => {
      const contentType = res.headers['content-type'];
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const weather = JSON.parse(rawData);
          const text = `Hi ${params.user_name}! Right now, the weather in ${weather.name} is: ${weather.weather[0].main.toLowerCase()}. Take your pup out!`;
          callback(null, {
              text: text,
              response_type: "in_channel",
              statusCode: 200
          });

        } catch (e) {
          console.error(e.message);
          callback(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });

};
