import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Pencil, Trash2 } from "lucide-react";
import { useGetAllOrdersQuery, useGetOrderPaginationQuery } from "../../redux/services/orderSlice";
import LoadingComponent from "../../components/globals/LoadingComponent";
import toast from "react-hot-toast";

const columns = [
  "Order ID",
  "Customer Name",
  "Email",
  "Items",
  "Total",
  "Date",
];

function Order() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: Orders, isLoading, error } = useGetOrderPaginationQuery({ page, limit });

  if (isLoading) return <LoadingComponent message={"loading"}/>;
  const totalPages = Orders?.pagination?.pages || 1;

  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800">Orders</h2>
      <div className="mt-5 border border-slate-200 rounded-md bg-white">

        {/* Function / Filters */}
        <div className="flex justify-between items-center p-3 ">
          <div className="flex justify-start gap-2 items-center ">
            <input
              type="text"
              placeholder="Search"
              className="border border-slate-300 p-1 pl-3 rounded-md focus:outline-[#ffb3a7]"
            />
            <button className="flex justify-center items-center bg-white text-color-text border border-gray-200 px-5 py-1 rounded-sm hover:bg-primary-color hover:text-white hover:border-secondary-color transition-all ease-in-out duration-200">
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
          </div>

          <button className="cursor-pointer flex justify-center items-center gap-3 border border-slate-300 px-2 py-1 rounded-md">
            <IoIosAddCircleOutline className="text-xl" />
            <span>Add New Order</span>
          </button>
        </div>

        {/* Table */}
        <div className="relative w-full overflow-x-auto border border-gray-200 bg-white">
          <table className="w-full text-sm text-left border-collapse min-w-[700px]">
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b border-gray-200 text-gray-700 tracking-wide whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
                <th className="px-5 py-3 border-b border-gray-200 text-center whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {Orders?.orders?.map((order, i) => (
                <tr
                  key={order._id}
                  className={`transition-all duration-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100/60`}
                >
                  <td className="py-3 px-5 font-medium text-gray-700 whitespace-nowrap">
                    {order._id.slice(-6).toUpperCase()}
                  </td>
                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {order?.shippingAddress?.name}
                  </td>
                  <td className="py-3 px-5 text-gray-700 whitespace-nowrap">
                    {order?.shippingAddress?.email}
                  </td>
                  <td className="py-3 px-5 text-gray-700 whitespace-nowrap">
                    {order?.items?.length}
                  </td>
                  <td className="py-3 px-5 text-green-500 whitespace-nowrap">
                    ${order?.totalAmount?.toFixed(2)}
                  </td>
                  <td className="py-3 px-5 text-gray-500 whitespace-nowrap">
                    {new Date(order?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-5 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-3">
                      <button onClick={()=>{
                        toast.error("this feature not allow yet")
                      }} className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition">
                        <Pencil size={16} />
                      </button>
                      <button onClick={()=>{
                        toast.error("this feature not allow yet")
                      }} className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-800 transition">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {Orders?.orders?.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-gray-500 italic bg-gray-50"
                  >
                    No Orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        

      </div>
      <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border border-slate-300 rounded ${
                page === i + 1 ? "bg-primary-color text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
    </>
  );
}

export default Order;
