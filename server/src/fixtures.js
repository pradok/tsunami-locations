const features = [
  {
    "type": "Feature",
    "properties": {
      "mag": 5.2,
      "place": "233km S of Ohonua, Tonga",
      "time": 1557748870494,
      "updated": 1557750055040,
      "tz": -720,
      "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us70003kcb",
      "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us70003kcb.geojsonp",
      "felt": null,
      "cdi": null,
      "mmi": null,
      "alert": null,
      "status": "reviewed",
      "tsunami": 0,
      "sig": 416,
      "net": "us",
      "code": "70003kcb",
      "ids": ",us70003kcb,",
      "sources": ",us,",
      "types": ",geoserve,origin,phase-data,",
      "nst": null,
      "dmin": 6.391,
      "rms": 1.78,
      "gap": 40,
      "magType": "mb",
      "type": "earthquake",
      "title": "M 5.2 - 233km S of Ohonua, Tonga"
    },
    "geometry": {"type": "Point", "coordinates": [-174.9597, -23.4381, 10]},
    "id": "us70003kcb"
  },
  {
    "type": "Feature",
    "properties": {
      "mag": 1.3,
      "place": "53km E of Cape Yakataga, Alaska",
      "time": 1557748355568,
      "updated": 1557748518814,
      "tz": -540,
      "url": "https://earthquake.usgs.gov/earthquakes/eventpage/ak019645c5b8",
      "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak019645c5b8.geojsonp",
      "felt": null,
      "cdi": null,
      "mmi": null,
      "alert": null,
      "status": "automatic",
      "tsunami": 0,
      "sig": 26,
      "net": "ak",
      "code": "019645c5b8",
      "ids": ",ak019645c5b8,",
      "sources": ",ak,",
      "types": ",geoserve,origin,",
      "nst": null,
      "dmin": null,
      "rms": 1.1,
      "gap": null,
      "magType": "ml",
      "type": "earthquake",
      "title": "M 1.3 - 53km E of Cape Yakataga, Alaska"
    },
    "geometry": {"type": "Point", "coordinates": [-141.4773, 60.0985, 0]},
    "id": "ak019645c5b8"
  },
];

const geoJsonData = {
  bbox: [-179.5237, -32.8503, -0.36, 165.4692, 79.4078, 517.08],
  metadata: {
    api: "1.8.1",
    count: 217,
    generated: 1557751374000,
    status: 200,
    title: "USGS All Earthquakes, Past Day",
    url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp"
  },
  features,
  type: "FeatureCollection"
};

module.exports = {
  geoJsonData
};