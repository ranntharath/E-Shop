import React from "react";
import OrderCard from "../../components/orderHistory/OrderCard";
import { useGetUserOrderQuery } from "../../redux/services/orderSlice";
import OrderDetail from "../../components/orderHistory/OrderDetail";
import LoadingComponent from "../../components/globals/LoadingComponent";

function OrderHistoryPage() {
  const { data,isLoading } = useGetUserOrderQuery();
  if(isLoading) return <LoadingComponent message={"Loading Orders"}/>
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div>
        <h2 className="text-3xl font-bold text-letter-color mb-2">
          Order History
        </h2>
      </div>
      {/* order cards */}
      <div className="flex  flex-col gap-3  mt-5">
        {data?.orders?.map((e) => {
          return (
            <OrderCard
              key={e?._id}
              id={e?._id}
              total={e?.totalAmount}
              status={e?.status}
              items={e?.items?.length}
              date={e?.createdAt}
              order={e?._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderHistoryPage;
