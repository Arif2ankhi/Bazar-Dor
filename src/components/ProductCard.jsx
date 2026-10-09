import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  const { nameBn, unit, image, today, change } = product;

 
  const toBengaliNumber = (num) => {
    return num.toLocaleString('bn-BD');
  };

  
  const isUp = change?.dir === 'up';
  const isDown = change?.dir === 'down';

  const badgeBg = isUp
    ? 'bg-red-50 text-red-600'
    : isDown
    ? 'bg-emerald-50 text-emerald-600'
    : 'bg-gray-100 text-gray-500';

  const arrow = isUp ? '▲' : isDown ? '▼' : '—';

  return (
    <Link href = {`/product/${product.id}`}>
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Left side: Icon + Name */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl">
          {image || '🍚'}
        </div>
        <div>
          <h3 className="font-bold text-slate-800">{nameBn}</h3>
          <p className="text-xs text-blue-400 font-bold mt-2">প্রতি {unit === 'kg' ? 'কেজি' : unit}</p>
        </div>
      </div>

      {/* Right side: Price + Percentage Change */}
      <div className="text-right">
        <span className="block text-xs text-emerald-700 font-bold mr-18">আজকের দাম </span>
        <div className="mt-1 flex items-center justify-end gap-2">
          <span className="text-lg font-bold text-slate-900">
            {toBengaliNumber(today)} টাকা
          </span>
          <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${badgeBg}`}>
            <span>{arrow}</span>
            <span>{toBengaliNumber(Math.abs(change?.pct || 0))}%</span>
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
