import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";



export default async function Home() {

  // {Original API}
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
  // {Alternative Api}
  // const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')
  const data = await res.json()
  const products = data
  
//  console.log(products);
 


  return (
    <main className="min-h-screen bg-[#F7F9F8] py-6">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Banner */}
        <Banner />

        {/* Price Increased Section */}
        <PriceUp products={products} />

        {/* Price Decreased Section */}
        <PriceDown products={products} />

        {/* All Products Section */}
        <AllProducts products={products} />
      </div>
    </main>

  //  <div>
  //   <Banner/>
  // {/* {price up and price down seection } */}
  //   <div>
  //   <PriceUp/>
  //   </div>

  //   <div>
  //   <PriceDown/>
  //   </div>
    
    

  //   <div>
  //     {
  //       // products.map(product => )
  //     }
  //   </div>
    
  //  </div>
  // );
  );
}

