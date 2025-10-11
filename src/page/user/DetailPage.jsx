"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductQuery,
} from "../../redux/services/productSlice";
import LoadingComponent from "../../components/globals/LoadingComponent";
import ProductCard from "../../components/globals/ProductCard";

const StarIcon = ({ filled, className = "" }) => (
  <svg
    className={className}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const HeartIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const Share2Icon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const MinusIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const PlusIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ShoppingCartIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const CheckIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function DetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { data: pro, isLoading, isError } = useGetProductByIdQuery(id);
  const { data: products } = useGetProductQuery();

  if (isLoading) return <LoadingComponent message={"Loading Product"} />;

  const product = {
    name: "Premium Cotton T-Shirt",
    price: 89.0,
    originalPrice: 129.0,
    rating: 4.8,
    reviews: 127,
    description:
      "Experience unparalleled comfort with our premium cotton t-shirt. Crafted from 100% organic cotton, this essential piece combines timeless design with modern sustainability.",
    
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/premium-black-cotton-t-shirt-front-view.jpg",
      "/premium-black-cotton-t-shirt-back-view.jpg",
      "/premium-black-cotton-t-shirt-side-view.jpg",
      "/premium-black-cotton-t-shirt-detail-close-up.jpg",
    ],
  };
  const features = [
      "Made from 100% organic cotton",
      "Pre-shrunk for perfect fit",
      "Reinforced shoulder seams",
      "Tagless for comfort",
      "Machine washable",
    ]
  const relatedProducts =
    products?.products?.filter((e) =>
      e?.category.toLowerCase().includes(pro?.product?.category) && e?._id != pro?.product?._id
    ) || [];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={pro?.product.images[selectedImage] || "/placeholder.svg"}
                alt={pro?.product.name}
                className="h-full w-full object-cover object-center border rounded-xl border-primary-color"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {pro?.product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-100 border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary-color"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${pro?.product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* pro?.product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
                {pro?.product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < Math.floor(4.2)}
                      className={`h-5 w-5 ${
                        i < Math.floor(4.2)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {pro?.product.rating} ({pro?.product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary-color">
                  ${pro?.product.price.toFixed(2)}
                </span>
                {/* <span className="text-xl text-gray-400 line-through">${pro?.product.originalPrice.toFixed(2)}</span> */}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-pretty">
                {pro?.product.description}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                {pro?.product?.stock < 0 ? (
                  <span className="text-sm font-medium text-yellow-400">
                    Out Stock
                  </span>
                ) : (
                  <span className="text-sm font-medium text-green-600">
                    In Stock
                  </span>
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-900 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-gray-900 border-x-2 border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <p>+</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-primary-color text-white py-4 px-6 rounded-lg font-semibold cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCartIcon className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-primary-color mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {relatedProducts?.map((e) => {
                return (
                  <ProductCard
                    id={e?._id}
                    name={e?.name}
                    image={e?.images[0]}
                    price={e?.price}
                    description={e?.description}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
