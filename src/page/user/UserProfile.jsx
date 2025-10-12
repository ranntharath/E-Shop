import React, { use, useState } from "react";
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from "../../redux/services/userSlice";
import { useFormik } from "formik";
import LoadingComponent from "../../components/globals/LoadingComponent";

function UserProfile() {
  const [isEdit, setIsEdit] = useState(false);

  const { data: user, refetch,isFetching } = useGetUserProfileQuery();
  const [update] = useUpdateUserProfileMutation()


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: user?.user?.email || "",
      name: user?.user?.name || "",
      phone: user?.user?.phone || "",
      avatar: user?.user?.avatar || "",
      address: user?.user?.address || "",
    },
    onSubmit: async (values) =>{
      const response = await update(values).unwrap()
      if(response){
        await refetch()
        setIsEdit(false)

      }
    }
  });
  if(isFetching) return <LoadingComponent message={"Loading Profile"}/>

  const togleEdit = () => setIsEdit(!isEdit);

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto md:my-12 bg-gray-100 md:rounded-xl shadow-md overflow-hidden ">
      {/* Header Banner */}
      <div className="bg-primary-color h-24 w-full"></div>

      {/* Profile Info */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <img
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-2 border-white shadow-md"
            src={formik.values.avatar || 'https://via.placeholder.com/150'}
            alt="Profile"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Sakura Hakura
            </h2>
            <p className="text-gray-500">sakura@gmail.com</p>
          </div>
        </div>
        {!isEdit && <div>
          <button
            onClick={togleEdit}
            className="px-6 py-2 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition"
          >
            Edit
          </button>
        </div>}
      </div>

      {/* Form */}
      <form className="p-6" onSubmit={formik.handleSubmit}>
        {isEdit ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-1">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Your Phone"
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
              />
            </div>

            {/* Optional extra space or other field */}
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-gray-700 font-medium mb-1"
              >
                Image URl
              </label>
              <input
                type="text"
                id="avatar"
                name="avatar"
                onChange={formik.handleChange}
                value={formik.values.avatar}
                placeholder="Your Address"
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <p className="">{formik.values.name || "none"}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
                Phone
              </label>
              <p className="">{formik.values.phone || "none"}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-1">
                Email
              </label>
              <p className="">{formik.values.email || "none"}</p>
            </div>

            
          </div>
        )}

        {/* save */}

        {/* Save Button */}
        {isEdit && (
          <div className="mt-6 flex justify-end gap-3">
            <button onClick={()=>{
              setIsEdit(false)
              formik.resetForm()
            }} type="submit" className="px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-gray-500 transition">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition">
              Save Changes
            </button>

          </div>
        )}
      </form>
    </div>
    </div>
  );
}

export default UserProfile;
