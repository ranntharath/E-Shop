import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreaetOrderMutation } from "../../redux/services/orderSlice";

import { useGetCartQuery } from "../../redux/services/cartSlice";
import { useState } from "react";

function OrderFormComponent({ carts }) {
  const [showQr, setShowQr] = useState(false);

  const { refetch } = useGetCartQuery();
  const [order, { isLoading }] = useCreaetOrderMutation();

  const formik = useFormik({
    initialValues: {
      id: "",
      shippingAddress: {
        city: "",
        email: "",
        name: "",
        telegramPhone: "",
      },
      totalAmount: 0,
      items: [],
    },
    validationSchema: Yup.object({
      shippingAddress: Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().required("Email is Required"),
        telegramPhone: Yup.string().required("Phone is Required"),
      }),
    }),
    onSubmit: (values) => {
      setShowQr(true);
    },
  });

  const createOrder = async (data) => {
    try {
      const response = await order(data).unwrap();
      if (response) {
        refetch();
      }
    } catch (error) {
      alert(error.data.error);
    }
  };

  return (
    <>
      <div className="bg-primary-light p-4 rounded-md space-y-6 border shadow border-slate-200 h-fit">
        <h3 className="text-xl font-bold">Order Summary</h3>

        <div>
          <p className="text-sm flex justify-between items-center">
            <span>Subtotal {carts?.cart?.items?.length} items</span>
            <span>${carts?.cart?.total}</span>
          </p>
          <p className="text-sm flex justify-between items-center">
            <span>Delivery</span>
            <span>$0.00</span>
          </p>
          <p className="text-sm flex justify-between items-center">
            <span>Tax</span>
            <span>$0.00</span>
          </p>
        </div>
        <hr className="text-slate-300" />
        {!showQr ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold ">Total</h3>
              <h3 className="text-xl font-bold  text-primary-color">
                ${carts?.cart?.total}
              </h3>
            </div>
            <form
              className="space-y-4"
              onSubmit={formik.handleSubmit}
              noValidate
            >
              <input
                type="text"
                name="shippingAddress.name"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress.name}
                placeholder="Name"
                className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
                required
              />
              {formik.touched.shippingAddress?.name &&
                formik.errors.shippingAddress?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.shippingAddress.name}
                  </p>
                )}
              <input
                type="email"
                name="shippingAddress.email"
                value={formik.values.shippingAddress.email}
                onChange={formik.handleChange}
                placeholder="Email"
                className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
                required
              />
              {formik.touched.shippingAddress?.email &&
                formik.errors.shippingAddress?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.shippingAddress.email}
                  </p>
                )}
              <input
                type="text"
                name="shippingAddress.city"
                placeholder="City"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress.city}
                className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
                required
              />
              {formik.touched.shippingAddress?.city &&
                formik.errors.shippingAddress?.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.shippingAddress?.city}
                  </p>
                )}
              <input
                type="text"
                name="shippingAddress.telegramPhone"
                placeholder="Telegram Number"
                onChange={formik.handleChange}
                value={formik.values.shippingAddress.telegramPhone}
                className="p-2 w-full rounded-md ring-1 ring-slate-400 focus:outline-primary-color"
                required
              />
              {formik.touched.shippingAddress?.telegramPhone &&
                formik.errors.shippingAddress?.telegramPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.shippingAddress?.telegramPhone}
                  </p>
                )}
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
                  "Checkout"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="">
            <p onClick={()=>setShowQr(false)} className="text-end cursor-pointer">X</p>
            <img id="Qr"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQ8ar9htDrBJESOEbLx2E91bGvp10zzGRAQ&s"
            alt=""
          />
          </div>
        )}
      </div>
    </>
  );
}

export default OrderFormComponent;
