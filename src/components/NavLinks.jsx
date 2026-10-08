import Link from 'next/link';
import React from 'react';

const NavLinks = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data = await res.json()
    const navs = data
    // console.log(navs);
    return (
        <div className=' container mx-auto flex gap-6 justify-center'>
            {/* {
                navs.map((product, id) => <Link key={slug} href={product.id}>{product.nameBn}</Link>)
            } */}
            {navs.map((product) => (
        <Link  key={product.id} href={`/category/${product.slug}`}>
          <span>{product.icon}</span> {product.nameBn}
        </Link>
      ))}
        </div>
    );
};

export default NavLinks;