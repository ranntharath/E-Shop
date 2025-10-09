
import React from "react"
import { useGetProductQuery } from "../../redux/services/productSlice"
import ProductCard from "../../components/globals/ProductCard"
import LoadingComponent from "../../components/globals/LoadingComponent"

export default function ProductPage() {
  const { data: product, error, isLoading } = useGetProductQuery()
  
  if (isLoading) {
    return (
      <LoadingComponent/>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <p className="text-red-500 font-medium">Error loading products.</p>
        </div>
      </div>
    )
  }

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header with Logo */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[var(--color-letter-color)] mb-2">Our Products</h2>
          <p className="text-[var(--color-description-color)]">
            Discover our curated collection of premium tech products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {product?.products?.map(pro=>{
            return <ProductCard key={pro?.id} id={pro?.id} 
            name={pro?.name}
            image={pro?.images[0]}
            price={pro?.price}
            description={pro?.description}

            />
          })}
        </div>
      </main>

    </div>
  )
}
