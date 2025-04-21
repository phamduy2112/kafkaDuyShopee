import ItemProduct from '@/components/product/ItemProduct'
import { Container } from '@/components/Style/Container'
import { Button } from '@/components/ui/button'
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Popover } from '@radix-ui/react-popover'
import React, { useState } from 'react'
import FilterPopover from './component/FilterPopover'

function ListProduct() {
  const phoneBrands = ['iPhone', 'Samsung', 'Xiaomi']
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Điện thoại')
  const [priceRange, setPriceRange] = useState<[number, number]>([1000000, 5000000])

  return (
    <Container className='relative'>
      <div className='relative'>
       <FilterPopover/>
      {/* <div className='border  h-[30rem] w-[100%]'>
              <div className="space-y-4">
                <div>
                  <label className="font-semibold">Hãng</label>
                  <RadioGroup
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                    className="space-y-2"
                  >
                    {phoneBrands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <RadioGroupItem value={brand} id={brand} />
                        <label htmlFor={brand} className="text-sm font-medium leading-none">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <label className="font-semibold">Giá tối đa</label>
                  <Slider
                    value={priceRange}
                    onValueChange={(val) => setPriceRange(val as [number, number])}
                    min={0}
                    max={10000000}
                    step={500000}
                    minStepsBetweenThumbs={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span>Giá từ: {priceRange[0].toLocaleString()}₫</span>
                    <span>đến: {priceRange[1].toLocaleString()}₫</span>
                  </div>
                </div>
              </div>
            </div> */}
        <div className=''>
          <div className='grid grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4'>
            {[1, 2, 3, 4, 5]?.length ? (
              [1, 2, 3, 4, 5]?.map((product) => (
                <ItemProduct />
              ))
            ) : (
              <div className="leading-10 overflow-hidden col-span-6 flex flex-col items-center justify-center text-center py-20">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/417/132/original/ecommerce-icon-empty-yellow-shopping-cart-3d-illustration-free-png.png"
                  alt="Không tìm thấy sản phẩm"
                  className="w-[15rem] h-[15rem] mb-4 n"
                />
                <h2 className="text-3xl font-semibold text-gray-800">Không có mặt hàng này</h2>
                <p className="text-gray-500 mt-2">
                  Chúng tôi không tìm thấy sản phẩm nào phù hợp với tìm kiếm của bạn.
                </p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="text-2xl mt-6 px-10 py-3 font-medium bg-customColor text-white rounded-xl hover:bg-indigo-800"
                >
                  Trở về trang chủ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListProduct
