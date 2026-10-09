import ProductCategoryClient from '@/components/ProductCategoryClient';

const ProductCategory = async ({ params }) => {
const { categoryId } = await params;

const res = await fetch(
    // {real api}
`https://api.api-store.workers.dev/api/bazardor/products?category=${encodeURIComponent(categoryId)}`

// {Alternative API}
// `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(categoryId)}`
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










