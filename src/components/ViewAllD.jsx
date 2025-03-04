import React, { useState } from "react";

import image from "../assets/ZS25.3.jpg";
import video from "../assets/video3.mp4";
import ProductCard from "./ProductCard";
import { featured } from "../staticData";

function ViewAllD() {

  return (
    <div className="w-full bg-black px-6 md:px-12 lg:px-30 py-6">
      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
        <div className="flex bg-gray-800 bg-opacity-80 rounded-full">
          <button className="px-6 py-2 text-white font-semibold rounded-full bg-green-400">Featured Items</button>

        </div>

        <button className="text-white font-semibold cursor-pointer md:ml-4 px-4 py-2 rounded-lg">
          View All →
        </button>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {featured.map((featured) => (
          <ProductCard key={featured.image} {...featured} />
        ))}
      </div>


      {/* Image and video  */}
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

export default ViewAllD;
