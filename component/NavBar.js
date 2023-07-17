"use client"
import React from 'react'
import Link from 'next/link'
import{AiOutlineShop} from "react-icons/ai"
import { Cart } from './'
import { UseGlobalContext } from '@/app/context/store'
function NavBar() {
  const {showCart, setShowCart , totalQuantities} =UseGlobalContext()
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">CoolHeadPhones</Link>
      </p>
      <button type="button" className='cart-icon' onClick={()=> setShowCart(true)}>
        <AiOutlineShop/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

     {showCart && <Cart />}
    </div>
  )
}

export default NavBar