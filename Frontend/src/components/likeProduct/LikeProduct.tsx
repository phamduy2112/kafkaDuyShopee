import React from 'react'
import ItemProduct from '../product/ItemProduct'
import { Button } from '../ui/button'
// https://aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?v=1732296122&width=360%20360w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?v=1732296122&width=540%20540w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?v=1732296122&width=720%20720w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?v=1732296122&width=900%20900w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?crop=center&v=1732296122&width=912%20912w
function LikeProduct() {
  return (
    <div className='w-center'>
        
    <div className='flex justify-between items-center'>
      <h2 className='text-[1.5rem] text-primary font-bold mb-[1rem]'>
      You Might Also Like
      </h2>
      <div className='flex gap-[1rem]'>

      </div>
    </div>
    <div className='grid grid-cols-6 gap-[2rem] auto-rows-fr'>
  <div className="col-span-2 row-span-2">
    <img
      className="w-full h-full object-cover rounded-lg"
      src="https://aceno-camping-tech.myshopify.com/cdn/shop/files/aceno-tech-20-min.jpg?v=1732296122&width=912"
      alt="Product"
    />
  </div>
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />
  <ItemProduct />

</div>

  </div>
  )
}

export default LikeProduct