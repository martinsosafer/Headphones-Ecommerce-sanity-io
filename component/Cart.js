"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from "react-icons/ti"
import { toast } from 'react-hot-toast'
import { UseGlobalContext } from '@/app/context/store'
import  axios  from 'axios'
function Cart() {
  const cartRef = useRef();

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = UseGlobalContext()
  
  const handleCheckout = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/checkoutStripe',
      {
      priceId: cartItems[0].priceId
      },
    
    )
    window.location.assign(data)
  }
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items )</span>
          </button>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shooping bag is empty</h3>
            <Link href="/">
              <button type='button' onClick={()=>setShowCart(false)} className='btn'>
              Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={item?.image[0]} 
                className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className="button rounded-full bg-red-500 text-white mr-2"
                      onClick={() => toggleCartItemQuantity(item._id, 'dec') }
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="quantity-value bg-gray-200 rounded-lg px-3 py-1 mr-2">
                        {item.quantity}
                      </span>
                      <span className="button rounded-full bg-green-500 text-white mr-2"
                      onClick={() => toggleCartItemQuantity(item._id, 'inc') }>
                        <AiOutlinePlus />
                      </span>
                  </p>
                  </div>
                  <button type='button'
                    className='remove-item'
                    onClick={()=> onRemove(item)}
                  >
                    <TiDeleteOutline/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button'
              className='btn'
              onClick={handleCheckout}
              >Pay with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart