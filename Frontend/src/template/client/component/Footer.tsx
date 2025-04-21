import { Container } from '@/components/Style/Container';
import React from 'react';  

const Footer = () => {  
  return (  
    
    <footer className="bg-gray-900 text-white  mt-[1rem]">  
    <Container>
    <div className=" mx-auto flex py-6 px-5 flex-col md:flex-row justify-between gap-8">
      {/* Contact */}  
        <div className="md:col-span-1">  
          <h3 className="font-semibold mb-4 text-2xl">Contact</h3>  
          <ul className="space-y-3 text-sm">  
            <li className="flex items-center space-x-2">  
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M7 3v7m8 11v-7m3-4h-4M3 21h18v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2z"></path></svg>  
              <span>16122 Collins street, Melbourne, Australia</span>  
            </li>  
            <li className="flex items-center space-x-2">  
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h6l3 7-3 7H3m6 0h6m-3-7v10m-3-17l-3 3m0 0l-4-1m11 12h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-4 4v-1a1 1 0 011-1h4a1 1 0 011 1v1m-2-5v.01"></path></svg>  
              <span>(603) 555-0123</span>  
            </li>  
            <li className="flex items-center space-x-2">  
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.179 4.036 9.425 9.176 9.95v-7.038H8.896V12h2.28V9.797c0-2.253 1.343-3.496 3.395-3.496.985 0 2.016.176 2.016.176v2.22h-1.14c-1.123 0-1.474.7-1.474 1.417V12h2.5l-.4 2.912h-2.1v7.038C17.964 21.425 22 17.179 22 12z"></path></svg>  
              <a href="mailto:@example.com" className="hover:underline">@example.com</a>  
            </li>  
          </ul>  
          <div className="flex space-x-3 mt-4">  
            {/* Social icons */}  
            <a href="#" aria-label="Facebook" className="hover:text-white">  
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.75c0-2.48 1.49-3.85 3.77-3.85 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v6.99A10 10 0 0022 12z"/></svg>  
            </a>  
            <a href="#" aria-label="X" className="hover:text-white">  
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1.7a9 9 0 01-2.85 1.1A4.52 4.52 0 0016.17 0c-2.5 0-4.51 2.18-3.89 4.65a12.83 12.83 0 01-9.29-4.7A4.52 4.52 0 003.6 7a4.48 4.48 0 01-2-.55v.06A4.52 4.52 0 004.48 10a4.5 4.5 0 01-2 .06 4.52 4.52 0 004.21 3.12A9 9 0 012 17a12.7 12.7 0 006.92 2c8.3 0 12.84-6.88 12.84-12.83 0-.19 0-.37-.01-.56A9 9 0 0023 3z"/></svg>  
            </a>  
            <a href="#" aria-label="Instagram" className="hover:text-white">  
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37a4 4 0 11-4.18-4.18 4 4 0 014.18 4.18z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>  
            </a>  
            <a href="#" aria-label="TikTok" className="hover:text-white">  
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3c6 0 7 6 11 6v4c-1 1-2 2-4 2-3 0-5-1-6-4v7c0 2-1 4-4 4s-4-2-4-4 2-4 4-4 3 1 3 3v-9z"/></svg>  
            </a>  
            <a href="#" aria-label="YouTube" className="hover:text-white">  
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6zm10-4c0-2-1-6-6-6H5c-5 0-5 4-5 5s0 5 5 5h9c5 0 6-4 6-5z"/></svg>  
            </a>  
          </div>  
        </div>  

        {/* Shop */}  
        <div>  
          <h3 className="font-semibold mb-4 text-xl">Shop</h3>  
          <ul className="space-y-2 text-sm cursor-pointer">  
            <li className="hover:underline">Camping</li>  
            <li className="hover:underline">Climbing</li>  
            <li className="hover:underline">Accessories</li>  
            <li className="hover:underline">Clothing</li>  
            <li className="hover:underline">Running</li>  
          </ul>  
        </div>  

        {/* Information */}  
        <div>  
          <h3 className="font-semibold mb-4 text-xl">Information</h3>  
          <ul className="space-y-2 text-sm cursor-pointer">  
            <li className="hover:underline">Register</li>  
            <li className="hover:underline">Login</li>  
            <li className="hover:underline">My Cart</li>  
            <li className="hover:underline">My Order</li>  
            <li className="hover:underline">Wishlist</li>  
          </ul>  
        </div>  

        {/* About */}  
        <div>  
          <h3 className="font-semibold mb-4 text-xl">About</h3>  
          <ul className="space-y-2 text-sm cursor-pointer">  
            <li className="hover:underline">Theme features</li>  
            <li className="hover:underline">Blog</li>  
            <li className="hover:underline">About</li>  
            <li className="hover:underline">FAQs</li>  
            <li className="hover:underline">Contact</li>  
          </ul>  
        </div>  

        {/* Services */}  
        <div>  
          <h3 className="font-semibold mb-4 text-xl">Services</h3>  
          <ul className="space-y-2 text-sm cursor-pointer">  
            <li className="hover:underline">Order history</li>  
            <li className="hover:underline">Customer support</li>  
            <li className="hover:underline">Terms & conditions</li>  
            <li className="hover:underline">Returns & exchanges</li>  
            <li className="hover:underline">Shipping & delivery</li>  
          </ul>  
        </div>  
      </div> 
      <div className='border-t text-center text-[1rem] py-3'>
        Design by zxmot
      </div>
    </Container>
    </footer>  
  );  
};  

export default Footer;  