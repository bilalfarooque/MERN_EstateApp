import React, { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (a) => {
      setQuery((prev) => ({...prev, type: a}))
    console.log(`type===>${a}`)
    console.log(`query===>${query.type}`)
};

  return (
    <>
      <div className="searchBar">
        <div className="type">
          {types.map((type) => (
            <button key={type} onClick={() => switchType(type)}
            className={query.type=== type ? "active" :""}
            >
              {type} 
            </button>
          ))}
        </div>
        <form action="">
          <input type="text" name="location" placeholder="City/Location" />
          <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
          <input type="number" name="maxPrice" min={1} max={10000000} placeholder="Max Price"/>

          <button>
            <img src="search.png" alt="search" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
