'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';

const ProductCategoryClient = ({
products,
categoryNameBn,
categoryIcon,
}) => {
const [sortOrder, setSortOrder] = useState('default');

const sortedProducts = useMemo(() => {
const result = [...products];


if (sortOrder === 'asc') {
  result.sort((a, b) => a.today - b.today);
} else if (sortOrder === 'desc') {
  result.sort((a, b) => b.today - a.today);
}

return result;


}, [products, sortOrder]);

return ( <section>
{/* Category title + Sort control */} <div className="mb-6 flex flex-wrap items-center justify-between gap-4"> <h1 className="text-2xl font-bold">
{categoryIcon} {categoryNameBn} </h1>


    <div className="flex items-center gap-2">
      <label
        htmlFor="price-sort"
        className="whitespace-nowrap text-sm font-medium"
      >
        সাজান:
      </label>

      <select
        id="price-sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="default">ডিফল্ট</option>
        <option value="asc">দাম: কম থেকে বেশি</option>
        <option value="desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  </div>

  {/* Products */}
  {sortedProducts.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  ) : (
    <p className="py-10 text-center text-gray-500">
      এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
    </p>
  )}
</section>


);
};

export default ProductCategoryClient;
