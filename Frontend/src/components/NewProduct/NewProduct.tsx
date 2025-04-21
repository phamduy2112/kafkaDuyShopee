import React from 'react'

function NewProduct() {
  return (
    <div className='w-center'>
        <div>
        <h2 className='text-[1.5rem] text-primary font-bold my-[1rem]'>News Goods</h2>


        </div>
        <div className="grid grid-cols-3 gap-[1rem]">
        <div className="flex items-center space-x-4 border border-gray-200 p-4 rounded-md w-[100%]">  
      {/* Image */}  
      <img  
        src="https://aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=360%20360w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=540%20540w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?v=1731559810&width=720%20720w,%20//aceno-camping-tech.myshopify.com/cdn/shop/files/product-digital-89.jpg?crop=center&v=1731559810&width=800%20800w"  
        alt="Product"  
        className="w-40 h-24 object-cover rounded-md"  
      />  

    <div>
          {/* Content */}  
      <div className="flex-1">  
        {/* Vendor and rating */}  
        <div className="flex items-center space-x-2 text-sm text-gray-400">  
          <span>Aceno Vendor</span>  
          <span className="flex items-center space-x-1 text-yellow-400">  
            <svg  
              className="w-4 h-4 fill-current"  
              viewBox="0 0 20 20"  
              aria-hidden="true"  
            >  
              <path d="M10 15l-5.878 3.09L5.522 11 1 7.18l6.061-.52L10 1l2.939 5.66 6.061.52-4.522 3.82 1.4 7.09z" />  
            </svg>  
            <span className="text-gray-500">(0)</span>  
          </span>  
        </div>  

        {/* Title */}  
        <h3 className="text-gray-900 font-semibold text-[1rem]">Velatheme Demo CRM Software</h3>  

        {/* Price */}  
        <p className="text-lg font-bold text-blue-900 my-1">$559.00</p>  
      </div>  

      {/* Buttons */}  
      <div className="flex space-x-2">  
        <button className="bg-blue-800 text-white px-8 py-2 rounded hover:bg-blue-900 text-sm">  
          Quick add  
        </button>  

        <button className="border border-gray-300 rounded px-3 py-2 hover:bg-gray-100" aria-label="View details">  
          <svg  
            className="w-5 h-5 text-gray-600"  
            fill="none"  
            stroke="currentColor"  
            strokeWidth="2"  
            viewBox="0 0 24 24"  
            aria-hidden="true"  
          >  
            <path   
              strokeLinecap="round"   
              strokeLinejoin="round"   
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"   
            />  
            <path   
              strokeLinecap="round"   
              strokeLinejoin="round"   
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"   
            />  
          </svg>  
        </button>  

        <button className="border border-gray-300 rounded px-3 py-2 hover:bg-gray-100" aria-label="Favorite">  
          <svg  
            className="w-5 h-5 text-gray-600"  
            fill="none"  
            stroke="currentColor"  
            strokeWidth="2"  
            viewBox="0 0 24 24"  
            aria-hidden="true"  
          >  
            <path   
              strokeLinecap="round"   
              strokeLinejoin="round"   
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"   
            />  
          </svg>  
        </button>  
      </div>  
    </div>
    </div>  
        </div>
   
    </div>
  )
}

export default NewProduct