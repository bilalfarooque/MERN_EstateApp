import React from "react";
import "./map.scss";
// import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { listData } from "../../lib/dummyData";

const Map = () => {
  const data = listData;

  const position = [51.5074, 0.1278];
  return (
    <>
      <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
