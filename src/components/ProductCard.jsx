import React from 'react'

function ProductCard(props) {
    const {image, decription, price} = props;
  return (
    <>
      <div className="bg-white text-black rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 w-full sm:w-72 mx-auto">
              <img
                src={image}
                alt="Product"
                className="w-full h-auto object-cover rounded-md"
              />
              <h3 className="text-sm font-semibold mt-3 px-3">
                {decription}
              </h3>
              <p className="text-gray-400 text-sm font-medium px-2 mt-2">₹{price}</p>
            </div>
      
    </>
  )
}

export default ProductCard
