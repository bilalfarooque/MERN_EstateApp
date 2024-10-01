import React from "react";
import "../filter/filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for "<b>London</b>"
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city/location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="city">Type</label>
          <select name="type" id="type">
            <option value="">All</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="appartment">Appartment</option>
            <option value="house">House</option>
            <option value="portion">Portion</option>
            <option value="plot">Plot</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
