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
                <li className='hover:text-green-400 cursor-pointer'>Earphones</li>
                <li className='hover:text-green-400 cursor-pointer'>Cables</li>
                <li className='hover:text-green-400 cursor-pointer'>Adapters</li>
                <li className='hover:text-green-400 cursor-pointer'>Power Bank</li>
                <li className='hover:text-green-400 cursor-pointer'>Batteries</li>
                <li className='hover:text-green-400 cursor-pointer'>Car Charger</li>
                <li className='hover:text-green-400 cursor-pointer'>Holders</li>
                <li className='hover:text-green-400 cursor-pointer'>Speakers</li>
                <li className='hover:text-green-400 cursor-pointer'>Smartwatches</li>
              </ul>
            </div>
  
            {/* ComputerAcc*/}
            <div>
              <h3 className="text-white font-semibold mb-3">Com Acc</h3>
              <ul className="space-y-2 text-sm">
                <li className='hover:text-green-400 cursor-pointer'>Earphones</li>
                <li className='hover:text-green-400 cursor-pointer'>Cables</li>
                <li className='hover:text-green-400 cursor-pointer'>Adapters</li>
                <li className='hover:text-green-400 cursor-pointer'>Power Bank</li>
                <li className='hover:text-green-400 cursor-pointer'>Batteries</li>
                <li className='hover:text-green-400 cursor-pointer'>Car Charger</li>
                <li className='hover:text-green-400 cursor-pointer'>Holders</li>
                <li className='hover:text-green-400 cursor-pointer'>Speakers</li>
                <li className='hover:text-green-400 cursor-pointer'>Smartwatches</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Help</h3>
              <ul className="space-y-2 text-sm">
                <li className='hover:text-green-400 cursor-pointer'>Contact Us</li>
                <li className='hover:text-green-400 cursor-pointer'>FAQs</li>
                <li className='hover:text-green-400 cursor-pointer'>Shipping & Returns</li>
                <li className='hover:text-green-400 cursor-pointer'>Payment Methods</li>
                <li className='hover:text-green-400 cursor-pointer'>Track Your Order</li>
                <li className='hover:text-green-400 cursor-pointer'>About Us</li>
                <li className='hover:text-green-400 cursor-pointer'>Delivery Policy</li>
                <li className='hover:text-green-400 cursor-pointer'>Cancellation Policy</li>
                <li className='hover:text-green-400 cursor-pointer'>Return Policy</li>
                <li className='hover:text-green-400 cursor-pointer'>Privacy Policy</li>
                <li className='hover:text-green-400 cursor-pointer'>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CopyrightSection */}
        <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
          Copyright © 2024 Heatz - All rights reserved. | Developed by <span className="text-teal-400">Shani</span>
        </div>
      </footer>
      
    </>
  )
}

export default Footer



  