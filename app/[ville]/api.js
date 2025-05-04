import "@/app/[ville]/page.jsx";
import "@/app/page.js";
import { useState } from 'react';


function renderweather(wheater){
    console.log(wheater);
    var resultsContainer = document.querySelector("#wheather-results");
    
    var city = document.createElement("h2");
    city.textContent = wheater.name;
    resultsContainer.append(city);
  
    var temp = document.createElement("p");
    temp.textContent = wheater?.main?.temp;
    resultsContainer.append(temp);
  
    var humidity = document.createElement("p");
    humidity.textContent = "Humidity : " + wheater?.main?.humidity + "%";
    resultsContainer.append(humidity);
    
    var wind = document.createElement("p");
    wind.textContent = "Wind : " + wheater?.wind?.speed + "km/h" + wheater?.wind?.deg + "°";
    resultsContainer.append(wind);
    resultsContainer.append("wind")
  }
  
  function fetchweather(ville) { 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=006e52302e6ea3ff3caa0d0601f073d4&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => renderweather (data));
  }
  
  fetchweather();  
  
  