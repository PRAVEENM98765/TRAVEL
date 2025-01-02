import React from 'react';
 
const BookNow = () => {
  return (
<div className="min-h-screen bg-gray-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Search Section */}
<div className="bg-white p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4">Search Flights</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-gray-700 font-medium mb-2">From</label>
<input type="text" placeholder="from" className="w-full border-gray-300 rounded-lg p-2" />
</div>
<div>
<label className="block text-gray-700 font-medium mb-2">To</label>
<input type="text" placeholder="to" className="w-full border-gray-300 rounded-lg p-2" />
</div>
<div>
<label className="block text-gray-700 font-medium mb-2">Depart</label>
<input type="date" className="w-full border-gray-300 rounded-lg p-2" />
</div>
<div>
<label className="block text-gray-700 font-medium mb-2">Passenger</label>
<input type="number" min="1" value="1" className="w-full border-gray-300 rounded-lg p-2" />
</div>
</div>
<button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Search
</button>
</div>
 
        {/* Flight List */}
<div className="bg-white p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4">Available Flights</h2>
<div className="grid grid-cols-1 gap-4">
            {/* Flight Card */}
<div className="bg-white p-4 rounded-lg shadow-md">
<div className="flex justify-between items-center">
<div>
<p className="text-gray-700 font-medium">10:20</p>
<p className="text-gray-500">Dhaka (DAC)</p>
</div>
<p className="text-gray-500">8h 20min</p>
<div>
<p className="text-gray-700 font-medium">10:20</p>
<p className="text-gray-500">Paris (CDG)</p>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<p className="text-green-500 font-bold">$876.90</p>
<button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
                  Book Now
</button>
</div>
</div>
</div>
</div>
 
        {/* Flight Details */}
<div className="bg-white p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4">Flight Details</h2>
<div className="border rounded-lg p-4">
<p className="text-gray-700 font-medium">Economy Lite</p>
<p className="text-gray-500">From $817</p>
<div className="mt-2">
<p className="text-gray-700 font-medium">Dhaka (DAC) - Paris (CDG)</p>
<p className="text-gray-500">7 hours 5 minutes</p>
</div>
<button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Select Flight
</button>
</div>
</div>
</div>
</div>
  );
};
 
export default BookNow;




// // Import React and useState hook
// import React, { useState } from 'react';

// // Book Now Component
// const BookNow = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     package: '5 Days',
//     from: '',
//     to: '',
//     people: 1,
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Booking Details:', formData);
//     alert('Your booking request has been submitted!');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Book Your Travel Package</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Package Selection */}
//           <div>
//             <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
//               Package
//             </label>
//             <select
//               name="package"
//               id="package"
//               value={formData.package}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
//             >
//               <option value="5 Days">5 Days</option>
//               <option value="6 Days">6 Days</option>
//             </select>
//           </div>

//           {/* From Location */}
//           <div>
//             <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
//               From
//             </label>
//             <input
//               type="text"
//               name="from"
//               id="from"
//               value={formData.from}
//               onChange={handleChange}
//               placeholder="Enter departure location"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
//               required
//             />
//           </div>

//           {/* To Location */}
//           <div>
//             <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
//               To
//             </label>
//             <input
//               type="text"
//               name="to"
//               id="to"
//               value={formData.to}
//               onChange={handleChange}
//               placeholder="Enter destination"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
//               required
//             />
//           </div>

//           {/* Number of People */}
//           <div>
//             <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">
//               Number of People
//             </label>
//             <input
//               type="number"
//               name="people"
//               id="people"
//               value={formData.people}
//               onChange={handleChange}
//               min="1"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
//             >
//               Book Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookNow;
