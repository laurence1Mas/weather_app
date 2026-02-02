import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      {/* here is the main content of the page */}
      <section style={{ backgroundImage: "url('/bg.jpg')" }} className="main-content bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      >
        <div className="max-w-7xl w-full mx-auto p-8 md:p-12 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] border">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

            {/* Texte */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-white"> Goma </h3>
              <p className="text-gray-300 text-lg">
                <span className="text-yellow-600 text-5xl font-bold">62°</span> Overcast
              </p>
            </div>

            {/* Infos droite */}
            <div className="flex justify-center md:justify-end">
              <div className="text-white text-right space-y-2">
                <p className="text-gray-300">
                  Sun <span className="ml-2">63°</span>
                  <span className="text-gray-400">57°</span>
                </p>
                <h5 className="text-sm text-gray-300">
                  Air quality : <span>20 - Good</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto p-8 md:p-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="text-center md:text-left space-y-4 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)]">
              <h3 className="text-white">Weather details</h3>
              <div className="mt-8 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] border">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 text-white">
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">Humidity</p>
                    <p className="text-gray-300">72%</p>
                  </div>
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">Wind</p>
                    <p className="text-gray-300">10 km/h</p>
                  </div>
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">Pressure</p>
                    <p className="text-gray-300">1015 hPa</p>
                  </div>
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">Visibility</p>
                    <p className="text-gray-300">10 km</p>
                  </div>
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">UV Index</p>
                    <p className="text-gray-300">5 (Moderate)</p>
                  </div>
                  <div className="text-center bg-gray-800 p-4 rounded">
                    <p className="text-lg font-semibold">Dew Point</p>
                    <p className="text-gray-300">18°C</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)]">
              <h3 className="text-white">5-days Weather forecast</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;