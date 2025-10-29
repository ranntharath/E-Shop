import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function RecentChart({recent}) {


  const chartData = [
    { name: "This Month", orders: recent?.ordersThisMonth },
    { name: "This Week", orders: recent?.ordersThisWeek },
    { name: "Today", orders: recent?.ordersToday },

  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
        
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RecentChart;
