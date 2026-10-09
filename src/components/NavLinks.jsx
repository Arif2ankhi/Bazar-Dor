import Link from 'next/link';
import React from 'react';
import { FcHome } from "react-icons/fc";

const NavLinks = async() => {
    // {real API}
    // const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    // {alternative API}
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data = await res.json()
    const navs = data
  
    return (
        <div className=' container mx-auto flex gap-6 justify-center'>

          <Link className='flex gap-2' href={"/"}><span><FcHome /></span>হোম</Link>
            {navs.map((product) => (
        <Link  key={product.id} href={`/category/${product.slug}`}>
          <span>{product.icon}</span> {product.nameBn}
        </Link>
      ))}
        </div>
    );
};

export default NavLinks;