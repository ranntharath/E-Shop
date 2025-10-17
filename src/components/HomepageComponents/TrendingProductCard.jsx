import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrendingProductCard = ({ id, image, name, description, rate, price }) => {
  return (
    <Link to={`/products/${id}`}>
    <div className="flex gap-5 border border-gray-200 hover:scale-[1.005] transition-all duration-300 ease-out rounded-2xl p-2 shadow-sm hover:shadow-md ">
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
        <p className=" text-gray-700 font-semibold line-clamp-1">
          {name ?? "Product Name"}
        </p>
        <p  className="block  text-gray-500 line-clamp-2">
          {description ?? "Description about the product"}
        </p>

        <p className=" font-bold text-primary-color">{`$${price ?? "00.00"}`}</p>
      </div>
    </div>
    </Link>
  );
};

export default TrendingProductCard;
