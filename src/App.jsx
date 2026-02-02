import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />
      {/* here is the main content of the page */}
      <section style={{ backgroundImage: "url('/bg.jpg')" }} className="main-content bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl w-full mx-auto p-8 md:p-12 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_50px_50px_rgba(128,128,128,0.35)]
                        border border-white/10">
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
      </section>

      <Footer />
    </>
  );
}

export default App;