import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [desciption, setDesciption] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemp(response) {
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDesciption(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityWeather}&appid=3403a0d9be1275191d4d17e1391e7b13&units=metric`;
  axios.get(url).then(showTemp);

  if (temp) {
    return (
      <div>
        <h2>
          {" "}
          The temperature in {props.cityWeather} is {Math.round(temp)}°C{" "}
        </h2>
        <ul className="weaherList">
          <li>Temperature: {Math.round(temp)}°C</li>
          <li>Description: {desciption}</li>
          <li>Humidity: {Math.round(humidity)}</li>
          <li>Wind: {Math.round(wind)}</li>
          <li>{icon}</li>
        </ul>
      </div>
    );
  } else {
    return <h1> Loading...</h1>;
  }
}