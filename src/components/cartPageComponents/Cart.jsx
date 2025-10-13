import React, { useEffect, useState } from "react";
import QuantityBtn from "../globals/QuantityBtn";
import { useUpdateCartMutation } from "../../redux/services/cartSlice";

function Cart({ id, image, name, description, price, qty }) {
  const [quantity, setQuantity] = useState(qty || 1);
  console.log(qty);
  const [updateCart, { isUpdate }] = useUpdateCartMutation();

  async function updateQty(newQty) {
    setQuantity(newQty);

    try {
      await updateCart({ productId: id, quantity: newQty }).unwrap();
    } catch (err) {
      console.error("Failed to update cart", err);
    }
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      if (quantity !== qty) {
        updateCart({ productId: id, quantity }).unwrap().catch(console.error);
      }
    }, 500); 

    return () => clearTimeout(handler); 
  }, [quantity]);
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
        <p className="block  text-gray-500 line-clamp-2">
          {description ?? "Description about the product"}
        </p>

        <p className="text-gray-950">{`$${
          price  ?? "00.00"
        }`}/piece</p>
      </div>
      <div className="text-center">
        <QuantityBtn quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default Cart;
