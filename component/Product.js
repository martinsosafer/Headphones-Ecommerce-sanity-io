import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/sanity/sanity-utils';

export default async function Product() {
  const products = await getProducts();

  
  return (
    <div className='products-container'>
      {products.map((product) => (
        <Link href={`/product/${product.slug}`} key={product._id}>
          <div className='product-card'>
            <img src={product.image && product.image[0]} width={250} height={250} className='product-image' />
            <p className='product-name'>{product.name}</p>
            <p className='product-price'>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
