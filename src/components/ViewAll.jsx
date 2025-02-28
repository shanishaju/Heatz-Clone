import React, { useState } from "react";

function ViewAll() {
  const [activeTab, setActiveTab] = useState("Accessories");

  return (
    <div className="w-full bg-black px-6 md:px-30 py-6">
      {/* Tabs */}
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex bg-gray-800 bg-opacity-80 rounded-full">
          {["Audio", "Accessories"].map((item) => (
            <button
              key={item}
              className={`px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 ${
                activeTab === item ? "bg-green-400 text-black" : "bg-transparent"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="text-white font-semibold cursor-pointer mt-4 md:mt-0">
          View All →
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 h-120">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-80 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-3">Product 1</h3>
          <p className="text-green-400 text-lg font-medium">₹2000</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black r rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 h-120">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-80 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-3">Product 2</h3>
          <p className="text-green-400 text-lg font-medium">₹2500</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black r rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 h-120">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-80 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-3">Product 3</h3>
          <p className="text-green-400 text-lg font-medium">₹1800</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-black r rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 h-120">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-80 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-3">Product 4</h3>
          <p className="text-green-400 text-lg font-medium">₹2200</p>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
