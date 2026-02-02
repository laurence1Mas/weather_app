
import React from "react";

function Header({ city, setCity, onSearch, onLocate }) {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-4 shadow-md ">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    Weather App
                </h1>

                {/* Search */}
                <div className="flex gap-2 flex-1">
                    <input
                        type="text"
                        placeholder="Enter city..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 rounded-full text-black border-none boder-0 focus:outline-none"
                    />
                    <button
                        onClick={onSearch}
                        className="bg-white text-blue-600 px-4 rounded-full font-semibold"
                    >
                        Search
                    </button>
                </div>

                {/* Location */}
                <button
                    onClick={onLocate}
                    className="text-sm underline"
                >
                    My location
                </button>
            </div>

        </header>
    );
}
export default Header;

