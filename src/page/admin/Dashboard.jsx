import React from "react";
import { FiBox } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import RecentChart from "../../components/admin/RecentChart";
import CategoryChart from "../../components/admin/CategoryChart";
import {
  useGetStatsQuery,
} from "../../redux/services/dashboard";
import LoadingComponent from "../../components/globals/LoadingComponent";
import { useGetAllOrdersQuery } from "../../redux/services/orderSlice";
import { useGetCategoriesQuery } from "../../redux/services/productSlice";
const columns = [
  "Customer Name",
  "Email",
  "Phone",
  "Items",
  "Total",
  "Date",
];
function Dashboard() {
  const { data: stats, isLoading: loadingStat } = useGetStatsQuery();
  const { data: categories, isLoading: loadingCategories } =
    useGetCategoriesQuery();
  const { data: allOrders } = useGetAllOrdersQuery();

  if (loadingCategories || loadingStat)
    return <LoadingComponent message={"Loading"} />;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5">
        {/* card */}
        <div className="shadow p-4 rounded-md space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-800">Total User</h3>
            <div className="p-2 bg-[#ffe4e0] text-primary-color rounded-md">
              <HiOutlineUsers className="text-[18px]" />
            </div>
          </div>

          <p className="text-3xl font-bold">{stats?.overview?.totalUsers}</p>
        </div>

        {/* card */}
        <div className="shadow p-4 rounded-md space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-800">Total Product</h3>
            <div className="p-2 bg-[#ffe4e0] text-primary-color rounded-md">
              <FiBox className="text-[18px]" />
            </div>
          </div>

          <p className="text-3xl font-bold">{stats?.overview?.totalProducts}</p>
        </div>
        {/* card */}
        <div className="shadow p-4 rounded-md space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-800">Total Orders</h3>
            <div className="p-2 bg-[#ffe4e0] text-primary-color rounded-md">
              <FiShoppingCart />
            </div>
          </div>

          <p className="text-3xl font-bold">{stats?.overview?.totalOrders}</p>
        </div>
      </div>
      {/* chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-2 bg-white rounded-2xl">
          <p className="text-center text-2xl mt-2 text-slate-600">Orders</p>
          <RecentChart recent={stats?.recent} />
        </div>
        <div className="p-2 bg-white rounded-2xl">
          <p className="text-center text-2xl mt-2 text-slate-600">Categories</p>
          <CategoryChart categoryCounts={categories?.categoryCounts} />
        </div>
      </div>

      {/* recent order */}
      <div className="p-6 bg-white rounded-xl mt-5 overflow-hidden">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Recent Orders</h2>
        {/* <TableComponent columns={columns} data={allOrders?.orders}  /> */}
        <div className="relative w-full overflow-x-auto border border-gray-200 bg-white">
          <table className="w-full text-sm text-left border-collapse min-w-[700px]">
            {/* Header */}
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                {columns?.map((col, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b border-gray-200 text-gray-700 tracking-wide whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-100">
              {allOrders?.orders?.slice(0, 5).map((order, i) => (
                <tr
                  key={order?._id}
                  className={`transition-all duration-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100/60`}
                >
                  <td className="py-3 px-5 font-medium text-gray-700 whitespace-nowrap">
                    {order?.shippingAddress?.name}
                  </td>

                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {order?.shippingAddress?.email}
                  </td>
                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {order?.shippingAddress?.telegramPhone}
                  </td>
                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {order?.items?.length}
                  </td>
                  <td className="py-3 px-5 font-semibold text-green-500 whitespace-nowrap">
                    ${order.totalAmount?.toFixed(2)}
                  </td>

                  <td className="py-3 px-5 text-gray-500 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {allOrders?.orders?.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-8 text-gray-500 italic bg-gray-50"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
}

export default Dashboard;
