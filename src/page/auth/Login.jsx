import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  const [login, {isLoading, isError}] = useLoginMutation()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      if (response) {
        localStorage.setItem("accessToken", response.token);
        navigator("/");
      }
    } catch (error) {
      console.error("Verification failed", error);
    }
  }
  return (
    <>
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
            onSubmit={handleSubmit}
          >

            <div>
              <label className="block text-sm font-medium text-letter-color">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-letter-color">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
            </div>


            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-xl bg-primary-color text-white font-semibold hover:bg-primary-dark-color transition-colors"
            >
              Login
            </button>

            <p className="text-sm text-center text-descipton-color mt-4">
              Do not have an account yet ?{" "}
              <Link
                to={"/auth/register"}
                className="text-primary-color font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      );
    </>
  );
}

export default Login;
