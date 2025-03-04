import React, { useState } from "react";
import image from "../assets/ZG27.1.jpg";
import video from "../assets/video2.mp4";
import ProductCard from "./ProductCard";
import { audio, featured } from "../staticData";

function ViewAll() {
  const [activeTab, setActiveTab] = useState("Accessories");

  const getTabData = () => {
    switch (activeTab) {
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

        <button className="text-white font-semibold cursor-pointer md:ml-4 px-4 py-2 rounded-lg mt-2 sm:mt-0">
          View All →
        </button>
      </div>


      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {getTabData().map((audio) => (
          <ProductCard key={audio.image} {...audio} />
        ))}
      </div>


      {/* Image and video*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 min-h-[90vh] w-full gap-2 bg-black">
        <div className="flex items-center justify-center h-full">
          <img
            src={image}
            alt="image1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          ></video>
        </div>
      </div>

    </div>
  );
}

export default ViewAll;