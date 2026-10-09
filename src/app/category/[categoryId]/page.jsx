
// import ProductCard from '@/components/ProductCard';
// import React from 'react';

// const ProductCategory = async ({ params }) => {
// const { categoryId } = await params;

// const res = await fetch(
// `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
// );

// const data = await res.json();
// const productCategory = data;

// const category = productCategory[0];

// return ( <div className="text-2xl font-bold"> <h1>
// {category?.categoryIcon} {category?.categoryNameBn} </h1>


 
 
// );
// };

// export default ProductCategory;


import ProductCategoryClient from '@/components/ProductCategoryClient';

const ProductCategory = async ({ params }) => {
const { categoryId } = await params;

const res = await fetch(
`https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(categoryId)}`
);

if (!res.ok) {
throw new Error('পণ্যের তথ্য লোড করা যায়নি');
}

const data = await res.json();

const products = Array.isArray(data) ? data : [];
const category = products[0];

return ( <div className="container mx-auto px-4 py-6">
<ProductCategoryClient
products={products}
categoryNameBn={category?.categoryNameBn ?? categoryId}
categoryIcon={category?.categoryIcon ?? ''}
/> </div>
);
};

export default ProductCategory;










