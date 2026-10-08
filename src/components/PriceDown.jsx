import React from "react";
import ProductCard from "./ProductCard";

const PriceDown = ({ products = [] }) => {
  const priceDownProducts = products
    .filter((p) => p.change?.dir === "down")
    .slice(0, 6);

  if (priceDownProducts.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-emerald-600">▼</span>
        <h2 className="text-xl font-bold text-slate-900">আজ দাম কমেছে</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priceDownProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceDown;
