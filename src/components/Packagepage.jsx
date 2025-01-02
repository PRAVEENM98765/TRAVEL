import React from "react";

const PackagePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Thanjavur IT Tour</h1>
          <p className="text-gray-600 mt-2">
            Experience the cultural richness and heritage of Thanjavur while exploring modern IT developments in the region. This package offers an immersive experience that combines tradition with technology.
          </p>
        </div>
      </div>

      {/* Pricing and Ratings */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-4 flex justify-between p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Price</h2>
          <p className="text-xl font-bold text-green-500">₹5,000</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Ratings</h2>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <span key={i}>&#9733;</span> // Filled stars
              ))}
              <span className="text-gray-300">&#9733;</span> {/* Empty star */}
            </div>
            <span className="text-gray-600 ml-2">(4.0)</span>
          </div>
        </div>
      </div>

      {/* Scrollable Details */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-4 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
        <div className="h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <p className="text-gray-600 mb-4">
            Thanjavur, also known as the 'Rice Bowl of Tamil Nadu,' is renowned for its rich cultural heritage and historic landmarks. It is home to the famous Brihadeeswarar Temple, a UNESCO World Heritage Site.
          </p>
          <p className="text-gray-600 mb-4">
            This package includes a guided tour of the city's IT parks and emerging tech hubs, giving visitors a glimpse of Thanjavur's modernization efforts.
          </p>
          <p className="text-gray-600">
            Whether you are interested in history, technology, or just exploring a beautiful city, this package has something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagePage;