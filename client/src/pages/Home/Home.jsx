import React from "react";
import "./home.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae minima itaque vero consequuntur delectus temporibus
              dicta similique sequi id tenetur?
            </p>
            <SearchBar />

            <div className="boxes">
                <div className="box">
                    <h2>16+</h2>
                    <h3>Years of Experience</h3>
                </div>
                <div className="box">
                    <h2>200</h2>
                    <h3>Award Gained</h3>
                </div>
                <div className="box">
                    <h2>1200+</h2>
                    <h3>Property Ready</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="bgImg" />
        </div>
      </div>
    </>
  );
};

export default Home;
