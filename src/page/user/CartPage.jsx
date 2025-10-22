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
        <div className="flex  justify-between items-start p-2">
          <div className="w-full md:w-fit mb-4 md:mb-0">
            <h2 className="font-bold">Shopping Cart</h2>
            <p>{carts?.cart?.items?.length} items in your cart</p>
          </div>
          <Link to="/order-history" className="w-full md:w-fit">
            <button className="underline underline-offset-2 text-green-500 cursor-pointer w-full flex justify-center items-center  text-color-text   px-5 py-1.5 rounded-sm   transition-all ease-in-out duration-200">
              
              Order History
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
