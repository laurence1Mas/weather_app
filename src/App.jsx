import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [city, setCity] = useState("Goma");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (searchCity) => {
    if (!searchCity || searchCity.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchCity}&days=5&aqi=yes&alerts=no`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <>
      <Header
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeather(city)}
        onLocate={() => fetchWeather("Goma")}
      />

      {/* MAIN CONTENT */}
      <section
        style={{ backgroundImage: "url('/bg.jpg')" }}
        className="main-content bg-cover bg-center min-h-screen flex flex-col items-center justify-center pt-24"
      >
        {/* HERO */}
        <div className="max-w-7xl w-full mx-auto p-8 md:p-12 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] border">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-white">
                {weather?.location?.name}
              </h3>
              <p className="text-gray-300 text-lg">
                <span className="text-yellow-600 text-5xl font-bold">
                  {weather?.current?.temp_c}°
                </span>{" "}
                {weather?.current?.condition?.text}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="text-white text-right space-y-2">
                <p className="text-gray-300">
                  {weather?.forecast?.forecastday[0]?.date}
                </p>
                <h5 className="text-sm text-gray-300">
                  Air quality :{" "}
                  <span>
                    {weather?.current?.air_quality?.["us-epa-index"]}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS + FORECAST */}
        <div className="max-w-7xl w-full mx-auto p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DETAILS */}
            <div className="rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] p-6">
              <h3 className="text-white text-xl font-bold mb-6">
                Weather details
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-white">
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>Humidity</p>
                  <p>{weather?.current?.humidity}%</p>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>Wind</p>
                  <p>{weather?.current?.wind_kph} km/h</p>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>Pressure</p>
                  <p>{weather?.current?.pressure_mb} hPa</p>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>Visibility</p>
                  <p>{weather?.current?.vis_km} km</p>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>UV</p>
                  <p>{weather?.current?.uv}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p>Feels like</p>
                  <p>{weather?.current?.feelslike_c}°C</p>
                </div>
              </div>
            </div>

            {/* FORECAST */}
            <div className="rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] p-6">
              <h3 className="text-white text-xl font-bold mb-6">
                5-days Weather forecast
              </h3>

              <div className="grid grid-cols-5 gap-2">
                {weather?.forecast?.forecastday.map((day) => (
                  <div
                    key={day.date}
                    className="text-center bg-gray-800/60 p-3 rounded text-white"
                  >
                    <p className="text-sm">{day.date}</p>
                    <img
                      src={day.day.condition.icon}
                      alt=""
                      className="mx-auto"
                    />
                    <p className="font-bold">{day.day.maxtemp_c}°</p>
                    <p className="text-gray-300 text-sm">
                      {day.day.mintemp_c}°
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {loading && <p className="text-white mt-6">Loading...</p>}
        {error && <p className="text-red-400 mt-6">{error}</p>}
      </section>

      <Footer />
    </>
  );
}

export default App;
