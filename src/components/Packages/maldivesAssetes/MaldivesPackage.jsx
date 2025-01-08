import React from 'react';
import video from './maldives.mp4';
import highlight from './highlight.webp';
import malday1pl1 from './malday1.jpg';
import malday2 from './malday2.jpg';
import malday3 from './malday3.webp';
import malday4 from './malday4.jpg';
import malday5 from './malday5.jpg';
import malday6 from './malday6.jpg';
import { Link } from 'react-router-dom';

const MaldivesPackage = () => {
  const itinerary = [
    {
      day: "Day 1",
      details: "Arrival in Malé",
      details1: "Speedboat transfer to the resort,",
      details2: "Welcome drinks and leisure time to relax at the beach.",
      image: malday1pl1,
    },
    {
      day: "Day 2",
      details: "Snorkeling trip to coral reefs,",
      details1: "Scuba diving (optional),",
      details2: "Evening beach dinner with live music.",
      image: malday2,
    },
    {
      day: "Day 3",
      details: "Visit nearby islands like Maafushi,",
      details1: "Traditional Maldivian lunch,",
      details2: "Night stay at a luxury beach villa.",
      image: malday3,
    },
    {
      day: "Day 4",
      details: "Private spa treatments,",
      details1: "Swim in infinity pools,",
      details2: "Sunset cruise with complimentary drinks.",
      image: malday4,
    },
    {
      day: "Day 5",
      details: "Morning dolphin safari,",
      details1: "Jet skiing, parasailing, and windsurfing,",
      details2: "Special candlelight dinner at the villa.",
      image: malday5,
    },
    {
      day: "Day 6",
      details: "Farewell breakfast,",
      details1: "Transfer to the airport by speedboat,",
      details2: "Thanks for traveling with us!",
      image: malday6,
    },
  ];

  const pricingDetails = [
    { type: "Couple Package", price: "₹3,38,910 for 5 nights" },
    { type: "Family Package (4 pax)", price: "₹5,50,696 for 5 nights" },
    { type: "Solo Traveler", price: "₹2,11,807 for 5 nights" },
  ];

  const addOns = [
    { title: "Underwater dining experience", price: "$300 per person" },
    { title: "Private yacht cruise", price: "$500 per couple" },
    { title: "Professional photoshoot package", price: "$150" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Header Section */}
      <div className="relative">
  {/* Video Section */}
  <video
    className="absolute top-0 left-0 w-full h-[40vh] sm:h-[60vh] lg:h-[70vh] object-cover rounded-xl"
    src={video}
    autoPlay
    loop
    muted
  />
  {/* Overlay Content */}
  <div className="relative p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center items-center">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center">
      Maldives Travel Package
    </h1>
    <p className="text-lg sm:text-2xl lg:text-3xl mt-4 text-center">
      Discover luxury and adventure in paradise.
    </p>
  </div>
</div>

{/* Highlights Section */}
<section className="mt-40 sm:mt-96 md:mt-60 lg:mt-96 p-6 sm:p-8 lg:p-10 bg-gray-200 rounded-xl shadow-lg max-w-full md:max-w-5xl mx-auto">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center text-blue-600">
    Highlights
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <ul className="list-disc pl-5 space-y-4 text-base sm:text-lg lg:text-xl text-gray-700 col-span-1">
      <li>
        <span className="font-semibold">Duration:</span> 5 Nights / 6 Days
      </li> 
      <li>
        <span className="font-semibold">Destinations:</span> Malé, Maafushi, Meeru Island
      </li>
      <li>
        <span className="font-semibold">Type:</span> Luxury, Adventure, Honeymoon, Family
      </li>
    </ul>
    <div className="col-span-1 sm:col-span-1 lg:col-span-2 flex justify-center items-center">
      <img
        src={highlight}
        alt="Maldives Highlights"
        className="mt-8 rounded-xl shadow-md mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section>
  {/* Itinerary Section */}
      <div className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">Itinerary</h2>
        <div className="mt-6 space-y-6">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-500">{item.day}</h3>
                <ul className="mt-4 space-y-2 text-lg sm:text-xl">
                  <li>{item.details}</li>
                  <li>{item.details1}</li>
                  <li>{item.details2}</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.day}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">Pricing</h2>
        <div className="mt-6 space-y-4">
          {pricingDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg"
            >
              <p className="text-lg sm:text-xl text-gray-700">
                <span className="font-semibold">{item.type}:</span> {item.price}
              </p>
              <Link
                to="/booking"
                state={{ product: item }}
                className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">Add-Ons</h2>
        <ul className="mt-4 space-y-2 text-lg sm:text-xl text-gray-700">
          {addOns.map((item, index) => (
            <li key={index}>
              ✨ {item.title} ({item.price})
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-lg sm:text-xl text-gray-700">
          <li>🌟 Tailored luxury experiences</li>
          <li>🌟 Trusted local partnerships for authentic Maldivian adventures</li>
          <li>🌟 24/7 support during your trip</li>
        </ul>
      </div>
    </div>
  );
};

export default MaldivesPackage;
