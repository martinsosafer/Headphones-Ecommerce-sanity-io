import React from 'react'
import { AiFillInstagram,AiOutlineWhatsApp } from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 CoolHeadphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineWhatsApp/>
      </p>
    </div>
  )
}

export default Footer
