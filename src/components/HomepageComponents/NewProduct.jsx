import ProductCard from "../globals/ProductCard";

function NewProduct({ pro }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 justify-center items-center gap-3 md:gap-6">
      {/* products new */}
      {pro?.products?.slice(0,5).map((e, index) => {
        return (
          <ProductCard
            key={e?.id || index}
            id={e?.id}
            name={e?.name}
            image={e?.images[0]}
            price={e?.price}
            description={e?.description}
          />
        );
      })}
    </div>
  );
}
export default NewProduct;
