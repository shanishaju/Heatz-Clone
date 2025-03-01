import React from 'react'
import { FaShoppingBag, FaUser, FaSearch } from "react-icons/fa";
import heatzicon from "../assets/logo_nav.png";

function Nav() {
    return (
        <>
            <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md bg-[rgba(49,49,49,0.8)] flex items-center justify-between z-[41] w-full max-w-7xl">
                <div className="w-10">
                    <img src={heatzicon} alt="icon" className="w-full h-auto" />
                </div>

                <ul className="hidden md:flex space-x-10 text-green-400 text-lg font-light">
                    {['Audio', 'Wearables', 'Accessories', 'Contact Us'].map((item) => (
                        <li className="hover:text-white cursor-pointer transition">{item}</li>
                    ))}

                </ul>

                <div className="flex space-x-8 text-green-400 text-xl">
                    <FaShoppingBag className="cursor-pointer hover:text-white transition" />
                    <FaUser className="cursor-pointer hover:text-white transition" />
                    <FaSearch className="cursor-pointer hover:text-white transition" />
                </div>
            </nav>
        </>
    );
}

export default Nav;
