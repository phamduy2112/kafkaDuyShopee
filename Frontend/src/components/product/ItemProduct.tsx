import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { Button } from '../ui/button'

function ItemProduct() {
  return (
    <div className='w-[100%] border px-[1rem] pb-[.5rem] overflow-hidden h-[22rem]'>
        <div className='w-[200px] m-auto'>
            <img src="https://aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=360%20360w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=540%20540w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=720%20720w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?crop=center&v=1731559810&width=800%20800w" alt="" />
       
       
        </div>
        <div className=''>
          <div className='flex items-center justify-between'>
          <p className='text-[.9rem] text-gray-500'>Laptop</p>
            <div className='flex gap-1 text-[.9rem] justify-center items-center'>
                <IoMdStar className='text-yellow-400'/>
               <span className='text-yellow-400'>0.00</span> (0)
            </div>
            
          </div>
        <div>
            <p className='text-[1rem]'>            Lorem ipsum dolor sit amet.
            </p>
            <div className='font-bold'>
            {/* <p className='text-[1.25rem] pt-[.3rem] text-[#5a5db5]'>
            $265.50
                </p> */}
            <p className='text-[1.2rem] pt-[.3rem] text-red-500'>
            $265.50
            <span className='text-[.9rem] text-gray-500 ml-[.2rem]'
            style={{textDecoration:"line-through"}}
            >$33</span>

                </p>
            </div>

        </div>
        <div className='py-2'>
            <Button 
            variant={"default"} className='bg-[#323f81] w-[100%]'>Add to cart</Button>
        </div>
        </div>

    </div>
  )
}

export default ItemProduct