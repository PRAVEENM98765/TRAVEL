import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    
   
    <footer className="bg-white text-black py-10 px-5 md:px-10 lg:px-20 font-bolt">
       
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">TravelApp</h2>
          <p className="text-black">
          Explore dream destinations effortlessly! From local gems to global adventures, enjoy tailored travel packages, hassle-free planning, and affordable luxury. Start your journey today! 🌍✈️
          </p>
        </div>
 
        <div>
          <h3 className="text-2xl font-bold mb-4">More Detials</h3>
          <ul className="text-black space-y-2">
            <li>
              <a href="/home" className="hover:text-blue-800"> Home </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-800"> About </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-800"> Contact </a>
            </li>
            
          </ul>
        </div>
 
        <div>
          <h3 className="text-2xl font-bold mb-4">Destination</h3>
          <ul className="text-black space-y-2">
            <li>"Discover your perfect getaway with our travel app! Explore state, national, and international destinations with tailored packages, seamless planning, and unforgettable experiences."
            </li>
          </ul>
         
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="text-black space-y-2">
            <li>
            <h2 className="font-semibold">Email : praveenmohan3010@gmail.com </h2>
            </li>
            <li>Phone:
              <a href="">+91 95006 05076</a>
            </li>
            <li>Tell: +04298278160</li>
          </ul>
         
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 ">Follow Us </h2>
          <div className="text-black space-x-4 flex">
          <a href="https://www.instagram.com/yaazhtechsoftware/" className="hover:text-[red]"><FaInstagram size={30} />  </a>
            <a href="https://mail.google.com/mail/" className="hover:text-[orange]"><BiLogoGmail size={30} />  </a>
            <a href="https://www.linkedin.com/in/kannaiyan-s/" className="hover:text-gray-300"><FaLinkedin size={30} />  </a>
            <a href="https://www.facebook.com/yaazhtech" className="hover:text-blue-600"> <FaFacebook  size={30}/>  </a>
            <a href="https://www.youtube.com/channel/UCbaiJ8UPdwZIqJ47l3djq4g" className="hover:text-[red]"><FaYoutube size={30} />  </a>

          </div>
        </div>
 
       
      </div>
 
      <div className="mt-10 border-t border-black pt-5 text-center">
        <p className="text-black">
          &copy; 2024 All rights reserved by YaazhTech.com<br/>
          Privacy PolicyTerms of UseCancellation Policy
        </p>
      </div>
    </footer>
   
  );
};
 
export default Footer;