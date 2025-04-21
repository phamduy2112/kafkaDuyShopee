import React from 'react'
import ItemProduct from '../product/ItemProduct'
import { Button } from '../ui/button'

function TrendingProduct() {
  return (
    <div className='w-center'>
        
        <div className='flex justify-between items-center'>
          <h2 className='text-[1.5rem] text-primary font-bold mb-[1rem]'>Top Trending 2025</h2>
          <div className='flex gap-[1rem]'>
            <Button className=''>All Departments</Button>
            <Button variant={"outline"} className=''>Mobile & Tablets</Button>
            <Button variant={"outline"} className=''>Smart Watch</Button>
            <Button variant={"outline"} className=''>Accessories</Button>
          </div>
        </div>
        <div className=' grid grid-cols-6 gap-[2rem]'>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      </div> 
      </div>
  )
}

export default TrendingProduct