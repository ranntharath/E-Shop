"use client"

import { useEffect, useState } from "react"


// Inline SVG icons
const StarIcon = ({ filled, className = "" }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const HeartIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
)

const Share2Icon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
)

const MinusIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
)

const PlusIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const ShoppingCartIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const CheckIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default  function DetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("details")

  




  const product = {
    name: "Premium Cotton T-Shirt",
    price: 89.0,
    originalPrice: 129.0,
    rating: 4.8,
    reviews: 127,
    description:
      "Experience unparalleled comfort with our premium cotton t-shirt. Crafted from 100% organic cotton, this essential piece combines timeless design with modern sustainability.",
    features: [
      "Made from 100% organic cotton",
      "Pre-shrunk for perfect fit",
      "Reinforced shoulder seams",
      "Tagless for comfort",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    images: [
      "/premium-black-cotton-t-shirt-front-view.jpg",
      "/premium-black-cotton-t-shirt-back-view.jpg",
      "/premium-black-cotton-t-shirt-side-view.jpg",
      "/premium-black-cotton-t-shirt-detail-close-up.jpg",
    ],
  }

  const relatedProducts = [
    {
      id: 1,
      name: "White Crew Neck T-Shirt",
      price: 79.0,
      image: "/white-crew-neck-t-shirt.jpg",
    },
    {
      id: 2,
      name: "Navy Long Sleeve T-Shirt",
      price: 99.0,
      image: "/navy-long-sleeve-t-shirt.jpg",
    },
    {
      id: 3,
      name: "Gray V-Neck T-Shirt",
      price: 85.0,
      image: "/gray-v-neck-t-shirt.jpg",
    },
    {
      id: 4,
      name: "Olive Pocket T-Shirt",
      price: 95.0,
      image: "/olive-pocket-t-shirt.jpg",
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely love this t-shirt! The quality is outstanding and it fits perfectly.",
    },
    {
      id: 2,
      author: "James K.",
      rating: 5,
      date: "1 month ago",
      comment: "Best t-shirt I've ever owned. The fabric is so soft and comfortable.",
    },
    {
      id: 3,
      author: "Emily R.",
      rating: 4,
      date: "1 month ago",
      comment: "Great quality and fit. Would recommend sizing up if you prefer a looser fit.",
    },
  ]

  const handleAddToCart = () => {
    console.log("Adding to cart:", { product: product.name, size: selectedSize, quantity })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Men
          </a>
          <span>/</span>
          <span className="text-gray-900">T-Shirts</span>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-100 border-2 transition-all ${
                    selectedImage === index ? "border-black" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < Math.floor(product.rating)}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-pretty">{product.description}</p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-600">In Stock</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-900">Select Size</label>
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-medium rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-900 mb-3 block">Quantity</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-gray-900 border-x-2 border-gray-200">{quantity}</span>
                  <button onClick={increaseQuantity} className="p-3 hover:bg-gray-50 transition-colors">
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-4 px-1 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "details"
                    ? "border-black text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 px-1 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "reviews"
                    ? "border-black text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                Reviews ({product.reviews})
              </button>
              <button
                onClick={() => setActiveTab("shipping")}
                className={`pb-4 px-1 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "shipping"
                    ? "border-black text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                Shipping & Returns
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Product</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our Premium Cotton T-Shirt is designed for those who appreciate quality and comfort. Made from 100%
                    organic cotton, this t-shirt offers a soft, breathable feel that gets better with every wash. The
                    classic fit and timeless design make it a versatile addition to any wardrobe.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Materials & Care</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100% organic cotton</li>
                    <li>• Machine wash cold with like colors</li>
                    <li>• Tumble dry low or hang to dry</li>
                    <li>• Do not bleach</li>
                    <li>• Iron on low heat if needed</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{product.rating}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          filled={i < Math.floor(product.rating)}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{review.author}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                filled={i < review.rating}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free standard shipping on orders over $100</li>
                    <li>• Standard shipping (5-7 business days): $5.99</li>
                    <li>• Express shipping (2-3 business days): $12.99</li>
                    <li>• Next day delivery: $24.99</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Returns & Exchanges</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We want you to be completely satisfied with your purchase. If you're not happy with your order, you
                    can return it within 30 days for a full refund or exchange.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Items must be unworn and in original condition</li>
                    <li>• Original tags must be attached</li>
                    <li>• Free returns on all orders</li>
                    <li>• Refunds processed within 5-7 business days</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <a key={item.id} href="#" className="group">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
