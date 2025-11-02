import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        formData,
        EMAIL_PUBLIC_KEY
      );
      
      if (result.status == 200) {
        console.log(result)
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-color text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Have questions about your order or need help? We're here to assist
            you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={24}
                  />
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 font-medium">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent transition"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  } text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info — unchanged */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <a
                      href="mailto:tharath8061@gmail.com"
                      className="text-purple-600 hover:underline"
                    >
                      tharath8061@gmail.com
                    </a>
                  </p>
                  {/* <p className="text-sm text-gray-600">
                    <a href="mailto:orders@store.com" className="text-purple-600 hover:underline">
                      orders@store.com
                    </a>
                  </p> */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <a
                      href="tel:+18001234567"
                      className="text-indigo-600 hover:underline"
                    >
                      1-800-123-4567
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Toll-free</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-sm text-gray-600">Monday - Friday</p>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    9:00 AM - 6:00 PM EST
                  </p>
                  <p className="text-sm text-gray-600">Saturday</p>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    10:00 AM - 4:00 PM EST
                  </p>
                  <p className="text-xs text-gray-500">Closed on Sundays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
