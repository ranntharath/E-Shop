import React from "react";
import TrendingProductCard from "./TrendingProductCard";

function TrendingProducts({ pro }) {
    const trending = pro?.products?.filter(e => e.stock < 10);
    const trendingProducts = trending && trending.length > 0 ? trending : pro?.products || [];

  return (
    <div className="flex flex-col gap-5">
      {trendingProducts?.slice(0, 3).map((e,index) => (
        <TrendingProductCard
          key={e?.id || index}
          id={e?.id}
          name={e?.name}
          image={e?.images[0]}
          price={e?.price}
          description={e?.description}
        />
      ))}
    </div>
  );
}

export default TrendingProducts;
