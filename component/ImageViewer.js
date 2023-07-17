"use client"
import { useState } from "react"

export default function ImageViewer({ product }) {
  
 const [index, setIndex] = useState(0)
  return (
    <div>

    <div className='image-container'>
      <img src={product.image[index]} className="product-detail-image"/>
    </div>
    <div>
        {product.image?.map((item, i) => (
          <img
            src={item}
            className={
                i === index
                ? "small-image selected-image"
                : "small-image"
            }
            onMouseEnter={()=> setIndex(i)}
          />
        ))}
    </div>
    </div>
  )
  
}
