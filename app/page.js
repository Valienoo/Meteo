"use client";
import Link from "next/link";
import "@/app/globals.css";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [weatherParis, setWeatherParis] = useState(null);
  const [weatherMarseille, setWeatherMarseille] = useState(null);
  const [weatherBordeaux, setWeatherBordeaux] = useState(null);
  const [weatherLille, setWeatherLille] = useState(null);
  const [weatherNice, setWeatherNice] = useState(null);
  const [weatherViryChâtillon, setWeatherViryChâtillon] = useState(null);

  const [weatherLondres, setWeatherLondres] = useState(null);
  const [weatherBarcelone, setWeatherBarcelone] = useState(null);
  const [weatherRome, setWeatherRome] = useState(null);
  const [weatherBelgique, setWeatherBelgique] = useState(null);
  const [weatherÉtatsUnis, setWeatherÉtatsUnis] = useState(null);
  const [weatherArgentine, setWeatherArgentine] = useState(null);
  const [error, setError] = useState(null);

  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    const fetchWeather = async (city, setWeather) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=006e52302e6ea3ff3caa0d0601f073d4&units=metric&lang=fr`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data for ${city}`);
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather("Paris", setWeatherParis);
    fetchWeather("Marseille", setWeatherMarseille);
    fetchWeather("Bordeaux", setWeatherBordeaux);
    fetchWeather("Lille", setWeatherLille);
    fetchWeather("Nice", setWeatherNice);
    fetchWeather("Viry-Châtillon", setWeatherViryChâtillon);

    fetchWeather("Londres", setWeatherLondres);
    fetchWeather("Barcelone", setWeatherBarcelone);
    fetchWeather("Rome", setWeatherRome);
    fetchWeather("Belgique", setWeatherBelgique);
    fetchWeather("États-Unis", setWeatherÉtatsUnis);
    fetchWeather("Argentine", setWeatherArgentine);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity) {
      // Rediriger vers la page de la ville recherchée
      window.location.href = `/${searchCity}`; // Vous pouvez personnaliser l'URL selon vos besoins
    }
  };

  return (
    <>
      <div>
        <center>
          <div class="TitreRecherche">Météo</div>
        </center>
        <center>
          <div class="BoutonRecherche">
            <form onSubmit={handleSearch} className="form-container">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Rechercher une ville..."
              />
              <button type="submit">Rechercher</button>
            </form>
          </div>
        </center>
        <center>
          <div class="Zone1">
            <div class="TitreZone">Villes de France</div>

            <div class="ville1">
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Paris&nbsp;{Math.round(weatherParis?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Paris" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Marseille&nbsp;
                  {Math.round(weatherMarseille?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Marseille" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Bordeaux&nbsp;
                  {Math.round(weatherBordeaux?.main?.temp ?? "--")}
                  °C
                </div>
                <div class="emojiVille">
                  <Link href="/Bordeaux" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
            </div>

            <br></br>

            <div class="ville2">
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Lille&nbsp;{Math.round(weatherLille?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Lille" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Nice&nbsp;{Math.round(weatherNice?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Nice" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Viry-Châtillon&nbsp;
                  {Math.round(weatherViryChâtillon?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Viry-Châtillon" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </center>
        <center>
          <div class="Zone2">
            <center>
              <div class="TitreZone">Autres Villes</div>
            </center>
            <div class="ville3">
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Londres&nbsp;{Math.round(weatherLondres?.main?.temp ?? "--")}
                  °C
                </div>
                <div class="emojiVille">
                  <Link href="/Londres" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Barcelone&nbsp;
                  {Math.round(weatherBarcelone?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Barcelone" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Rome&nbsp;{Math.round(weatherRome?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/Rome" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
            </div>

            <br></br>
            <div class="ville4">
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Belgique&nbsp;
                  {Math.round(weatherBelgique?.main?.temp ?? "--")}
                  °C
                </div>
                <div class="emojiVille">
                  <Link href="/Belgique" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  États-Unis&nbsp;
                  {Math.round(weatherÉtatsUnis?.main?.temp ?? "--")}°C
                </div>
                <div class="emojiVille">
                  <Link href="/États-Unis" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
              <br></br>
              <div class="BoutonVille">
                <div class="VilleAcceuil">
                  Agentine&nbsp;
                  {Math.round(weatherArgentine?.main?.temp ?? "--")}
                  °C
                </div>
                <div class="emojiVille">
                  <Link href="/Argentine" className="emoji-link">
                    ➡️
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
