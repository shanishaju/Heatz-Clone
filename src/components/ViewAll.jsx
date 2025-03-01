import React, { useState } from "react";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";
import image from "../assets/ZG27. 1.JPG";
import video from "../assets/video2.mp4";
import ProductCard from "./ProductCard";
import { audio, featured } from "../staticData";

function ViewAll() {
  const [activeTab, setActiveTab] = useState("Accessories");
  //gettabdata function
  const getTabData = ()=>{
    switch(activeTab){
      case "Audio":
        return audio;
      case "Accessories":
        return featured;
      default:
        return [];
    }
  }


  return (
    <div className="w-full bg-black px-6 md:px-12 lg:px-30 ">
      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-0 md:space-y-0">
        <div className="flex bg-gray-800 bg-opacity-80 rounded-full">

          
          {["Audio", "Accessories"].map((item) => (
            <button
              className={`px-6 py-2 text-white font-semibold rounded-full ${activeTab === item ? "bg-green-400 text-black" : "bg-transparent"
                }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="text-white font-semibold cursor-pointer md:ml-4 px-4 py-2 rounded-lg">
          View All →
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        {/* Card 1 */}

        {getTabData().map((audio) => (
          <ProductCard key={audio.image} {...audio} />
        ))}



        {/* Card 2
        <div className="bg-white text-black rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 w-full sm:w-72 mx-auto">
          <img
            src={product2}
            alt="Product"
            className="w-full h-auto object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-3 px-3">
            ZG28 - Transparent wired headphones with...
          </h3>
          <p className="text-gray-400 text-sm font-medium px-2 mt-2">₹3,499</p>
        </div>

        Card 3
        <div className="bg-white text-black rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 w-full sm:w-72 mx-auto">
          <img
            src={product3}
            alt="Product"
            className="w-full h-auto object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-3 px-3">
            ZG27 - Wired music headphones with adjus...
          </h3>
          <p className="text-gray-400 text-sm font-medium px-2 mt-2">₹1,399</p>
        </div>

        Card 4
        <div className="bg-white text-black rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 w-full sm:w-72 mx-auto">
          <img
            src={product4}
            alt="Product"
            className="w-full h-auto  object-cover rounded-md"
          />
          <h3 className="text-sm font-semibold mt-3 px-3">
            ZG27 - Wired music headphones with adjus...
          </h3>
          <p className="text-gray-400 text-sm font-medium px-2 mt-2">₹1,399</p>
        </div> */}
      </div>



      {/* Image & Video Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 min-h-[90vh] w-full gap-2 bg-black">
        <div className="flex items-center justify-center h-full">
          <img src={image} alt="image1" className="w-full h-165 object-cover" />
        </div>
        <div className="flex items-center justify-center h-165">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
