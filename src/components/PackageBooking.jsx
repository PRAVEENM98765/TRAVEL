import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BookingPage = () => {
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(0);

  const location = useLocation();
  const { product } = location.state || { product: { price: '0', type: '', image: '' } };

  const calculateTotal = () => {
    setTotal(parseInt(product.price.replace(/[^0-9]/g, ''), 10) * count + shipping);
  };

  useEffect(() => {
    calculateTotal();
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-orange-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Book Now</h1>
      </div>

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
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Search</button>
        </div>

        {/* Flight List */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Available Flights</h2>
          <div className="grid grid-cols-1 gap-4">
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
                <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">Book Now</button>
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
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Select Flight</button>
          </div>
        </div>
      </div>

      {/* Package Booking Section */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row items-center">
        
          <div className="w-full lg:w-2/3 lg:pl-10">
            <h2 className="text-2xl font-bold text-gray-800">{product.type}</h2>
            <h3 className="text-xl font-bold text-orange-600 mt-4">{product.price}</h3>

            <div className="mt-6">
              <label className="block text-gray-600 font-medium">Size</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="" disabled>Select Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                
              </select>
            </div>

            <div className="mt-6 flex items-center">
              <label className="block text-gray-600 font-medium mr-4">People :</label>
         
              <input
                type="number"
                value={count}
                min=""
                className="w-16 text-center border-t border-b border-gray-300"
                onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}/>
          
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Address</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 font-medium">Address</label>
              <textarea
                placeholder="Enter your address"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Booking  deatials</h2>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800 font-bold">&#8377; {parseInt(product.price.replace(/[^0-9]/g, ''), 10) * count}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Booking Fees</p>
            <p className="text-gray-800 font-bold">&#8377; 1000</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-gray-800 font-bold">Total:</p>
            <p className="text-orange-600 font-bold text-xl">&#8377; {total}</p>
          </div>
        </div>

        <div className="text-center mt-10">
          < Link to='/success'>
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700"
          >
            Confirm Package
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;




