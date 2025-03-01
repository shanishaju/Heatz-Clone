import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import swiperImg4 from "../assets/HW2.jpg"
import swiperImg5 from "../assets/HW5.jpg"

function MainSectionD() {
    return (
        <>
        <div className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-30">

                <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={3} >
                    <Box >
                        <h1 className="text-xl md:text-4xl font-bold leading-tight">
                            Moving with you,<br /> through life.                        </h1>
                    </Box>
                    <Box>
                        <p className="text-lg md:text-xl  leading-tight">
                            Designed to move with you through every moment, offering advanced features that fit perfectly into life. Enjoy efficiency and stay stylish!                        </p>
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
                        <SwiperSlide className="relative">
                            <img src={swiperImg4} alt="Image 1" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                <h1 className="text-sm font-extralight sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                Intelligence right on your <br /> wrist!                                </h1>
                                <button className="mt-4 px-4 sm:px-6 py-1 sm:py-2  border border-white text-white text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg  rounded-full bg-transparent hover:border-0 hover:bg-green-400 hover:text-black drop-shadow-lg transition-all duration-300 ease-in-out">
                                    Get Yours Now
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src={swiperImg5} alt="Image 2" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                                <h1 className="text-sm font-extralight sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ">
                                Smart. Stylish. Connected.                                </h1>
                                <button className="mt-4 px-4 sm:px-6 py-1 sm:py-2 border border-white text-white text-xs sm:text-sm md:text-lg lg:text-lg xl:text-lg rounded-full bg-transparent hover:border-0 hover:bg-green-400 hover:text-black drop-shadow-lg transition-all duration-300 ease-in-out">
                                    Discover More
                                </button>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>



            </div>

        </>
    )
}

export default MainSectionD
