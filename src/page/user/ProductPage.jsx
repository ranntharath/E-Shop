import React, { useEffect, useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../redux/services/productSlice";
import ProductCard from "../../components/globals/ProductCard";
import LoadingComponent from "../../components/globals/LoadingComponent";

export default function ProductPage() {
  const [activecategory, setActiveCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: product, isError, isLoading } = useGetProductQuery();
  const { data: category } = useGetCategoriesQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") setSearchQuery("");
  };

  const filterProducts = product?.products?.filter((pro) => {
    const matchSearch =
      activecategory === "" ||
      pro.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory =
      activecategory === "All" || pro.category === activecategory;
    return matchCategory && matchSearch;
  });

  if (isLoading == true) {
    return <LoadingComponent message={"Loading Products"} />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <p className="text-red-500 font-medium">Error loading products.</p>
        </div>
      </div>
    );
  }

  return (
    // {/* Main Content */}
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-letter-color mb-2">
          Our Products
        </h2>
        <p className="text-descipton-color">
          Discover our curated collection of premium tech products
        </p>
        <div className="flex justify-start items-center gap-2 mt-3">
          <input
            onChange={handleInputChange}
            placeholder="Search..."
            type="text"
            className="border border-gray-400 px-2  p-1   rounded-md focus:outline-1 outline-primary-color focus:border-primary-color"
          />
          <button
            onClick={() => setSearchQuery(searchValue)}
            className="bg-gray-300  p-1 rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center p-1 gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide mb-5">
        {["All", ...(category?.categories || [])].map((e, index) => {
          return (
            <button
              onClick={() => setActiveCategory(e)}
              key={index}
              className={` shadow-sm py-1 px-5 rounded-md ${
                activecategory === e ? "bg-primary-color text-white" : ""
              }`}
              value={e}
            >
              {e}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 justify-center items-center gap-2  md:gap-3">
        {filterProducts?.map((pro, index) => (
          <ProductCard
            key={pro?._id || index}
            id={pro?._id}
            name={pro?.name}
            image={pro?.images[0]}
            price={pro?.price}
            description={pro?.description}
          />
        ))}
      </div>
    </main>
  );
}
