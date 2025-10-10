import React from "react";
import ProductCard from "../globals/ProductCard";

function BestSale({ pro }) {
  const bestSale = pro?.products?.filter((e) => e.stock < 2);
  const bestSaleProduct =
    (bestSale && bestSale.length) > 0 ? bestSale : pro?.products || [];

  return (
    <>
      {/* products new */}
      {bestSaleProduct.map((e, index) => {
        return (
          <div key={e?.id || index} className="min-w-[210px] max-w-[210px]">
            <ProductCard
              id={e?.id}
              name={e?.name}
              image={e?.images[0]}
              price={e?.price}
              description={e?.description}
            />
          </div>
        );
      })}
    </>
  );
}

export default BestSale;
