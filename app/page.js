import { Product,FooterBanner,HeroBanner } from "@/component"

export default async function Home() {
  
  
  
  return (
   
    <>
      {/* <div>
        {products.map((product) => (
          <div key={product._id}>{product.name}</div>
        ))}
      </div> */}
     <HeroBanner/>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      
        <Product/>
     
      <FooterBanner/>
    </>
  )
}
