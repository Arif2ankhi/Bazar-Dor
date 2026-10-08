

import React from 'react';
import MarqueeText from "react-marquee-text"

const Marquee = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
  const headlines = await res.json();
  // console.log(headlines);

  return (
    <div className=''>
      <MarqueeText className="py-1 px-5" direction="right" duration={300}>
      <div className="bg-cyan-100 py-2 border-y overflow-hidden whitespace-nowrap">
      <div className="flex gap-8">
        {headlines.map((h) => (
          <div key={h.id} className="flex items-center gap-2 text-sm font-medium">
            <span className="text-gray-800">{h.nameBn}</span>
            <span className="text-gray-600">
              {h.today} টাকা/{h.unit === 'kg' ? 'কেজি' : h.unit}
            </span>
            <span
              className={`text-xs font-semibold ${
                h.change?.dir === 'up'
                  ? 'text-red-500'
                  : h.change?.dir === 'down'
                  ? 'text-green-500'
                  : 'text-gray-500'
              }`}
            >
              {h.change?.dir === 'up' ? '▲' : h.change?.dir === 'down' ? '▼' : '–'} {h.change?.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
    </MarqueeText>
    </div>
  );
};

export default Marquee;