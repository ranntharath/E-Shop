import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
function Login() {
  const navigator = useNavigate();

  const [login, { isLoading, isError }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();
        if (response) {
          localStorage.setItem("accessToken", response.token);
          navigator("/");
        }
      } catch (error) {
        console.error("Verification failed", error);
      }
    },
  });

  return (
    <>
    test
    fea
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>

          <form
            className="space-y-5"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color transition"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color transition"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 mt-3 rounded-xl text-white font-semibold shadow-md transition-all duration-200 ${
                isLoading
                  ? "bg-primary-dark-color cursor-not-allowed"
                  : "bg-primary-color hover:bg-primary-dark-color"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                </div>
              ) : (
                "Login"
              )}
            </button>

            {/* Register Link */}
            <p className="text-sm text-center text-gray-500 mt-4">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-primary-color font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
