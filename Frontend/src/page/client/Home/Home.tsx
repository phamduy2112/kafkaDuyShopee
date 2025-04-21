import LikeProduct from '@/components/likeProduct/LikeProduct'
import NewProduct from '@/components/NewProduct/NewProduct'
import ItemProduct from '@/components/product/ItemProduct'
import { Container } from '@/components/Style/Container'
import TrendingProduct from '@/components/trendingProduct/TrendingProduct'
import React from 'react'
import { CgShoppingBag } from 'react-icons/cg'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'

function Home() {
  return (
    <>
      <div className='bg-[#323f81]'>
        <div className='flex justify-between items-center w-center h-[35px]'>
          <div className='text-white'>Tưng bừng khai trường</div>
        </div>
      </div>
      <Container className='h-[50px] border flex  justify-between items-center'>
        <div className='text-zinc-600  text-2xl flex gap-[3rem]'>
          <h4>DuyStore
          </h4>
          <div>
            <div className=' flex justify-center items-center gap-4'>
              <li>
                <div className='text-zinc-700 text-[1.1rem] mt-[.3rem]'>Home</div>
              </li>
              <li>
                <div className='text-zinc-700 text-[1.1rem] mt-[.3rem]'>Product</div>
              </li>
              <li>
                <div className='text-zinc-700 text-[1.1rem] mt-[.3rem]'>Blog</div>
              </li>
              <li>
                <div className='text-zinc-700 text-[1.1rem] mt-[.3rem]'>Contact</div>
              </li>
            </div>
          </div>
        </div>

        <div className='flex gap-[1rem]'>
         
          <div className='flex gap-1'>
          <FaRegHeart  className='text-[1.1rem]' />
          <CgShoppingBag   className='text-[1.1rem]'/>
            <FaRegUser className='text-[1.1rem]' />
       
          </div>
        </div>
      </Container>
      <div>

      </div>
      <div className='w-[100%] bg-zinc-800 h-[90vh] py'>
        <img
          className='w-full h-full '
          src="//elexy-demo.myshopify.com/cdn/shop/files/hero-5-one.png?v=1720515340&width=3840" alt="" />
      </div>
      {/*  */}
      <Container className=' flex justify-between py-[3rem]'>
        <div className='w-[20rem] relative '>
          <div className='absolute top-[10%] left-[12%] flex flex-col'>
            <h4 className='text-[1rem] text-center'>SMART WATCH</h4>
            <h2 className='text-[1.5rem]'>Smart & Handy Watch</h2>
            <a href="#" className='text-[1rem] text-center '>Shop Now</a>
          </div>
          <img
            className='w-[100%] rounded-xl'
            src="https://elexy-demo.myshopify.com/cdn/shop/files/home-5-banner-1_dad8fffe-27be-44e8-9dd9-61dd313c065a.png?v=1720517629&width=1100" alt="Smart Watch" />

        </div>



      </Container>
      {/* Flash sale */}
      <Container className=''>
        
        <div className='flex justify-between items-center'>
          <h2 className='text-[1.5rem] text-primary font-bold mb-[1rem]'>Flash Sale</h2>
          <p></p>
        </div>
        <div className=' grid grid-cols-6 gap-[.3rem]'>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      </div> 
      </Container>
      <div className='w-center flex justify-between py-[3rem]'>
        <div className='w-[20rem] relative '>
          <div className='absolute top-[10%] left-[12%] flex flex-col'>
            <h4 className='text-[1rem] text-center'>SMART WATCH</h4>
            <h2 className='text-[1.5rem]'>Smart & Handy Watch</h2>
            <a href="#" className='text-[1rem] text-center '>Shop Now</a>
          </div>
          <img
            className='w-[100%] rounded-xl'
            src="https://elexy-demo.myshopify.com/cdn/shop/files/home-5-banner-1_dad8fffe-27be-44e8-9dd9-61dd313c065a.png?v=1720517629&width=1100" alt="Smart Watch" />

        </div>



      </div>
     <div>
      <TrendingProduct/>
     </div>
     <div className='w-center flex justify-between py-[3rem]'>
        <div className='w-[20rem] relative '>
          <div className='absolute top-[10%] left-[12%] flex flex-col'>
            <h4 className='text-[1rem] text-center'>SMART WATCH</h4>
            <h2 className='text-[1.5rem]'>Smart & Handy Watch</h2>
            <a href="#" className='text-[1rem] text-center '>Shop Now</a>
          </div>
          <img
            className='w-[100%] rounded-xl'
            src="https://elexy-demo.myshopify.com/cdn/shop/files/home-5-banner-1_dad8fffe-27be-44e8-9dd9-61dd313c065a.png?v=1720517629&width=1100" alt="Smart Watch" />

        </div>



      </div>
{/*  */}
    <div>
      <NewProduct/>
    </div>
     {/*  */}
    <div className='py-[1rem]'>
      <LikeProduct/>
    </div>
    {/*  */}
    <div className='w-center py-[2rem]'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 justify-center items-center'>
          <FiBox className='text-[2rem]'/>
          <div>
            <h3 className='font-bold text-[1.1rem]'>Free Shipping & Return</h3>
            <p className='text-[.9rem] text-gray-600 mt-1'>Free Shipping for all order over $100</p> 
          </div>
           
        </div>
      </div>
    </div>

    </>
  )
}

export default Home