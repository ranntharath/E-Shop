import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/cartPageComponents/Cart";
import { useGetCartQuery } from "../../redux/services/cartSlice";
import LoadingComponent from "../../components/globals/LoadingComponent";
import OrderFormComponent from "../../components/cartPageComponents/OrderFormComponent";

function CartPage() {
  const { data: carts, isLoading, isError } = useGetCartQuery();

  useEffect(() => {
    window.scroll(0, 0);
  });

  if (isLoading) return <LoadingComponent message={"Loading Carts"} />;
  return (
    <>
      <section className="section text-color-text mt-5">
        <div className="flex flex-col md:flex-row justify-between items-center p-2">
          <div className="w-full md:w-fit mb-4 md:mb-0">
            <h2 className="font-bold">Shopping Cart</h2>
            <p>{carts?.cart?.items?.length} items in your cart</p>
          </div>
          <Link to="/product" className="w-full md:w-fit">
            <button className="cursor-pointer w-full flex justify-center items-center bg-white text-color-text shadow-md border border-gray-200 px-5 py-1.5 rounded-sm hover:bg-gray-300 hover:text-white hover:border-secondary-color transition-all ease-in-out duration-200">
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
                className="lucide lucide-arrow-left h-4 w-4 mr-2"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <p>Continue Shopping</p>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className="lg:col-span-2 space-y-4">
            {/* product card */}
            {carts?.cart?.items?.map((item) => {
              return (
                <Cart
                  key={item.product._id}
                  id={item.product._id}
                  image={item.product.images[0]}
                  name={item.product.name}
                  description={item.product.description}
                  price={item.product.price}
                  qty={item.quantity}
                />
              );
            })}
          </div>
          {carts?.cart?.items?.length == 0 ? (
            <div className="text-center w-full col-span-3 h-full">
              <p className="text-4xl my-20 text-gray-400">
                HAVE NO PRODUCT IN CART
              </p>
            </div>
          ) : (
            <OrderFormComponent carts={carts} />
          )}
        </div>
      </section>
    </>
  );
}

export default CartPage;
