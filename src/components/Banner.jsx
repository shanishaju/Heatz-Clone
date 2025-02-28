import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import swiperImg1 from "../assets/acces.png"
import swiperImg2 from "../assets/headset.png"
import swiperImg3 from "../assets/watch.png"



function Banner() {
    return (
        <>
            <section className=" w-full h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <iframe
                        title="Background"
                        src="https://player.vimeo.com/video/1055106914?background=1&muted=1&loop=1"
                        className="absolute top-1/2 left-1/2 w-[1920px] h-[1080px] -translate-x-1/2 -translate-y-1/2 scale-150 md:scale-100"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[rgba(49,49,49,0.8)] px-6 py-2 rounded-full text-black text-lg font-bold shadow-md">
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 2000 }} // Autoplay 
                        modules={[Autoplay]}
                        className="w-[200px] md:w-[500px]"
                    >
                        <SwiperSlide>
                            <img src={swiperImg1} alt="Image 1" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg2} alt="Image 2" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg3} alt="Image 3" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg2} alt="Image 4" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg2} alt="Image 2" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg3} alt="Image 3" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swiperImg2} alt="Image 4" className="w-[70px] h-[70px] rounded-full object-cover" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
        </>
    );
}

export default Banner;
