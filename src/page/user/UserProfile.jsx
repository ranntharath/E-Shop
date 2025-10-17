import React, { useState } from "react";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../redux/services/userSlice";
import { useFormik } from "formik";
import LoadingComponent from "../../components/globals/LoadingComponent";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate()

  const { data: user, refetch, isFetching } = useGetUserProfileQuery();
  const [update] = useUpdateUserProfileMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: user?.user?.email || "",
      name: user?.user?.name || "",
      phone: user?.user?.phone || "",
      avatar: user?.user?.avatar || "",
      address: user?.user?.address || "",
    },
    onSubmit: async (values) => {
      const response = await update(values).unwrap();
      if (response) {
        await refetch();
        setIsEdit(false);
      }
    },
  });

  function logout() {
    localStorage.removeItem("accessToken");
    navigate('/')
  }

  if (isFetching) return <LoadingComponent message={"Loading Profile"} />;

  const toggleEdit = () => setIsEdit(!isEdit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-100">
          <button
            onClick={logout}
            className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
          >
            <HiOutlineLogout className="w-5 h-5" />
            Logout
          </button>
          <div className="relative h-40 bg-red-400">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  className="w-32 h-32 object-cover rounded-2xl border-4 border-white shadow-2xl"
                  src={
                    formik.values.avatar || "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          {/* Profile Header */}
          <div className="pt-20 px-8 pb-6 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {formik.values.name || "User Name"}
              </h1>
              <p className="text-gray-500 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                {formik.values.email || "email@example.com"}
              </p>
            </div>
            {!isEdit && (
              <button
                onClick={toggleEdit}
                className="px-6 py-2.5  text-white font-medium rounded-xl transition-all shadow-md  bg-primary-color "
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                  Edit Profile
                </span>
              </button>
            )}
          </div>

          <div className="px-8">
            <div className="border-t border-gray-200"></div>
          </div>

          {/* Form Section */}
          <form className="p-8" onSubmit={formik.handleSubmit}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Personal Information
            </h2>

            {isEdit ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Avatar URL */}
                  <div className="space-y-2">
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profile Image URL
                    </label>
                    <input
                      type="text"
                      id="avatar"
                      name="avatar"
                      onChange={formik.handleChange}
                      value={formik.values.avatar}
                      placeholder="Enter image URL"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => {
                      setIsEdit(false);
                      formik.resetForm();
                    }}
                    type="button"
                    className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    Full Name
                  </label>
                  <p className="text-lg text-gray-900 font-medium">
                    {formik.values.name || "Not provided"}
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    Phone Number
                  </label>
                  <p className="text-lg text-gray-900 font-medium">
                    {formik.values.phone || "Not provided"}
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    Email Address
                  </label>
                  <p className="text-lg text-gray-900 font-medium">
                    {formik.values.email || "Not provided"}
                  </p>
                </div>

                {/* Member Since */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">
                    Member Since
                  </label>
                  <p className="text-lg text-gray-900 font-medium">
                    January 2024
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
