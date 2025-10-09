 import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = ({ id, image, name, description, rate, price }) => {
    
  return (
    <>
      <div className="h-full  border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-color transition rounded-2xl">
        <div>
          <img
            className="w-full h-36 object-contain rounded-t-2xl"
            src={
              image ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt=""
          />
        </div>
        <div className="p-3">
          
            <p className="tracking-[7px] text-descipton-color line-clamp-1">
              {name ?? "Name"}
            </p>

            <p className="line-clamp-2 text-xs my-2 hover:text-primary-color hover:underline">
              {description ?? "description about product"}
            </p>

          {/* <div className="flex justify-start items-center text-xs">
            <FaStar className="text-amber-400 " />
            <FaStar className="text-amber-400 " />
            <FaStar className="text-amber-400 " />
            <FaStar className="text-amber-400 " />
            <FaStar className="text-amber-400 " />
            <span className="ml-2 mt-0.5">{rate ?? "5"}</span>
          </div> */}
          <p className="text-primary-color">{`$ ${price ?? "0000"}`}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
