import React from "react";
import swiperImg1 from "../assets/acces.png";
import swiperImg2 from "../assets/headset.png";
import swiperImg3 from "../assets/watch.png";

const images = [
    { src: swiperImg1, name: "Accessories" },
    { src: swiperImg2, name: "Headset" },
    { src: swiperImg3, name: "Watch" },
];

function Banner() {
    return (
        <section className="w-full h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <iframe
                    title="Background"
                    src="https://player.vimeo.com/video/1055106914?background=1&muted=1&loop=1"
                    className="absolute top-1/2 left-1/2 w-[1920px] h-[1080px] -translate-x-1/2 -translate-y-1/2 scale-150 md:scale-100"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Image Section */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[rgba(49,49,49,0.8)] px-6 py-1 rounded-full text-black text-lg  shadow-md">
                <div className="flex space-x-6">
                    {images.map((item, index) => (
                        <div key={index} className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-10 ">
                            {/* Image */}
                            <img
                                src={item.src}
                                alt={item.name}
                                className="w-[60px] h-[60px] rounded-full object-cover "
                            />
                            {/* visible only on hover*/}
                            <p className=" text-green-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Banner;
