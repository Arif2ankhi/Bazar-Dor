import React from 'react';
import Link from 'next/link';


const toBn = (num) => {
  if (num === undefined || num === null) return '';
  return Number(num).toLocaleString('bn-BD');
};

const ProductDetails = async ({ params }) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
    // `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
    // { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Product not found');
  }

  const product = await res.json();

  const {
    nameBn,
    category,
    categoryNameBn,
    unit,
    today,
    yesterday,
    change,
    markets = [],
  } = product;

  // সর্বনিম্ন ও সর্বাধিক দাম হিসাব
  const allMinPrices = markets.map((m) => m.min);
  const allMaxPrices = markets.map((m) => m.max);
  const minPrice = allMinPrices.length ? Math.min(...allMinPrices) : today;
  const maxPrice = allMaxPrices.length ? Math.max(...allMaxPrices) : today;

  const diff = today - yesterday;

  return (
    <main className="min-h-screen bg-[#F4F6F4] px-4 py-8 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href="/" className="hover:underline">
            হোম
          </Link>
          {' > '}
          <Link href={`/category/${category}`} className="hover:underline">
            {categoryNameBn}
          </Link>
          {' > '}
          <span className="font-semibold text-slate-800">{nameBn}</span>
        </nav>

        {/* Product Main Card */}
        <div className="mb-6 flex flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
              {product.image || '🍚'}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {nameBn}
              </h1>
              <p className="mt-1 text-xs text-slate-500">
                প্রতি {unit === 'kg' ? 'কেজি' : unit} - {categoryNameBn}
              </p>
              <p className="mt-2 text-xs font-medium text-slate-600">
                গতকালকের তুলনায় আজ দাম {diff >= 0 ? 'বেড়েছে' : 'কমেছে'} •{' '}
                {toBn(Math.abs(diff))} টাকা
              </p>
            </div>
          </div>

          {/* Today's Price Box */}
          <div className="min-w-[150px] rounded-2xl border border-slate-100 bg-[#F8FAF9] p-4 text-center sm:text-right">
            <span className="text-xs font-medium text-slate-400">
              আজকের দাম
            </span>
            <div className="mt-1 text-3xl font-extrabold text-slate-900">
              {toBn(today)}
            </div>
            <div className="text-xs text-slate-500">
              টাকা / {unit === 'kg' ? 'কেজি' : unit}
            </div>
            <div
              className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${
                change?.dir === 'up'
                  ? 'text-red-600'
                  : change?.dir === 'down'
                  ? 'text-emerald-600'
                  : 'text-slate-500'
              }`}
            >
              <span>
                {change?.dir === 'up'
                  ? '▲'
                  : change?.dir === 'down'
                  ? '▼'
                  : '—'}
              </span>
              <span>{toBn(Math.abs(change?.pct || 0))}%</span>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                সর্বনিম্ন দাম
              </span>
              <div className="mt-2 text-xl font-bold text-emerald-600">
                {toBn(minPrice)} টাকা
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                সর্বাধিক দাম
              </span>
              <div className="mt-2 text-xl font-bold text-red-500">
                {toBn(maxPrice)} টাকা
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <span className="text-xs font-medium text-slate-500">
                গড় দাম
              </span>
              <div className="mt-2 text-xl font-bold text-emerald-700">
                {toBn(today)} টাকা
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                প্রতি {unit === 'kg' ? 'কেজি' : unit}-এর হিসাবে
              </p>
            </div>
          </div>
        </div>

        {/* Market Table */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-900">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-100 text-xs text-slate-400">
                  <th className="pb-3 font-medium">বাজার</th>
                  <th className="pb-3 font-medium">বিভাগ</th>
                  <th className="pb-3 text-right font-medium">সর্বনিম্ন</th>
                  <th className="pb-3 text-right font-medium">সর্বাধিক</th>
                  <th className="pb-3 text-right font-medium">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {markets.map((m, index) => {
                  const avg = Math.round((m.min + m.max) / 2);
                  return (
                    <tr key={index} className="hover:bg-slate-50/60">
                      <td className="py-3.5 font-medium text-slate-800">
                        {m.market}
                      </td>
                      <td className="py-3.5 text-slate-500">{m.division}</td>
                      <td className="py-3.5 text-right font-medium text-slate-700">
                        {toBn(m.min)} টাকা
                      </td>
                      <td className="py-3.5 text-right font-medium text-slate-700">
                        {toBn(m.max)} টাকা
                      </td>
                      <td className="py-3.5 text-right font-semibold text-slate-900">
                        {toBn(avg)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

