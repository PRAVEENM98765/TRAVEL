//Carousel.jsx
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "./Assetes/maldives.jpg"
import banner2 from "./Assetes/paris.jpg"
import banner3 from "./Assetes/switz.jpg"
import banner4 from "./Assetes/usa.jpg"
const Banner = () => {
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
      text: "ALL YOUR FASHION",
      text2: "Need At One Place",
    },
    {
      id: 2,
      image: banner2,
      title: "MENS...",
      text: "YOUR FASHION YOUR RULES",
      text2: "Up to 50% Off",
    },
    {
      id: 3,
      image: banner3,
      title: "WOMENS...",
      text: "TRENDY FASHION CLOTHES",
      text2: "Up to 50% Off",
    },
    {
      id: 4,
      image: banner4,
      title: "KIDS...",
      text: "STYLE FOR LITTLE ONES",
      text2: "Up to 50% Off",
    },
  ];
 
  return (
    <div>
      <div className="w-full  mt-8">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-[80vh] object-cover object-top rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end">
                <h1 className="text-6xl font-bold mb-4 text-gray-300 font-serif underline decoration-transparent decoration-2 ">{banner.title}</h1>
                <h1 className="text-6xl font-bold mb-4 text-yellow-600 font-serif">{banner.text}</h1>
                <p className="mb-6 text-5xl font-serif text-gray-200">{banner.text2}</p>
                <div className='mb-5'>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4">
                    Read More
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
 
      </div>
    </div>
  );
};
 
export default Banner;