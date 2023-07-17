
import { Product } from '@/component';
import ImageViewer from '@/component/ImageViewer';
import ProductDetailCart from '@/component/ProductDetailCart';
import { getProduct, getProducts } from '@/sanity/sanity-utils';
import React from 'react';
import {  AiFillStar,AiOutlineStar} from 'react-icons/ai';

export default async function ProductDetails({params}) {
  const slug = params.slug; // Assuming 'slug' is the parameter name for the product slug
  const product = await getProduct(slug);
  const products = await getProducts();
  // console.log("productttttttttttttts", products);
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <ImageViewer product={product} />
        </div>
        <div className='product-detail-desc'>
          <h1>{product.name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details:</h4>
          <p>{product.details}</p>
          <p className='price'>${product.price}</p>
          <ProductDetailCart product={product} />
        </div>
      </div>
     <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
   

      
  );
}


