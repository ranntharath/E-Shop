import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetCartQuery } from "../../redux/services/cartSlice";
import { useState, useEffect } from "react";
import axios from "axios";

function OrderFormComponent({ carts }) {
  const [showQr, setShowQr] = useState(false);
  const [qrImage, setQrImage] = useState(null);
  const [md5, setMd5] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("UNPAID");
  const [error, setError] = useState(null);

  const { refetch } = useGetCartQuery();

  const formik = useFormik({
    initialValues: {
      id: "",
      shippingAddress: {
        city: "",
        email: "",
        name: "",
        telegramPhone: "",
      },
      totalAmount: carts?.cart?.total || 0,
      items: carts?.cart?.items || [],
    },
    validationSchema: Yup.object({
      shippingAddress: Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email("Invalid email").required("Email is Required"),
        telegramPhone: Yup.string().required("Phone is Required"),
        city: Yup.string().required("City is Required"),
      }),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (!carts?.cart?.items?.length) {
        setError("Cart is empty");
        return;
      }

      try {
        setError(null);
        setShowQr(false);
        setPaymentStatus("UNPAID");

        const payload = {
          product_id: carts?.cart?._id || "default_product",
          amount: values.totalAmount,
          bill_number: `ORDER-${Date.now()}`,
        };

        const response = await axios.post("http://127.0.0.1:5000/generate-qr", payload, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data.success) {
          setQrImage(response.data.qr_base64);
          setMd5(response.data.md5);
          setShowQr(true);
        } else {
          throw new Error(response.data.error || "Failed to generate QR code");
        }
      } catch (err) {
        console.error("QR code generation error:", err);
        setError(err.message || "An error occurred while generating the QR code");
        setShowQr(false);
      }
    },
  });

  return (
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

      {!showQr && paymentStatus !== "PAID" ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Total</h3>
            <h3 className="text-xl font-bold text-primary-color">
              ${carts?.cart?.total}
            </h3>
          </div>
          <form className="space-y-4" onSubmit={formik.handleSubmit} noValidate>
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
                  {formik.errors.shippingAddress.city}
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
                  {formik.errors.shippingAddress.telegramPhone}
                </p>
              )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={`w-full py-3 mt-3 rounded-xl text-white font-semibold shadow-md transition-all duration-200 ${
                formik.isSubmitting
                  ? "bg-primary-dark-color cursor-not-allowed"
                  : "bg-primary-color hover:bg-primary-dark-color"
              }`}
            >
              {formik.isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                </div>
              ) : (
                "Checkout"
              )}
            </button>
          </form>
        </div>
      ) : paymentStatus === "PAID" ? (
        <div className="text-center">
          <p className="text-green-500 font-semibold text-lg">
            ✅ Payment Successful!
          </p>
          <p className="mt-2">Thank you for your purchase!</p>
          <button
            onClick={() => {
              setShowQr(false);
              setPaymentStatus("UNPAID");
              setQrImage(null);
              setMd5(null);
              formik.resetForm();
            }}
            className="mt-4 bg-primary-color text-white py-2 px-4 rounded-md hover:bg-primary-dark-color"
          >
            Place Another Order
          </button>
        </div>
      ) : (
        <div>
          <p onClick={() => setShowQr(false)} className="text-end cursor-pointer font-semibold">
            ✖ Close
          </p>
          {qrImage && (
            <div className="text-center">
              <img
                id="Qr"
                src={qrImage}
                alt="QR Code"
                className="w-full max-w-xs mx-auto"
              />
              <p className="mt-2 font-medium">
                {paymentStatus === "UNPAID"
                  ? "🕓 Waiting for payment... Scan the QR to complete"
                  : "🔍 Checking payment status..."}
              </p>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderFormComponent;