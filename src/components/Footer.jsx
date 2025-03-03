import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-black text-gray-300 py-10 px-15">
                {/* MainDiv */}
                <div className=" mx-auto flex flex-col md:flex-row justify-between ">
                    {/* DescriptionDiv */}
                    <div className="md:w-1/2">
                        <h2 className="text-green-400 text-3xl font-bold">HEATZ</h2>
                        <p className="mt-4 text-sm">
                            Heatz® is a registered brand of Ashtelgroup. It is registered in different countries including Saudi Arabia and UAE, especially in the Middle East. Heatz® is well known for its variety and quality of products launched in every season.
                        </p>
                        {/* Form */}
                        <div className="mt-6 flex items-center border-b border-gray-400 pb-2 w-full">
                            <input type="email" placeholder="Enter your email" className="bg-transparent w-full outline-none text-white" />
                            <button className="text-green-400 text-xl hover:cursor-pointer">&#10148;</button>
                        </div>
                        <div className="mt-3 flex items-center text-sm">
                            <input type="checkbox" id="privacy" className="mr-2" />
                            <label htmlFor="privacy">
                                I confirm acceptance of the Privacy Policy and consent to its terms, including the use of cookies.
                            </label>
                        </div>
                    </div>

                    {/* LinksSection */}
                    <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16 mt-10 md:mt-0">
                        {/* MobileAcc*/}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Mob Acc</h3>
                            <ul className="space-y-2 text-sm ">
                                {['Earphones', 'Cables', 'Adapters', 'Power Bank', 'Batteries', 'Car Charger', 'Holders', 'Speakers', 'Smartwatches'].map((item) => (
                                    <li key={item} className='hover:text-green-400 cursor-pointer'>{item} </li>
                                ))}
                            </ul>
                        </div>

                        {/* ComputerAcc*/}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Com Acc</h3>
                            <ul className="space-y-2 text-sm">
                                {['Mouse', 'Keyboard', 'Headphones', 'Webcam', 'Cooling Pad', 'USB Hub', 'Laptop Stand', 'Laptop Bag', 'Router'].map((item) => (
                                    <li className='hover:text-green-400 cursor-pointer' key={item}>{item}</li>

                                ))}

                            </ul>
                        </div>

                        {/* Help Section */}
                        <div>

                            <h3 className="text-white font-semibold mb-3">Help</h3>
                            <ul className="space-y-2 text-sm">
                                {['Contact Us', 'FAQs', 'Shipping & Returns', 'Payment Methods', 'Track Your Order', 'About Us', 'Delivery Policy', 'Cancellation Policy', 'Return Policy', 'Privacy Policy', 'Terms and Conditions'].map((item) => (
                                    <li className='hover:text-green-400 cursor-pointer' key={item}>{item}</li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                {/* CopyrightSection */}
                <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
                    Copyright © 2024 Heatz-Clone - All rights reserved. | Developed by <span className="text-teal-400">Shani</span>
                </div>
            </footer>

        </>
    )
}

export default Footer



