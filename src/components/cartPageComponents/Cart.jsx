import React, { useState } from 'react'
import QuantityBtn from '../globals/QuantityBtn'

function Cart({id,image,name,description,price}) {
  const [quantity, setQuantity] = useState(1);
  return (
        <div className="flex gap-5 border border-gray-200  transition-all duration-300 ease-out rounded-2xl p-4 shadow-sm hover:shadow-md ">
      {/* Product Image */}
      <div className="w-1/3 flex justify-center items-center">
        <img
          className="w-full h-28 object-contain rounded-xl"
          src={
            image ??
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt={name ?? "product"}
        />
      </div>

      {/* Product Info */}
      <div className="w-2/3 space-y-1">
        <p className="text-sm text-gray-800 font-medium line-clamp-1">
          {name ?? "Product Name"}
        </p>
        <p  className="block  text-gray-500 line-clamp-2">
          {description ?? "Description about the product"}
        </p>

        <p className=" font-bold text-primary-color">{`$${price ?? "00.00"}`}</p>
      </div>
      <div>
        <QuantityBtn quantity={quantity} setQuantity={setQuantity}/>
      </div>
    </div>
  )
}

export default Cart