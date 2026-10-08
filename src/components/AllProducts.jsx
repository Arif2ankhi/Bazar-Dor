import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = ({ products = [] }) => {
  return (
    <section className="mb-12">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">সব পণ্য</h2>
        <p className="text-xs text-slate-500">
          মোট {products.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
