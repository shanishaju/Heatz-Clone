import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import video1 from "../assets/video2.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video2.mp4";
import video4 from "../assets/video2.mp4";
import video5 from "../assets/video2.mp4";
import video6 from "../assets/video2.mp4";

function VideoCard() {
  return (
    <div className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Heading & Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h1 className="text-2xl md:text-5xl font-bold">Trending</h1>
        <p className="text-lg md:text-xl">
          Experience the perfect balance of style and innovation with Heatz gadgets and accessories. Bringing you the best of the best!
        </p>
      </div>

      {/* Video Swiper */}
      <div className="w-full mt-10">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 }, 
          }}
        >
          {[video1, video2, video3, video4, video5, video6].map((videoSrc, index) => (
            <SwiperSlide key={index} className="relative group">
              <video
                src={videoSrc}
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                loop
                muted
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoCard;
