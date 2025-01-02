import React from "react";
import travelVideo from "./video/travel video.mp4";
import { Link } from "react-router-dom";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "./Assetes/maldives.jpg"
import banner2 from "./Assetes/paris.jpg"
import banner3 from "./Assetes/switz.jpg"
import banner4 from "./Assetes/usa.jpg"

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
 
  const banners = [
    {
      id: 1,
      image: banner1,
      text: "MALDIVES",
      navigate:"/maldives"
    },
    {
      id: 2,
      image: banner2,
      text: "PARIS",
      navigate:"/paris"
    },
    {
      id: 3,
      image: banner3,
      text: "SWITZERLAND",
      navigate:"/switz"
      
    },
    {
      id: 4,
      image: banner4,
      text: "U.S.A",
      navigate:"/usa"
    },
  ];
  return (
   <div>
     <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={travelVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay and Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4  font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ready To Explore Your Dream Destination
        </h1>
        <p className="mb-6 text-lg md:text-2xl lg:text-3xl font-serif   bg-gradient-to-r from-red-400 via-blue-500  to-pink-400 bg-clip-text text-transparent">
          Pack Your Bags and Start Your Journey Today! Because the world is too
          beautiful to stay in one place. 🌟
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <section id="destinations" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Paris", "Maldives", "Tokyo"].map((destination) => (
              <div
                key={destination}
                className="bg-white shadow-lg rounded overflow-hidden"
              >
                <img
                  src={`https://example.com/${destination.toLowerCase()}-image.jpg`}
                  alt={destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{destination}</h3>
                  <p className="text-gray-600">
                    Discover the charm of {destination} with our tailored
                    packages.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-black pt-5 text-center">
        </div>
      </section>
     
    </div>
    <div className="container mx-auto px-6 py-12 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
    Explore the World with Us!!
  </h1>
  <p className="text-xl font-medium text-center text-gray-700 leading-relaxed">
    Discover the joy of travel with our innovative app designed to make your adventures stress-free and <br className="hidden md:inline" />
    unforgettable. Whether you're planning a solo getaway, a family vacation, or a romantic escape, our <br className="hidden md:inline" />
    app offers personalized recommendations, seamless bookings, and real-time travel updates to <br className="hidden md:inline" />
    ensure your journey is as smooth as possible.
  </p>
  <p className="text-xl font-medium text-center text-gray-700 leading-relaxed mt-6">
    From uncovering hidden gems to connecting with local experiences, we help you go beyond the <br className="hidden md:inline" />
    ordinary. Track your itinerary, manage expenses, and share your journey with friends, all in one place. <br className="hidden md:inline" />
    Adventure awaits—let us take you there!
  </p>
  <div className="flex justify-center mt-8">
    <button className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
      Start Your Journey
    </button>
  </div>
</div>



     {/* Carousel */}
<div className="container mx-auto mt-8 px-4">
  <Slider {...settings}>
    {banners.map((banner) => (
      <div key={banner.id} className="relative">
        {/* Image */}
        <img
          src={banner.image}
          alt={`Banner ${banner.id}`}
          className="w-full h-[80vh] object-cover object-center rounded-lg shadow-lg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-8">
          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif text-center mb-6 drop-shadow-lg">
            {banner.text}
          </h1>
          {/* Button */}
          <div>
            <a href={banner.navigate}>
              <button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-xl transform transition-transform duration-300 hover:scale-105">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

    
      {/* Steps Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Get Matched to Top Travel Specialists</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Describe your dream trip</h3>
              <p className="text-gray-600">Tell us about your perfect vacation.</p>
            </div>
            {/* Step 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Get matched</h3>
              <p className="text-gray-600">Our team connects you with travel specialists.</p>
            </div>
            {/* Step 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-orange-500 text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Book your vacation</h3>
              <p className="text-gray-600">Get your itinerary customized and booked.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-black pt-5 text-center">
        </div>
        
      </section>

   </div>
  );
};

export default Home;
