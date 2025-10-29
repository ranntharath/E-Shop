import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useGetProductQuery,
} from "../../redux/services/productSlice";
import { Pencil, Trash2 } from "lucide-react";
import AddProductForm from "../../components/admin/form/AddProductForm";
import ConfirmDialog from "../../components/globals/ConfirmDailog";
import toast from "react-hot-toast";
import LoadingComponent from "../../components/globals/LoadingComponent";
import EditProduct from "../../components/admin/form/EditProduct";
const columns = [
  "Product",
  "Category",
  "Brand",
  "Price",
  "Stock",
  "Status",
  "Date",
];

function Product() {
  const [isOpen, setIsOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEdit, setOpenEdit] = useState(null);
  const [ActionProudctID, setActionProudctID] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {
    data: allProducts,
    isLoading: isLoadingProduct,
    refetch,
  } = useGetProductQuery();
  const { refetch: refectCategory } = useGetCategoriesQuery();
  const [deleteProduct] = useDeleteProductMutation();
  async function handleDeleteProduct() {
    if (!ActionProudctID) return;
    try {
      const response = await deleteProduct(ActionProudctID).unwrap();
      if (response) {
        toast.success("Product deleted successfully!");
        refetch();
        refectCategory();
        setOpenDialog(false);
        setActionProudctID(null);
      }
    } catch (error) {
      toast.error("Failed to delete product!");
    }
  }

  function HandleActionProductId(id) {
    setActionProudctID(id);
  }
  function OpenForm() {
    setIsOpen(true);
  }

  if (isLoadingProduct) return <LoadingComponent message={"Loading Product"} />;
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800">Products</h2>
      <div className="mt-5 border border-slate-200 rounded-md bg-white">
        {/* function */}

        <div className="flex justify-between items-center p-3 ">
          <div className="flex justify-start gap-2 items-center ">
            <input
              type="text"
              placeholder="Search"
              className="border border-slate-300 p-1 pl-3 rounded-md focus:outline-[#ffb3a7]"
            />
            <button className="flex justify-center items-center bg-white text-color-text border border-gray-200 px-5 py-1 rounded-sm  hover:bg-primary-color hover:text-white hover:border-secondary-color transition-all ease-in-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-filter h-4 w-4 mr-2"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              <p>Filters</p>
            </button>
          </div>

          <button
            onClick={OpenForm}
            className="cursor-pointer flex justify-center items-center gap-3 border border-slate-300 px-2 py-1 rounded-md  "
          >
            <IoIosAddCircleOutline className="text-xl" />
            <span>Add New Product</span>
          </button>
        </div>

        {/* table */}
        <div className="relative w-full overflow-x-auto border border-gray-200 bg-white">
          <table className="w-full text-sm text-left border-collapse min-w-[700px]">
            {/* Header */}
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b border-gray-200 text-gray-700 tracking-wide whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
                <th className="px-5 py-3 border-b border-gray-200 text-center whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-gray-100">
              {allProducts?.products?.map((product, i) => (
                <tr
                  key={product._id}
                  className={`transition-all duration-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100/60`}
                >
                  <td className="py-3 px-5 font-medium text-gray-700 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          product?.images[0] || "https://via.placeholder.com/40"
                        } // fallback image
                        alt={product?.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <span>{product?.name}</span>
                    </div>
                  </td>

                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {product?.category}
                  </td>
                  <td className="py-3 px-5 capitalize font-medium text-gray-700 whitespace-nowrap">
                    {product?.brand}
                  </td>

                  <td className="py-3 px-5  whitespace-nowrap text-green-400">
                    ${product?.price?.toFixed(2)}
                  </td>
                  <td className="py-3 px-5 capitalize font-medium text-gray-700 whitespace-nowrap">
                    {product?.stock}
                  </td>
                  <td
                    className={`py-3 px-5 whitespace-nowrap ${
                      product?.stock < 0
                        ? "text-red-400"
                        : product?.stock < 10
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {product?.stock < 0
                      ? "Out Stock"
                      : product?.stock < 10
                      ? "Low Stock"
                      : "In Stock"}
                  </td>

                  <td className="py-3 px-5 text-gray-500 whitespace-nowrap">
                    {new Date(product?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-5 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setOpenEdit(true);
                        }}
                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => {
                          HandleActionProductId(product?._id);
                          setOpenDialog(true);
                        }}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-800 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {allProducts?.products?.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-8 text-gray-500 italic bg-gray-50"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/60 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <AddProductForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      {/* edit form */}
    
        <div className={`fixed inset-0 bg-black/60 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 
                ${openEdit ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <EditProduct
            isOpen={openEdit}
            onClose={() => setOpenEdit(false)}
            id={ActionProudctID}
            product={selectedProduct}
          />
        </div>

      {/* confirm Dialog */}
      <ConfirmDialog
        open={openDialog}
        title={"Delete Product"}
        message={"Are you sure?"}
        onConfirm={handleDeleteProduct}
        onCancel={() => {
          setOpenDialog(false);
          setActionProudctID(null);
        }}
      />
    </>
  );
}

export default Product;
