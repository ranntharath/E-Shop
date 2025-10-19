import React, { useEffect, useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../redux/services/productSlice";
import ProductCard from "../../components/globals/ProductCard";
import LoadingComponent from "../../components/globals/LoadingComponent";
import DropDownFilter from "../../components/productPage/dropDownFilter";

const Brand = ["iphone", "android", "mac", "android", "asus", "msi"];

export default function ProductPage() {
  const [toggleFilter, setToggleFilter] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
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
    const matchCategory =
      selectedCategories.length == 0
        ? true
        : selectedCategories.includes(pro?.category);
    const matchBrand =
      selectedBrand.length == 0 ? true : selectedBrand.includes(pro?.brand);
    const matchSearch =
      searchValue === "" ||
      pro.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchBrand && matchSearch;
  });

  function getCategories(e) {
    setSelectedCategories(e);
  }
  function getBrand(e) {
    setSelectedBrand(e);
  }
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

      <section className="mt-10 grid grid-cols-1 md:grid-cols-4 justify-center items-start gap-5 ">
        <button
          onClick={() => setToggleFilter(!toggleFilter)}
          className="flex justify-center items-center md:hidden bg-white w-full text-color-text shadow-md border border-gray-200 px-5 py-2 rounded-sm hover:bg-secondary-color hover:text-white hover:border-secondary-color transition-all ease-in-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-filter h-4 w-4 mr-2"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>

          <p>Filters</p>
        </button>
        
          <div className={`bg-gray-100 px-2 pt-5 space-y-2 ${toggleFilter ? "block" : "hidden"} md:block`}>
            <DropDownFilter
              option={category?.categories}
              onChange={getCategories}
              label={"Category"}
            />
            <DropDownFilter
              option={Brand}
              onChange={getBrand}
              label={"Brand"}
            />
          </div>
        
        <div className="md:col-span-3 ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center items-center gap-2 md:gap-4">
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
        </div>
      </section>
    </main>
  );
}
