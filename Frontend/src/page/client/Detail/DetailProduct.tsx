import ItemProduct from '@/components/product/ItemProduct';
import { Container } from '@/components/Style/Container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import { CiStar } from "react-icons/ci";
import CommentProduct from './component/CommentProduct';
import CommentForm from './component/FormComment';

function DetailProduct() {

    return (
        <Container>
            <div className="flex flex-col relative md:flex-row w-[1300px] border m-auto gap-8 bg-white rounded-lg p-[1rem]">
                <div className=" w-[550px]  px-6 ">
                    <div className="w-[500px] border">
                        <img
                            className="w-full mx-auto"
                            src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2020/06/2-3-595x595.jpg"
                            alt="product image"
                        />
                    </div>
                    <div className='flex gap-[1rem] mt-[1rem] items-center'>

                        <div className='w-[100px] border rounded-[.2rem]'>
                            <img src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2020/06/2-3-595x595.jpg" alt="" />
                        </div>
                        <div className='w-[100px] border rounded-[.2rem]'>
                            <img src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2020/06/2-3-595x595.jpg" alt="" />
                        </div>
                        <div className='w-[100px] border rounded-[.2rem]'>
                            <img src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2020/06/2-3-595x595.jpg" alt="" />
                        </div>
                        <div className='w-[100px] border rounded-[.2rem]'>
                            <img src="https://elessi.b-cdn.net/elementor/wp-content/uploads/2020/06/2-3-595x595.jpg" alt="" />
                        </div>
                    </div>
                    <div className='border-t my-4 '></div>
            <div className=' '>
                <h4 className='text-[1.4rem] font-bold'>Thông số kĩ thuật</h4>
                <img src="https://cdn.tgdd.vn/Products/Images/44/305008/Kit/asus-vivobook-15-x1504va-i5-nj025w-note.jpg" alt="" />
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1" className=''>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1" className=''>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

            </div>
            {/* avaluate */}
            <div>
            <h4 className='text-[1.1rem]'>Đánh giá Laptop Asus Vivobook 15 X1504VA i5 1335U/8GB/512GB/Win11 (NJ025W)</h4>

            </div>
                </div>
                <div className='p-6 border w-[700px] sticky top-6 self-start'>
                <div>
                        <h3 className='text-[1.4rem] font-bold'>Sony Xperia Z5  </h3>
                        <div className='flex text-[1.1rem] text-yellow-500'>
                            <CiStar />
                        </div>
                        <div className='border-t my-2'>

                        </div>
                        <div>
                            <div className='text-[1.5rem] font-bold text-red-600'>
                                $96.00
                            </div>
                            <div>
                                Dung lượng:
                            </div>
                            <div>
                                Màu sắc:
                            </div>
                        </div>
                        <div className="rounded-lg p-6 bg-white shadow-md mb-6">
                            <ul className="space-y-3 items-center text-[.9rem]">
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                    Miễn phí vận chuyển toàn quốc
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                                    </svg>
                                    Bảo hành 18 tháng chính hãng
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                                    </svg>
                                    Bao xài đổi lỗi trong 30 ngày nếu có lỗi phần cứng
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                                    </svg>
                                    Giá đã bao gồm VAT
                                </li>
                            </ul>
                        </div>

                        {/* Promotions Section */}
                        <div className="rounded-lg p-6 bg-white shadow-md mb-6">
                            <div className="flex justify-between items-center mb-4 text-[.8rem]">
                                <h3 className="font-semibold text-[1rem]">Khuyến mãi</h3>
                                <span className="text-gray-500">Áp dụng từ 1/10 - 31/10</span>
                            </div>
                            <ul className="space-y-3 text-[0.9rem]">
                                <li className="flex items-start ">
                                    <span className="text-yellow-500 mr-3">🏅</span> Giảm ngay 600.000đ (đã trừ giá)
                                </li>
                                <li className="flex items-start ">
                                    <span className="text-yellow-500 mr-3">🏅</span> Trợ giá 4G: Giảm thêm 300.000đ
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3">🏅</span> Thu cũ máy 2G, 3G lên đời máy 4G
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-500 mr-3">🏅</span> Mua kèm củ sạc 15W giá 169.000đ
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4 mt-4">
                  <button 
               
                  className="w-1/2 border py-3 text-[1.2rem] font-medium rounded-2xl hover:bg-purple-100">
                    Thêm giỏ hàng
                  </button>
                  <button 
               
                  className="w-1/2 border py-3 text-[1.2rem] font-medium rounded-2xl hover:bg-purple-100">
                    Mua Ngay
                  </button>
                
                </div>          
                <div>
                    </div>          

            
                    </div>
                    
                </div>
                
           
            </div>
            <CommentProduct/>
            <CommentForm/>
        </Container>
    )
}

export default DetailProduct