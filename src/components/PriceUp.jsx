import React from "react";
import ProductCard from "./ProductCard";

const PriceUp = ({ products = [] }) => {
  const priceUpProducts = products
    .filter((p) => p.change?.dir === "up")
    .slice(0, 6);

  if (priceUpProducts.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-red-600">▲</span>
        <h2 className="text-xl font-bold text-slate-900">আজ দাম বেড়েছে</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priceUpProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceUp;
