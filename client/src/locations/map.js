import React from "react";
import {GeoJSON, Map, Marker, Popup, TileLayer} from "react-leaflet";

export default class LocationsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }
  render() {
    const {bbox, features, metadata, type} = this.props.data;
    const geoData = {
      bbox,
      features,
      metadata,
      type
    };
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
      >
        <GeoJSON data={geoData}
        />
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

