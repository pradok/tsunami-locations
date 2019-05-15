const fetch = require("node-fetch");
const https = require("https");

const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp";

const earthquakes = place => {
  return fetch(url)
    .then(response => response.text())
    .then(responseText => {
      var jsonPClean = responseText.substring("eqfeed_callback(".length);
      const jsonValid = jsonPClean.substring(jsonPClean.length - 2, -2);
      const jsonObj = JSON.parse(jsonValid);
      if (place) {
        jsonObj.features = jsonObj.features.filter(feature => {
          return feature.properties.place.includes(place);
        });
        return jsonObj;
      }
      return jsonObj;
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = earthquakes;
