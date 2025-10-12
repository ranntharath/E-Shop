import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../../components/cartPageComponents/Cart'

function CartPage() {
    
  return (
    <>
      <section className="section text-color-text">
    <div className="flex flex-col md:flex-row justify-between items-center p-2">
      <div className="w-full md:w-fit mb-4 md:mb-0">
        <h2 className="font-bold">Shopping Cart</h2>
        <p>3 items in your cart</p>
      </div>
      <Link to="/product" className="w-full md:w-fit">
        <button
          className="w-full flex justify-center items-center bg-white text-color-text shadow-md border border-gray-200 px-5 py-1.5 rounded-sm hover:bg-secondary-color hover:text-white hover:border-secondary-color transition-all ease-in-out duration-200"
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
        <Cart/>
      </div>
      {/* <div
       
        className="text-center w-full col-span-3 h-full"
      >
        <p className="text-4xl my-10">HAVE NO PRODUCT IN CART</p>
      </div> */}
      <div
      
        className="bg-primary-light p-4 rounded-md space-y-6 border shadow border-slate-200 h-fit"
      >
        <h3 className="text-xl font-bold">Order Summary</h3>

        <div>
          <p className="text-sm flex justify-between items-center">
            <span>Subtotal 4 items</span>
            <span>377</span>
          </p>
          <p className="text-sm flex justify-between items-center">
            <span>Delivery</span>
            <span>$0.00</span>
          </p>
          <p className="text-sm flex justify-between items-center">
            <span>Tax</span>
            <span>$0.00</span>
          </p>
        </div>
        <hr className="text-slate-300" />
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Total</h3>
          <h3 className="text-xl font-bold text-primary-color">827</h3>
        </div>
        <form className="space-y-4">
          <input
            v-model="orderData.shippingAddress.name"
            type="text"
            placeholder="Name"
            className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
            required
          />
          <input
            v-model="orderData.shippingAddress.email"
            type="email"
            placeholder="Email"
            className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
            required
          />
          <input
            v-model="orderData.shippingAddress.city"
            type="text"
            placeholder="City"
            className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
            required
          />
          <input
            v-model="orderData.shippingAddress.telegramPhone"
            type="text"
            placeholder="Telegram Number"
            className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
            required
          />
          <button
            type="submit"
            className="bg-primary-color hover:bg-primary-color/90 text-white px-5 py-2 rounded-md w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>

    </>
  )
}

export default CartPage