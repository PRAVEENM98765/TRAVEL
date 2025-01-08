import React from "react";
import maldives from "./Assetes/maldives.jpg";
import paris from "./Assetes/paris.jpg";
import switz from "./Assetes/switz.jpg";
import usa from "./Assetes/usa.jpg";
import india from "./Assetes/india.jpg";
import japan from "./Assetes/japan.jpg";

import { IoIosArrowDown } from "react-icons/io";

const Destination = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-cover bg-bottom h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-[url('../src/components/Assetes/destine.png')] flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif text-center p-4">
          Destinations
        </h1>
      </div>

      {/* Title Section */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-8 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          All Destinations
        </h1>
        <IoIosArrowDown size={32} className="text-gray-600" />
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
        {[
          {
            image: maldives,
            alt: "Maldives",
            name: "Maldives",
            navigate: "/maldives",
          },
          {
            image: paris,
            alt: "Paris",
            name: "Paris",
            navigate: "/paris",
          },
          {
            image: switz,
            alt: "Switzerland",
            name: "Switzerland",
            navigate: "/switz",
          },
          {
            image: usa,
            alt: "U.S.A",
            name: "U.S.A",
            navigate: "/usa",
          },
          {
            image: india,
            alt: "India",
            name: "India",
            navigate: "/india",
          },
          {
            image: japan,
            alt: "Japan",
            name: "Japan",
            navigate: "/japan",
          },
        ].map((destination, index) => (
          <div
            key={index}
            className="relative group rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <a href={destination.navigate}>
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
                  {destination.name}
                </h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
