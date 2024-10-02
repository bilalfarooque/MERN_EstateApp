import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/Slider.jsx";
import { singlePostData, userData } from "../../lib/dummyData.js";
import Map from "../../components/map/Map.jsx";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <p className="price">$ {singlePostData.price}</p>
              </div>
              <div className="user">
                <img src={userData.images} alt="userImg" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsive</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="utility" />
              <div className="featureText">
                <span>Pet policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="/school.png" alt="utility" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="utility" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="utility" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            {/* <Map items={singlePostData} /> */}
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="chat" />
              Save this place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
