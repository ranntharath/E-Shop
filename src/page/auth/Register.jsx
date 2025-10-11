import React, { useState } from "react";
import { useRegisterMutation } from "../../redux/services/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
function Register() {
  const navigator = useNavigate();
  const [register, { isLoading, isError }] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      cPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      if (values.password != values.cPassword) {
        alert("Comfirm password is not matched");
        return;
      }
      try {
        const response = await register(values).unwrap();
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-letter-color mb-2">
          Create Account
        </h2>
        <p className="text-center text-sm text-descipton-color mb-6">
          Join us and start your journey today.
        </p>

        <form
          className="space-y-4"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-letter-color">
              Name
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              placeholder="Your name"
              name="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-letter-color">
              Email
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-letter-color">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="new-password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cpass"
              className="block text-sm font-medium text-letter-color"
            >
              Confirm Password
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cPassword}
              id="cpass"
              type="password"
              placeholder="Comfirm Password"
              name="cPassword"
              autoComplete="new-password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
            {formik.touched.cPassword && formik.errors.cPassword && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.cPassword}
              </p>
            )}
          </div>

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

          <p className="text-sm text-center text-descipton-color mt-4">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              className="text-primary-color font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
