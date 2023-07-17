import React from 'react'
import Link from 'next/link';
import { getBanner } from '@/sanity/sanity-utils';

export default  async function FooterBanner() {
  const [banner] = await getBanner();
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{banner.discount}</p>
          <h3>{banner.largeText1}</h3>
          <h3>{banner.largeText2}</h3>
          <p>{banner.saleTime}</p>

        </div>
        <div className='right'>
          <p>{banner.smallText}</p>
          <h3>{banner.midText}</h3>
          <p>{banner.desc}</p>
          <Link href={`/product/${banner.product}`}>
            <button type="button">{banner.buttonText}</button>
          </Link>
        </div>
        <img src={banner.image} alt='headphones' className='footer-banner-image'/>
      </div>
    </div>
  )
}


