import React, { useEffect, useState } from "react";
import QuantityBtn from "../globals/QuantityBtn";
import { useRemoveProductCartMutation, useUpdateCartMutation } from "../../redux/services/cartSlice";

function Cart({ id, image, name, description, price, qty }) {
  const [quantity, setQuantity] = useState(qty || 1);
  const [updateCart, { isUpdate }] = useUpdateCartMutation();
  const [removeCart, {isLoading:isRemove}] = useRemoveProductCartMutation()
  useEffect(() => {
    const handler = setTimeout(() => {
      if (quantity !== qty) {
        updateCart({ productId: id, quantity }).unwrap().catch(console.error);
      }
    }, 300); 

    return () => clearTimeout(handler); 
  }, [quantity]);
  
  const handleRemoveItem = async ()=>{

    if(!id){
      alert("invalited ID");
      return
    }
    try{
          const response = await removeCart(id).unwrap()
    
    }catch(error){
      alert(error.data.error)
    }

    
  }

  return (
    <div className="flex gap-5 border border-gray-200 transition-all duration-300 ease-out rounded-2xl p-4 shadow-sm hover:shadow-md relative">
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
    <p className="block text-gray-500 line-clamp-2">
      {description ?? "Description about the product"}
    </p>

    <p className="text-gray-950">{`$${price ?? "00.00"}`}/piece</p>


    <div className="mt-2 flex items-center justify-between">
      <QuantityBtn quantity={quantity} setQuantity={setQuantity} />


      <button
      disabled={isRemove}
      onClick={handleRemoveItem}
        className="text-red-500 text-sm font-medium hover:underline"
      >
        Remove X
      </button>
    </div>
  </div>
</div>

  );
}

export default Cart;
