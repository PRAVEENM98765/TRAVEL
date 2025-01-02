import React from 'react';
import bg from './Assetes/P 2.png';
import aboutimg from './Assetes/about.avif'
import group from './Assetes/group.jpg'
const About = () => {

  
  return (
    <div className=" mx-auto  bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center bg-white w-full h-auto md:h-64">
        
        <div className="basis-full md:basis-1/2 text-center md:text-left px-4">
          <h1 className="mt-6 text-2xl md:text-4xl font-semibold text-black">
            About Us
          </h1>
          <p className="text-base md:text-lg mt-4 text-black">
          "Discover the world like never before with Travel App! Plan, book,<br/>And explore with ease—your ultimate travel companion for creating unforgettable experiences."

          </p>
        </div>

       
        <div className="mt-6 md:mt-0 flex justify-center items-center">
          <img
            className="rounded-3xl h-40 md:h-60 w-auto"
            src={bg}
            alt="About Us"
          />
        </div>
      </div>
      <section class="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16">
  <div class="container mx-auto px-6 lg:px-20">
    <div class="text-center">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-6">
        Welcome to Your Ultimate Travel Companion
      </h2>
      <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        At <span class="text-blue-500 font-semibold">[Travel App]</span>, we believe every journey should be seamless, exciting, and stress-free. 
        Whether you're booking a flight, planning an itinerary, or seeking travel inspiration, we've got you covered.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Feature 1 --> */}
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-3">Personalized Itineraries</h3>
        <p class="text-gray-600">
          Get recommendations tailored to your dream destinations and unique preferences.
        </p>
      </div>
      {/* <!-- Feature 2 --> */}
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-3">Easy Booking</h3>
        <p class="text-gray-600">
          Book flights, hotels, and activities effortlessly—all in just a few clicks.
        </p>
      </div>
      {/* <!-- Feature 3 --> */}
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-3">24/7 Real-Time Assistance</h3>
        <p class="text-gray-600">
          Enjoy peace of mind with support that's always available, wherever you are.
        </p>
      </div>
      {/* <!-- Feature 4 --> */}
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-3">Local Insights</h3>
        <p class="text-gray-600">
          Explore must-visit spots and connect with authentic local experiences.
        </p>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* <!-- Image --> */}
      <div>
        <img
        src={group}
          alt="Travel Experience"
          class="rounded-lg shadow-lg "
        />
      </div>
      {/* <!-- Additional Features --> */}
      <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Features You’ll Love</h3>
        <ul class="space-y-4 text-lg text-gray-600">
          <li>
            🌟 <span class="font-semibold">Customized Trips:</span> Select your destination, activities, and preferences—we’ll do the rest.
          </li>
          <li>
            🌟 <span class="font-semibold">Real-Time Updates:</span> Stay informed with instant alerts on bookings, itineraries, and exclusive deals.
          </li>
          <li>
            🌟 <span class="font-semibold">24/7 Support:</span> Your travel, our responsibility—count on us for seamless assistance.
          </li>
          <li>
            🌟 <span class="font-semibold">Dream Gallery:</span> Discover curated ideas and must-visit spots for inspiration.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

   

    

    </div>
  );
};

export default About;
