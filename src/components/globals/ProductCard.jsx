import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, description, rate, price }) => {
  return (
    <>
      <div className="h-full border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-color transition-all duration-150 rounded-2xl hover:scale-[1.01] overflow-hidden bg-white ">
        {/* Image */}
        <div>
          <img
            className="w-full h-36 object-contain rounded-t-2xl bg-gray-50"
            src={
              image ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt={name}
          />
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col justify-between h-[calc(100%-9rem)]">
          <div>
            <p
              className="tracking-[3px] text-descipton-color line-clamp-1 uppercase  font-medium"
             
            >
              {name ?? "Name"}
            </p>

            <p
              className="line-clamp-2 text-sm my-2 text-letter-color"
              
            >
              {description ?? "Description about product"}
            </p>

            {/* Price */}
            <p
              className="text-base font-semibold"
              style={{ color: "var(--color-primary-color)" }}
            >
              ${price ?? "0000"}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              className="flex-1 text-xs px-3 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition bg-primary-color text-white"

            >
              Add Cart
            </button>

            <Link
              to={`/products/${id}`}
              className="flex-1 text-xs px-3 py-2 rounded-xl font-medium text-center border hover:shadow-sm transition"
              style={{
                borderColor: "var(--color-primary-color)",
                color: "var(--color-primary-color)",
              }}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
