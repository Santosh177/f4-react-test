import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";
function LandingPage() {
  const [search, setSearch] = useState();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="header">
          <h2>Weather Api</h2>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <button onClick={()=>{
            const newString = search.replace(/\s+/g, "+");
            navigate(`/weather/${newString}`)
          }}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
