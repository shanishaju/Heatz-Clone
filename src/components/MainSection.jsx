
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import swiperImg4 from "../assets/swiper4.jpg"
import swiperImg5 from "../assets/swiper5.jpg"


function MainSection() {
    const slides =
        [
            {
                img: swiperImg4,
                title: "Hear every move, win every game.",
                buttonText: "See it in action",
            },
            {
                img: swiperImg5,
                title: "Precision sound for ultimate gaming.",
                buttonText: "Learn more",
            }
        ]

    return (
        <div className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-30">

            <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={3} >
                <Box >
                    <h1 className="text-xl md:text-4xl font-bold leading-tight">
                        Built for gamers, <br /> designed for <br /> victory.
                    </h1>
                </Box>
                <Box>
                    <p className="text-lg md:text-xl leading-tight">
                        Level up your gaming experience with our high-performance gaming headphones, designed to deliver immersive audio and crystal-clear communication.
                    </p>
                </Box>
            </Box>
            {/* swiper */}
            <div className="w-full h-auto mt-20">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3500 }} // Autoplay 
                    // navigation={true}
                    // pagination={{ clickable: true }} 
                    modules={[Autoplay, Navigation, Pagination]}
                    className="w-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img src={slide.img} alt="img" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                    {slide.title}
                                </h2>
                                <button className="mt-4 px-4 sm:px-6 py-1 sm:py-2 border border-white text-white text-xs sm:text-sm md:text-lg lg:text-lg xl:text-lg rounded-full bg-transparent hover:border-green-400 hover:bg-green-400 hover:text-black drop-shadow-lg transition-all duration-300 ease-in-out">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    );
}

export default MainSection;
