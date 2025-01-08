import React from "react";

import video from './Usa.mp4'
// Highlight image for USA
import highlightUSA from './USAhighlight.webp';

// Day images for the USA itinerary
import usaday1 from './usaday1.jpg';
import usaday2 from './usaday2.jpg';
import usaday3 from './usaday3.jpg';
import usaday4 from './Usaday4.jpg';
import usaday5 from './usaday5.jpg';
import usaday6 from './usaday6.jpg';
import { Link } from "react-router-dom";

const USA = () => {
  const itinerary = [
    {
      day: "Day 1",
      details: 'Arrival at New York City.',
      details1: 'Private transfer to your luxury hotel in Manhattan.',
      details2: 'Explore Times Square, Central Park, and the Statue of Liberty.',
      details3: 'Welcome dinner with city views.',
      image: usaday1,
    },
    {
      day: "Day 2: Washington D.C. Tour",
      details: 'Day excursion to Washington D.C., the heart of American history.',
      details1: 'Visit iconic landmarks such as the White House, Lincoln Memorial, and the U.S. Capitol.',
      details2: 'Enjoy a guided tour of the Smithsonian Museums.',
      details3: 'Return to New York for an evening at leisure.',
     image: usaday2,
    },
    {
      day: "Day 3: Niagara Falls Adventure",
      details: 'Transfer to Niagara Falls, one of the world’s most famous natural wonders.',
      details1: 'Boat ride to the base of the falls for a thrilling experience.',
      details2: 'Explore the surrounding parks and hiking trails.',
      details3: 'Overnight stay in Niagara Falls.',
     image: usaday3,
    },
    {
      day: "Day 4: Las Vegas & Grand Canyon",
      details: 'Fly to Las Vegas for a dazzling adventure.',
      details1: 'Visit the Grand Canyon for a breathtaking helicopter tour.',
      details2: 'Explore the Vegas Strip and enjoy the evening entertainment.',
      details3: 'Overnight stay in Las Vegas.',
     image: usaday4,
    },
    {
      day: "Day 5: Los Angeles & Hollywood",
      details: 'Transfer to Los Angeles.',
      details1: 'Visit the Hollywood Walk of Fame, Venice Beach, and the iconic Santa Monica Pier.',
      details2: 'Take a tour of the famous Universal Studios theme park.',
      details3: 'Evening at leisure in LA.',
     image: usaday5,
    },
    {
      day: "Day 6: San Francisco & Departure",
      details: 'Fly to San Francisco.',
      details1: 'Visit the Golden Gate Bridge, Alcatraz Island, and Fisherman’s Wharf.',
      details2: 'Time for shopping at Union Square.',
      details3: 'Private transfer to San Francisco Airport for your departure.',
     image: usaday6,
    },
  ];

  const pricingDetails = [
    { type: "Couple Package", price: "₹4,50,000 for 6 nights" },
    { type: "Family Package (4 pax)", price: "₹7,00,000 for 6 nights" },
    { type: "Solo Traveler", price: "₹3,00,000 for 6 nights" },
  ];

  const addOns = [
    { title: "Private helicopter tour over Grand Canyon", price: "$500 per person" },
    { title: "VIP tickets to Universal Studios", price: "$150 per person" },
    { title: "Professional photoshoot in Hollywood", price: "$200" },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Header Section */}
      <div className="relative text-gray-800">
        {/* YouTube Background */}
        <video
         className="absolute top-0 left-0 w-full h-[40vh] sm:h-[40vh] lg:h-[70vh] object-cover rounded-xl"
         src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay Content */}
        <div className="relative p-10 md:p-20 lg:p-44  text-white">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-blue-200">USA Travel Package</h1>
            <p className="text-xl sm:text-3xl md:text-6xl mt-4">Explore the Land of Opportunities.</p>
          </div>
        </div>

        {/* Highlights Section */}
        <section className="sm:mt-5 md:mt-20 lg:mt-20 p-6 sm:p-8 lg:p-10 bg-gray-200 rounded-xl shadow-lg max-w-full md:max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl md:text-xl text-left">
            <li>Duration: 6 Nights / 7 Days</li>
            <li>Destinations: New York City, Washington D.C., Niagara Falls, Las Vegas, Grand Canyon, Los Angeles, San Francisco</li>
            <li>Type: Luxury, Adventure, Family, Honeymoon</li>
          </ul>
          <img
            className="w-full md:w-[70vw] h-[30vh] sm:h-[40vh] md:h-[50vh] mt-5 rounded-3xl shadow-lg"
            src={highlightUSA}
            alt="USA Highlights"
          />
        </section>
      </div>

      {/* Itinerary Section */}
      <div className="space-y-6 justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white shadow-md rounded-md p-4 "
          >
            <div className="md:w-2/4">
              <h3 className="text-3xl sm:text-4xl font-semibold text-blue-500">{item.day}</h3>
              <li className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-600">{item.details}</li>
              <li className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-600">{item.details1}</li>
              <li className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-600">{item.details2}</li>
              <li className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-600">{item.details3}</li>
            </div>
            <div className="md:w-2/4">
              <img
                src={item.image}
                alt={`${item.day}`}
                className="rounded-md object-cover w-full h-[30vh] sm:h-[40vh] md:h-[50vh]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">Pricing</h2>
        <div className="mt-4 space-y-4">
          {pricingDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-md"
            >
              <p className="text-gray-600 text-sm sm:text-base md:text-xl">
                <span className="font-semibold">{item.type}:</span> {item.price}
              </p>
              <Link to="/booking" state={{ product: item }}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">
          * Prices may vary based on travel dates and customization requests.
        </p>
      </div>

      {/* Add-Ons Section */}
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">Add-Ons</h2>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm sm:text-base md:text-xl">
          {addOns.map((item, index) => (
            <li key={index}>✨ {item.title} ({item.price})</li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-gray-600 text-sm sm:text-base md:text-xl">
          <li>🌟 Tailored luxury experiences</li>
          <li>🌟 Trusted local partnerships for authentic American adventures</li>
          <li>🌟 24/7 support during your trip</li>
        </ul>
      </div>
    </div>
  );
};

export default USA;
