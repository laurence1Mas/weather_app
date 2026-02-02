import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <>
      <Header />
      {/* here is the main content of the page */}
      <section style={{ backgroundImage: "url('/bg.jpg')" }} className="main-content bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      ><br />
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
            <div className="flex justify-center md:justify-end rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(156,163,175,0.35),0_25px_50px_rgba(0,0,0,0.45)] p-6">
              <div className="w-full">
                <h3 className="text-white text-xl font-bold mb-6">5-days Weather forecast</h3>
                <div className="space-y-4">
                  {/* Jour 1 */}
                  <div className="flex items-center justify-between text-white p-4 rounded-xl bg-gray-800/50">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">Aujourd'hui</span>
                      <div className="flex items-center">
                        <span className="text-3xl mr-2">☀️</span>
                        <span>Ensoleillé</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold">28°</span>
                      <span className="text-gray-300 ml-2">22°</span>
                    </div>
                  </div>

                  {/* Jour 2 */}
                  <div className="flex items-center justify-between text-white p-4 rounded-xl bg-gray-800/50">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">Demain</span>
                      <div className="flex items-center">
                        <span className="text-3xl mr-2">⛅</span>
                        <span>Partiellement nuageux</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold">26°</span>
                      <span className="text-gray-300 ml-2">20°</span>
                    </div>
                  </div>

                  {/* Jour 3 à 5 - répéter la même structure */}
                  <div className="flex items-center justify-between text-white p-4 rounded-xl bg-gray-800/50">
                    {/* ... */}
                  </div>
                </div>

                {/* Alternative avec une grille horizontale pour mobile */}
                <div className="grid grid-cols-5 gap-2 mt-6">
                  {[1, 2, 3, 4, 5].map(day => (
                    <div key={day} className="text-center p-3 rounded-xl bg-gray-800/50 text-white">
                      <p className="font-medium text-sm">Mer</p>
                      <p className="text-3xl my-2">🌧️</p>
                      <p className="font-bold">24°</p>
                      <p className="text-gray-300 text-sm">19°</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;