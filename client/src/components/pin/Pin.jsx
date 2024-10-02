import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";


const Pin = ({ item }) => {
  return (
    <div>
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.images} alt="img" />
            <div className="textContainer">
              <Link to={`${item.id}`}>{item.title}</Link>
              <span >{item.bedroom}</span>
              <b className="price">{item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default Pin;
