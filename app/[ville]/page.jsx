"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import "@/app/globals.css";

export default function Box_1({ params }) {
  const getWeatherEmoji = (description) => {
    if (description.includes("clear")) return "☀️";
    if (description.includes("nuageux")) return "🌤️";
    if (description.includes("couvert")) return "☁️";
    if (description.includes("pluie")) return "🌧️";
    if (description.includes("orage")) return "⛈️";
    if (description.includes("neige")) return "❄️";
    if (description.includes("brouillard")) return "🌫️";
    return "🌤️";
  };

  const [dailyData, setDailyData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        //Api Gratuite
        const response = await fetch(``);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();

        //(One Call API)
        const { lon, lat } = data.coord;
        const oneCallResponse = await fetch(``);
        const oneCallData = await oneCallResponse.json();

        setWeatherData(data);
        setHourlyData(oneCallData.hourly.slice(0, 13)); // 13 heures
        setDailyData(oneCallData.daily.slice(0, 7)); // 7 jours
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [params.ville]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <center>
          <div id="wheather-results"></div>
          <div class="titre">
            <div class="titre1">
              <h1>Météo</h1>
            </div>
          </div>
          <div class="box_1">
            <div class="ville">
              <h1>
                {weatherData?.name}
                <img
                  class="localisation"
                  src="img/localisation.png"
                  alt="Localisation"
                />
              </h1>
            </div>
            <div className="degré">
              <h1>{Math.round(weatherData?.main?.temp)}°C</h1>
            </div>
            <div class="degré2">
              {Math.round(weatherData?.main?.temp_min)}°/
              {Math.round(weatherData?.main?.temp_max)}°
            </div>
            <div class="temps">{weatherData?.weather[0]?.description}</div>
          </div>
        </center>
      </Suspense>

      <center>
        <div className="box_2">
          {hourlyData.map((hour, index) => {
            // Calcule
            const date = new Date(hour.dt * 1000);
            const hours = date.getHours();

            //rajoute emoji
            const weatherEmoji = getWeatherEmoji(
              hour.weather[0].description.toLowerCase()
            );

            return (
              <div className="temps_h" key={index}>
                <pre>
                  {hours}:00 <br />
                  {weatherEmoji} <br />
                  {Math.round(hour.temp)}°C
                </pre>
              </div>
            );
          })}
        </div>

        <center>
          <div
            className="box_3"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            {dailyData.map((day, index) => {
              const date = new Date(day.dt * 1000);
              const options = {
                weekday: "short",
                day: "numeric",
                month: "short",
              };
              const dayString = date.toLocaleDateString("fr-FR", options);

              // Get the weather description and emoji for the day
              const weatherDescription =
                day.weather[0].description.toLowerCase();
              const weatherEmoji = getWeatherEmoji(weatherDescription);

              return (
                <div key={index}>
                  <pre>
                    <hr />
                    {dayString}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {weatherEmoji}{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {Math.round(day.temp.max)}°/
                    {Math.round(day.temp.min)}°
                    <br />
                  </pre>
                </div>
              );
            })}
          </div>
        </center>

        <div class="box_4">
          <h3>
            <br />
            Vent
          </h3>
          <img class="eolienne" src="img/eolienne.png" alt="Eolienne" />
          <div class="Eolienne_Legende">
            <pre>
              {weatherData?.wind?.deg}° <br />
              Vitesse &lt; {weatherData?.wind?.speed}kmh
            </pre>
          </div>
        </div>

        <div class="box_5">
          <div class="UV">Humidité</div>
          <div className="UV_1">
            <h1>{weatherData?.main?.humidity}%</h1>
          </div>
        </div>

        <div class="visibilité">
          <div class="visi">Visibilité</div>
          <div className="deg">
            <h1>Visible sur {weatherData?.visibility / 1000}km</h1>
          </div>
        </div>
      </center>
    </>
  );
}
