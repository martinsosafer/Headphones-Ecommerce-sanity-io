import React from 'react'
import Link from 'next/link'
import { getBanner } from '@/sanity/sanity-utils'


export default async function  HeroBanner(){
  const [banner] = await getBanner();
  
  return (
    
   <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <img src={banner.image} alt="imagen banner " className="hero-banner-image" />
        <div>
          <Link href={`/product/${banner.product}`}>
            <button type="button">{banner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>THE</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
  

