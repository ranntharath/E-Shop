import React from "react";
import { NavLink } from "react-router-dom";

function OrderCard({ id, order, date, status, items, total }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Shortened order ID for a cleaner look
  const shortId = order ? `#${order.slice(-6).toUpperCase()}` : "ORD-000001";

  // Status badge color setup
  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "processing":
        return "bg-blue-100 text-blue-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <NavLink to={`${id}`}>
      <div className="p-6 border border-slate-200 rounded-2xl hover:shadow-md transition-all duration-200 bg-white">
        <div className="flex justify-between items-start">
          {/* Left side: Icon + Info */}
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package text-indigo-600"
              >
                <path d="m7.5 4.27 9 5.15"></path>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.3 7 8.7 5 8.7-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-slate-800">
                Order {shortId}
              </h3>
              <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                {formattedDate}
              </p>
            </div>
          </div>

          {/* Right side: Status */}
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium bg-green-200 `}
          >
            {status === "pending" ? "delivered" : ""}
          </span>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-slate-100 pt-4 flex justify-between items-center">
          <p className="text-sm text-slate-600">{items || 0} items</p>
          <p className="text-xl font-bold text-slate-800">
            ${total?.toFixed(2)}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default OrderCard;
