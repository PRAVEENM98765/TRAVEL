import React from "react";

import video from './switzerland.mp4'
// //highlight
 import highlightparis from './SWITZERLAND HIGHLIGHT.webp'
// // //day 1 to 6
import switzday1 from './switzday1.jpg'
import switzday2 from './switzday2.jpg'
import switzday3 from './switzday3.jpg'
import switzday4 from './switzday4.jpg'
import switzday5 from './switzday5.jpg'
import switzday6 from './switzday6.jpg'
import { Link } from "react-router-dom";


const switzerland = () => {
  const itinerary = [
    {
      day: "Day 1 ",
      details: ' Arrival at Zurich International Airport.  ',
      details1: ' Private transfer to your luxury hotel in central Zurich.  ',
      details2: ' Explore Bahnhofstrasse, Zurich Old Town, and Lake Zurich.',
      deatials3: 'Welcome dinner featuring authentic Swiss cuisine.',
      image:switzday1,
      
    },
    {
      day: "Day 2: Lucerne & Mount Pilatus Adventure**  ",
      details: ' Day excursion to Lucerne, a city with medieval charm.',
      details1: ' Visit iconic landmarks like Chapel Bridge and the Lion Monument',
      details2: ' Cable car ride to Mount Pilatus for panoramic views and optional hiking.',
      deatials3: ' Return to Zurich for an evening at leisure.',
      image: switzday2,
    },
    {
      day: "Day 3 : Interlaken & Jungfraujoch**",
      details: 'Transfer to Interlaken, located between Lakes Thun and Brienz.  .',
      details1: 'Excursion to Jungfraujoch via Europe’s highest railway: “Top of Europe”..',
      details2: 'Enjoy glaciers, snowfields, and activities like snow sports or the Ice Palace. ',
      deatials3: 'Evening check-in at a luxury hotel or chalet in Interlaken.',
      image:switzday3
      
    },
    {
      day: "Day 4",
      details: 'Explore the car-free village and admire the iconic Matterhorn peak.lles',
      details1: 'Take the Gornergrat Railway for stunning mountain views.Explore hiking trails or relax in the alpine scenery.',
      details2: ' Stay overnight in Zermatt or head to Montreux.',
      deatials3: '  Overnight stay in Zermatt.',
      image:switzday4,
    },
    {
      day: "Day 5: Montreux & Lake Geneva**   ",
      details: ' Transfer to Montreux, a beautiful town on Lake Geneva’s shores. ',
      details1: ' Visit the iconic Chillon Castle. , ',
      details2: 'Special farewell dinner at a Michelin-starred restaurant.',
      deatials3:  ' Evening transfer to Geneva for a luxurious overnight stay.',
      image: switzday5,
    },
    {
      day: "Day 6",
      details: 'Morning city tour of Geneva, visiting Jet d’Eau, St. Pierre Cathedral, and the UN Headquarters.',
      details1: '  Time for shopping (Swiss watches, chocolates, and souvenirs).  ',
      details2: ' Private transfer to Geneva Airport for your departure.',
      deatials3: 'Thanks for traveling with us!',
      image:switzday6,
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

    <div className="p-6 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Header Section */}
      <div className="relative text-gray-800">
        {/* YouTube Background */}
         <video
          className="absolute top-0 left-0 w-full h-[60vh] object-cover rounded-3xl"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        /> 
        {/* Overlay Content */}
        <div className="relative p-44 bg-black bg-opacity-10 text-white ">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-8xl font-bold text-blue-200">Switzerlands Travel Package</h1>
            <p className="text-6xl mt-4">Discover luxury and adventure in paradise.</p>
          </div>
          </div>

          <section className="p-8 bg-gray-200 flex flex-col items-center text-center">
  <h2 className="text-4xl font-semibold mb-4">Highlights</h2>
  <ul className="list-disc pl-5 space-y-2 text-xl text-left">
    <li>Duration: 5 Nights / 6 Days</li>
    <li>Destinations: Zurich, Lucerne, Mount Pilatus, Interlaken, Jungfraujoch, Zermatt, Matterhorn, Montreux, Lake Geneva</li>
    <li>Type: Luxury, Adventure, Honeymoon, Family</li>
  </ul>
   <img
    className="w-[100vh] h-[50vh] mt-5 rounded-3xl shadow-lg"
    src={highlightparis}
    alt="Maldives Highlights"
  /> 
</section>
</div>




      {/* Itinerary Section */}
      <div className="space-y-6 justify-center">
        <h2 className="text-6xl font-bold text-blue-500">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white shadow-md rounded-md p-4 "
          >
            <div className="md:w-2/4  ">
              <h3 className="text-4xl font-semibold text-blue-500">{item.day}</h3>
              <li className="mt-2 text-2xl text-gray-600">{item.details}</li>
              <li className="mt-2 text-2xl text-gray-600">{item.details1}</li>
              <li className="mt-2 text-2xl text-gray-600">{item.details2}</li>
              <li className="mt-2 text-2xl text-gray-600">{item.deatials3}</li>
            </div>
            <div className="md:w-2/4  ">
           
                 <img
                  src={item.image}

                  alt={`${item.day}`}
                  className="rounded-md object-cover w-full h-[40vh] "
                />  
            </div> 
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Pricing</h2>
        <div className="mt-4 space-y-4">
          {pricingDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-md"
            >
              <p className="text-gray-600">
                <span className="font-semibold">{item.type}:</span> {item.price}
              </p>
              <Link to='/booking'
             state={{
              product:item,
             }}>
             <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book Now
              </button>
             </Link>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          * Prices may vary based on travel dates and customization requests.
        </p>
      </div>

      {/* Add-Ons Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Add-Ons</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          {addOns.map((item, index) => (
            <li key={index}>✨ {item.title} ({item.price})</li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-500">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>🌟 Tailored luxury experiences</li>
          <li>🌟 Trusted local partnerships for authentic Maldivian adventures</li>
          <li>🌟 24/7 support during your trip</li>
        </ul>
      </div>
    </div>
  );
};

export default switzerland;
