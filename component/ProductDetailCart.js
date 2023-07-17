"use client"
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { UseGlobalContext } from '@/app/context/store';
export default function ProductDetailCart({ product }) {
  const { decQty, incQty, qty ,onAdd} = UseGlobalContext();
  return (
    <div className="quanity">
      <h3 className="text-lg font-bold">Quantity:</h3>
      <p className="quantity-desc flex">
        <span className="button rounded-full bg-red-500 text-white mr-2" onClick={decQty}>
          <AiOutlineMinus />
        </span>
        <span className="quantity-value bg-gray-200 rounded-lg px-3 py-1 mr-2">
          {qty}
        </span>
        <span className="button rounded-full bg-green-500 text-white mr-2" onClick={incQty}>
          <AiOutlinePlus />
        </span>
      </p>
      <div className='buttons'>
        <buttton type="button"
          className="add-to-cart"
          onClick={()=> onAdd(product, qty)}
        >Add to Cart
        </buttton>
        <button type='button'
          className='buy-now'
        onClick=""
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
