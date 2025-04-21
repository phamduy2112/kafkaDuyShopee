import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa'
import ItemProduct from './components/product/ItemProduct'
import TrendingProduct from './components/trendingProduct/TrendingProduct'
import LikeProduct from './components/likeProduct/LikeProduct'
import NewProduct from './components/NewProduct/NewProduct'
import Footer from './template/client/component/Footer'
import { FiBox } from 'react-icons/fi'
import { HiLockClosed } from 'react-icons/hi'
import { CgShoppingBag } from 'react-icons/cg'
import { Input } from './components/ui/input'
import Cart from './page/client/Cart/Cart'
import Home from './page/client/Home/Home'
import SearchProduct from './page/client/search/Search'
import ListProduct from './page/client/listProduct/ListProduct'
import DetailProduct from './page/client/Detail/DetailProduct'

function App() {

  return (
   <>
     <div className='bg-[#323f81]'>
           <div className='flex justify-between items-center w-center h-[35px]'>
             <div className='text-white'>Tưng bừng khai trường</div>
           </div>
         </div>
         <div className='h-[50px] border flex w-center justify-between items-center'>
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
         </div>
         <div>
   
         </div>
         <DetailProduct/>
   {/* <Home/> */}
   <Footer/>
   </>
  )
}

export default App
