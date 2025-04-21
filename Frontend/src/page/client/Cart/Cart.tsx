import { Container } from "../../../components/Style/Container";
import { FaTrash } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";


export default function Cart() {

  const [listCart,setListCart] = useState(
    [
        {
          "product_id": 1,
          "product_name": "Laptop ASUS TUF Gaming F15",
          "product_price": 18990000,
          "product_discount": 10,
          "product_quantity": 1,
          "image": "https://example.com/images/asus-tuf-f15.jpg",
          "description": "Laptop gaming mạnh mẽ với CPU Intel i7, GPU RTX 3050, màn hình 144Hz.",
          "category_id": 2,
          "brand": "ASUS",
          "color": "Đen",
          "warranty": "24 tháng",
          "stock": 12
        },
    
      ]
  );
  const totalItem = 0
  const getDiscount=0
  const getShip=0
  


  const handleRemoveItem = (product_id: any) => {
    // dispatch(removeItemFromCart({ product_id }));
  };
//   const navigate = useNavigate();
  const decreaseItem = (product_id: any) => {
    // dispatch(decreaseItemQuantity({ product_id }));
  };
  const inCreaseItem = (product_id: any) => {
    // dispatch(inCreaseItemQuantity({ product_id }));
  };
  const removeAllItem = () => {
    // dispatch(removeAllCart());
  };
  const handleDecrease = (productId: string, quantity: number) => {
    if (quantity > 1) {
    //   dispatch(decreaseItemQuantity({ product_id: productId })); // Decrease quantity if more than 1
    } else {
      // Show confirmation when quantity is 1
    //   Popconfirm.confirm({
    //     title: "Bạn có chắc muốn xóa sản phẩm này?",
    //     onConfirm: () => dispatch(removeItemFromCart({ product_id: productId })), // Remove item if confirmed
    //   });
    }
  };
  const showModal = () => {
   
  };

    // Áp dụng mã giảm giá
  
    const totalPrice = listCart.reduce((total: number, item) => {
      // Tính giá sản phẩm ban đầu cộng thêm giá storage
      const basePriceWithStorage = item.product_price + Number(item?.selectedStorage?.storage_price || 0);
    
      // Tính giảm giá
      const discountAmount = (basePriceWithStorage * item.product_discount) / 100;
    
      // Giá sau khi giảm
      const priceAfterDiscount = basePriceWithStorage - discountAmount;
    
      // Tính tổng giá của sản phẩm (giá sau giảm x số lượng)
      const itemTotalPrice = item.quantity * priceAfterDiscount;
    
      // Cộng dồn vào tổng giá
      return total + itemTotalPrice;
    }, 0);
  const totalPriceWithVoucher = totalPrice * (1 - getDiscount / 100) + getShip;

  // 10000 - (10000 * 10 / 100); mã khuyết mãi
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => setIsLoading(false), timeLoading)
  }, []);



  return (
<Container>
<div className="py-6 text-[1.5rem]">
    <div className="mx-auto">
     

      {/* Responsive Container */}
      <div className="flex flex-col-reverse lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Cart Items */}
        <div className="flex-1 space-y-4 md:space-y-6">
          {/* Header */}
          <div className="bg-white py-3 md:py-5 rounded-lg shadow">
            <div className="flex  items-center px-3 md:px-5 ">
              <div className="w-[45%] md:w-[50%] lg:w-[45%]">
                <h2 className="text-[1rem] md:text-[1.3rem] font-semibold text-center">Sản phẩm</h2>
              </div>
              <div className="w-[25%] md:w-[25%] lg:w-[20%]">
                <h2 className="text-[1rem] md:text-[1.3rem] font-semibold text-center">Số lượng</h2>
              </div>
              <div className="w-[25%] md:w-[20%] lg:w-[25%]">
                <h2 className="text-[1rem] md:text-[1.3rem] font-semibold text-center">Tổng giá</h2>
              </div>
              <div className="w-[5%] md:w-[5%] lg:w-[10%]"></div>
            </div>
          </div>

          {/* Cart Items */}
          {listCart.map((item) => (
            <div key={item.product_id} className="bg-white  rounded-lg shadow">
              <div className="flex items-center px-3 md:px-5 py-3 md:py-5">
                <div className="flex gap-2 md:gap-4 w-[45%] md:w-[50%] lg:w-[45%] items-center">
            <div className="w-[6rem] md:w-[8rem] ">
            <img
          src=""
                    alt="Product"
                    className="w-[100%] h-[100%] object-cover rounded-lg"
                  />
            </div>
                  <div className="flex-1 leading-10 min-w-0">
                    <h2 className="text-[1.3rem] md:text-[1.5rem]
                    
                    lg:text-[1.4rem] font-semibold line-clamp-2">
                    {item?.product_name}
                    </h2>
                
                    <div className="flex flex-col text-[1.1rem]">
                     3.000.000đ
                    </div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center w-[25%] md:w-[25%] lg:w-[20%]">
                <button
    //   onClick={() => handleDecrease(item.product_id, item.quantity)}
      className="px-[.9rem] cursor-pointer py-2 border border-gray-300 rounded-lg text-[1rem] md:text-[1rem] lg:text-[1rem]"
      >
      -
    </button>

  <span className="mx-2 font-semibold text-[1rem]">0</span>

  <button 
    // onClick={() => inCreaseItem(item.product_id)} 
    className="px-[.8rem] 
    cursor-pointer
    py-2 border border-gray-300 rounded-lg text-[1rem] md:text-[1rem] lg:text-[1rem]">
    +
  </button>
</div>


                {/* Total Price */}
                <div className="w-[25%] md:w-[20%] lg:w-[25%] text-center">
                  <span className="
                  
                  text-customColor text-[1.2rem] md:text-[1.5rem] lg:text-[1.3rem] font-semibold">
                    3.000.000đ
                  </span>
                </div>

                {/* Delete Button */}
                <div className=" md:w-[5%] lg:w-[10%] text-center  text-[1.2rem]  ">
        
 
                <FaTrash />


                </div>
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          {/* <div className="flex justify-between mt-4">
            <button className="px-4 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl text-white bg-customColor font-medium hover:bg-yellow-500 hover:shadow-md hover:text-black transition duration-300 text-[1.3rem] md:text-[1.5rem]">
              Tiếp tục mua sắm
            </button>
            <button
              onClick={showModal}

              className="px-4 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl text-white bg-customColor font-medium hover:bg-red-500 hover:shadow-md hover:text-black transition duration-300 text-[1.3rem] md:text-[1.5rem]">
              Xóa tất cả
            </button>
          </div> */}
        </div>

{/* Order Summary */}
<div className="w-full lg:w-[450px] bg-white rounded-lg shadow-xl">
  <div className="space-y-3 md:space-y-2 p-4 md:px-7  md:leading-[2.7rem]">
    {/* Discount Modal */}
    <div className="flex justify-between items-center text-[1rem]">
      Chọn mã giảm giá
      <span className="font-bold text-customColor"></span>
    </div>

    {/* Title */}
    <h2 className="text-[1.6rem] font-semibold">Thông tin đơn hàng</h2>

    <div className="">
      {/* Total Price */}
      <div className="flex justify-between md:mb-1 font-semibold">
        <span className="text-[1rem] md:text-[1.4rem]">Tổng tiền</span>
        <span className="font-bold text-[1.6rem] md:text-[1.4rem]">
     0
        </span>
      </div>

      {/* Total Items */}
      <div className="border-t pt-3 md:pt-1 flex justify-between">
        <span className="text-[1rem] md:text-[1.2rem]">Tổng số lượng</span>
        <span className="font-bold text-[1rem] md:text-[1.3rem]">{totalItem}</span>
      </div>

      {/* Applied Voucher */}
      <div className="flex justify-between">
        <span className="text-[1rem] md:text-[1.2rem]">Voucher đã áp dụng</span>
        <span className="font-bold text-[1rem] md:text-[1.3rem]">0</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between">
        <span className="text-[1rem] md:text-[1.2rem]">Giảm giá</span>
        <span className="font-bold text-[1rem] md:text-[1.3rem] text-black-500">
          {getDiscount || 0} %
        </span>
      </div>

      {/* Shipping Fee */}
      <div className="flex justify-between pb-3 md:pb-1">
        <span className="text-[1rem] md:text-[1.2rem]">Phí vận chuyển </span>
        <span className="text-green-600 font-medium text-[1rem] md:text-[1.3rem]">
  0
        </span>
      </div>

      {/* Total Payment */}
      <div className="border-t flex justify-between font-semibold">
        <span className="text-[1.5rem] md:text-[1.4rem]">Cần thanh toán</span>
        <span className="text-red-600 font-semibold text-[1.6rem] md:text-[1.5rem]">
         0
        </span>
      </div>

      {/* Note */}
      <div className="flex justify-end items-center text-gray-500 text-[1.2rem] md:text-[1rem]">
        <span>Đã bao gồm khuyến mãi, phí vận chuyển và VAT</span>
      </div>
    </div>

    {/* Checkout Button */}
    <div className="">
      <button
     
        className="w-full bg-primary cursor-pointer text-white  md:text-[1.1rem] rounded-xl md:rounded-[1.7rem] font-medium hover:bg-opacity-90 transition-all"
      >
        Thanh toán
      </button>
    </div>
  </div>
</div>


      </div>
    </div>
  </div>
</Container>


  );
}