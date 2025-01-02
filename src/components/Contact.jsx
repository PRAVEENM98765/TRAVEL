// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gray-100">
//       <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
//       <p className="text-center text-gray-600 mb-8">
//         We’d love to hear from you! Fill out the form below or reach us at our email.</p>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//             ></textarea>
//           </div>
//           <div className="mt-6">
//             <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-500 transition duration-200">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className="mt-10 text-center">
//         <h2 className="text-2xl font-bold">Contact Information</h2>
//         <p className="text-gray-600">Email: Travel_@gmail.com</p>
//         <p className="text-gray-600">Phone: (950) 060-0576</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center p-5 gap-5 bg-gradient-to-b from-white to-blue-200">
      {/* Left Section (Map and Store Information) */}
      <div className="lg:w-1/2 w-full flex flex-col items-center mb-8 lg:mb-0">
        <div className="w-full h-80 md:h-80 lg:w-[475px] lg:h-[450px] xl:w-[900px] xl:h-[450px] object-cover">
          <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.804777575517!2d78.14269516133062!3d11.591146787968663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef06ff916357%3A0x6581fffd62d10d62!2sGajjalnaickenpatti%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733296525013!5m2!1sen!2sin"         
            height="100%"
            width='100%'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-blue-300 text-white w-full shadow-lg p-5 mt-4 lg:mt-0">
          <h3 className="text-xl font-semibold mb-3 text-center">Location </h3>
          <p className="text-center">1/23, Red street ,salem-636201.</p>
          <p className="text-center mt-2">
            Call Us:{" "}
            <a href="tel:+919500605076" className="text-black">
            +91 95006 05076
            </a>
          </p>
          <p className="text-center mt-2">
            Email:{" "}
            <a href="mailto:praveenmohan3010@gmail.com" className="text-black">
              praveenmohan3010@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="lg:w-1/2 w-full px-4 md:px-8">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold bg-aqua p-2 rounded-lg">
            Contact Us
          </h1>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch with Us</h2>
          <p className="text-center text-gray-600 mb-6">
            Have questions or inquiries about our exclusive menswear collections? Let us know!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-400 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
