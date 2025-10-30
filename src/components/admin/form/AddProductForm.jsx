import React, { useState } from "react";
import { X, Upload, Calendar } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAddProductMutation,
  useGetCategoriesQuery,
  useGetProductPaginationQuery,
  useGetProductQuery,
} from "../../../redux/services/productSlice";
import toast from "react-hot-toast";
export default function AddProductForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    images: [""],
    brand: "",
  });
  const [addProduct, { isLoading: addproductLoading }] =
    useAddProductMutation();
  const { refetch } = useGetProductPaginationQuery({page:1, limit:10});

  const { refetch: refectCategory } = useGetCategoriesQuery();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddImageField = () => {
    if (formData.images.length < 4) {
      setFormData((prev) => ({ ...prev, images: [...prev.images, ""] }));
    }
  };

  const handleRemoveImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct(formData).unwrap();

      if (response) {
        refetch();
        refectCategory();
        toast.success("add product succcess");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          stock: "",
          images: [""],
          brand: "",
        });
        onClose();
      }
    } catch (error) {
      toast.error(error.data.error);
    }
  };

  function closeForm() {
    onClose();
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      images: [""],
      brand: "",
    });
  }
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-end">
        <div
          className={`bg-white h-screen  shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 ">
              <h2 className="text-2xl font-semibold text-gray-900">
                Add New Product
              </h2>
              <button
                onClick={closeForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter item name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                    required
                  />
                </div>
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter Product Price"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                    required
                  >
                    <option value="">Choose type</option>
                    <option value="desktop">Desktop</option>
                    <option value="laptop">Laptop</option>
                    <option value="phone">Phone</option>
                    <option value="watch">Watch</option>
                    <option value="accessory">Accessory</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="Enter Brand"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                    required
                  />
                </div>

                {/* stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="Enter Stock"
                    min={0}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                    required
                  />
                </div>
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Images <span className="text-red-500">*</span>
                </label>

                {formData.images.map((img, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      placeholder={`Image URL ${index + 1}`}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none"
                      required
                    />
                    {formData.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveImageField(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddImageField}
                  className="text-[#fc634c] text-sm font-medium hover:underline"
                >
                  + Add another image
                </button>
              </div>
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Input description"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fc634c] focus:border-[#fc634c] transition-all outline-none resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={addproductLoading}
                  className="px-6 py-3 bg-[#fc634c] text-white rounded-lg hover:bg-[#e55a45] transition-colors font-medium shadow-sm"
                >
                  Add New Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
