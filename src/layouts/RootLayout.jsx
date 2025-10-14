import React from "react";
import Navbar from "../components/globals/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/globals/Footer";
import LoginNavbar from "../components/globals/LoginNavbar";
import { useGetMeQuery } from "../redux/services/authSlice";
import LoadingComponent from "../components/globals/LoadingComponent";
import { useGetUserProfileQuery } from "../redux/services/userSlice";

function RootLayout() {
  const token = localStorage.getItem("accessToken");

  const { data, isLoading } = useGetUserProfileQuery(undefined, {
    skip: !token,
  });

  if (!token)
    return (
      <div className="w-full max-w-[2000px] mx-auto">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );

  if (isLoading) return <LoadingComponent />;

  return (
    <div className="w-full max-w-[2000px] mx-auto">
      <LoginNavbar profile={data} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default RootLayout;
