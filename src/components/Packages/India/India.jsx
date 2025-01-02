import React from "react";
import { Link } from "react-router-dom";

// Sample image imports (replace with actual paths)
// import rajasthanImage from './Assets/rajasthan.jpg';
// import goaImage from './Assets/goa.jpg';
// import keralaImage from './Assets/kerala.jpg';
// import himalayasImage from './Assets/himalayas.jpg';
// import andamanImage from './Assets/andaman.jpg';
// import triangleImage from './Assets/triangle.jpg';

 const India = () => {
  const tourPackages = [
    {
      title: "Royal Rajasthan Tour",
      duration: "7 Days / 6 Nights",
      destinations: "Jaipur, Udaipur, Jodhpur, Jaisalmer",
      highlights: [
        "Explore the iconic Amber Fort and Hawa Mahal in Jaipur.",
        "Enjoy a boat ride on Lake Pichola in Udaipur.",
        "Witness the grandeur of Mehrangarh Fort in Jodhpur.",
        "Camel safari and overnight camping in the Thar Desert.",
      ],
      //image: rajasthanImage,
      type: "Luxury, Standard, Budget",
    },
    {
      title: "Goa Beach Escape",
      duration: "4 Days / 3 Nights",
      destinations: "North Goa, South Goa",
      highlights: [
        "Relax at the beaches of Baga, Calangute, and Palolem.",
        "Visit the historic churches of Old Goa (UNESCO World Heritage Site).",
        "Indulge in water sports like parasailing and jet skiing.",
        "Savor Goan cuisine with seafood delicacies.",
      ],
     // image: goaImage,
    },
    {
      title: "Serene Kerala Backwaters",
      duration: "5 Days / 4 Nights",
      destinations: "Munnar, Alleppey, Thekkady",
      highlights: [
        "Tea plantation tours and waterfalls in Munnar.",
        "Stay on a traditional houseboat in Alleppey.",
        "Wildlife safari at Periyar National Park in Thekkady.",
      ],
     // image: keralaImage,
    },
    {
      title: "Mystical Himalayas Adventure",
      duration: "8 Days / 7 Nights",
      destinations: "Shimla, Manali, Dharamshala, Dalhousie",
      highlights: [
        "Snow activities at Solang Valley in Manali.",
        "Trekking trails in McLeod Ganj, Dharamshala.",
        "Colonial charm and Mall Road shopping in Shimla.",
        "Relax by the Khajjiar Lake in Dalhousie, also called 'Mini Switzerland.'",
      ],
    //  image: himalayasImage,
    },
    {
      title: "Andaman & Nicobar Islands",
      duration: "6 Days / 5 Nights",
      destinations: "Port Blair, Havelock Island, Neil Island",
      highlights: [
        "Relax on Radhanagar Beach, one of Asia’s best beaches.",
        "Snorkeling and scuba diving to explore coral reefs.",
        "Visit Cellular Jail and attend the light & sound show.",
      ],
      //image: andamanImage,
    },
    {
      title: "Golden Triangle Tour",
      duration: "6 Days / 5 Nights",
      destinations: "Delhi, Agra, Jaipur",
      highlights: [
        "Explore the Red Fort and Qutub Minar in Delhi.",
        "Witness the Taj Mahal, a symbol of love, in Agra.",
        "Visit the Pink City of Jaipur and its iconic forts.",
      ],
     // image: triangleImage,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
        Tour Packages in India
      </h1>

      <div className="space-y-8">
        {tourPackages.map((packageItem, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 gap-6"
          >
            <div className="md:w-1/2">
              <img
                src={packageItem.image}
                alt={packageItem.title}
                className="rounded-md w-full h-60 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-500">
                {packageItem.title}
              </h2>
              <p className="text-gray-600 mt-2">
                <strong>Duration:</strong> {packageItem.duration}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Destinations:</strong> {packageItem.destinations}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Package Type:</strong> {packageItem.type}
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                {packageItem.highlights.map((highlight, i) => (
                  <li key={i}>✨ {highlight}</li>
                ))}
              </ul>
              <Link to="/booking">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default India;
