import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserOrderByIdQuery } from "../../redux/services/orderSlice";
import LoadingComponent from "../globals/LoadingComponent";

function OrderDetail() {
  const { id } = useParams(); // get order ID from URL

  const {data:order,isLoading} = useGetUserOrderByIdQuery(id)


  if(isLoading) return <LoadingComponent message={"Loading Order"}/>
  if (!order) return <p className="p-6 text-center">Loading order details...</p>;

  const orderDate = new Date(order?.order?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto md:px-20 py-8 w-[90%] md:w-[80%] lg:w-[60%] shadow-md my-15 border rounded-md border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <p className="text-sm text-slate-500 mb-1">Order Number</p>
          <p className="font-semibold text-lg text-slate-800">
            ORD-{order?.order?._id?.slice(-6).toUpperCase()}
          </p>
        </div>
        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            order?.order?.status === "pending"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {order?.order?.status == "pending" ? "delivered" : "completed"}
        </span>
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500 mb-1 flex items-center gap-1">
            🗓️ Order Date
          </p>
          <p className="font-medium text-slate-800">{orderDate}</p>
        </div>
        
      </div>

      {/* Order Items */}
      <div>
        <h3 className="font-semibold text-lg text-slate-800 mb-3">
          Order Items
        </h3>
        <div className="space-y-3">
          {order?.order?.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg"
            >
              <div className="text-3xl">
                <img className="w-12 h-12 object-cover"  src={item?.images[0]} alt="" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800">{item.name}</p>
                <p className="text-sm text-slate-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="font-semibold text-slate-800">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Payment */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <div className="flex items-start gap-3">
          📍
          <div>
            <p className="text-sm text-slate-500 mb-1">Customer Information</p>
            <p className="font-medium text-slate-800">
              {order?.order?.shippingAddress?.name}, {order?.order?.shippingAddress?.city}
              <br />
              {order?.order?.shippingAddress?.email} <br />
              {order?.order?.shippingAddress?.telegramPhone}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          💳
          <div>
            <p className="text-sm text-slate-500 mb-1">Payment Method</p>
            <p className="font-medium text-slate-800">
              Bakong
            </p>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="brounded-lg p-4 space-y-2">
        <div className="flex justify-between text-xl font-bold text-slate-800 pt-2 border-t border-indigo-200">
          <span>Total</span>
          <span>${order?.order?.totalAmount?.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-3">
        
        <button className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
          Contact Support
        </button>
      </div> */}
    </div>
  );
}

export default OrderDetail;
