import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState(true);
  let [submitCity, setSubmitCity] = useState(true);

  function handleSubmit(event) {
    setSubmitCity(city);
    event.preventDefault();
    if (true) {
      <Weather />;
    } else {
      alert("Type city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <h1> Weather App </h1>
      <form>
        <br />
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>
      {<Weather cityWeather={submitCity} />}
    </div>
  );
}
