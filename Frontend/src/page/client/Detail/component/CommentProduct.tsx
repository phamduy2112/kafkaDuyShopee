import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegStar, FaStar } from 'react-icons/fa';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosReturnRight } from 'react-icons/io';
import ReplyComment from './ReplyComment';
import CommentForm from './FormComment';

function CommentProduct() {
    const [comment,setComment]=useState([
        {
          "comment_id": 1,
          "user": {
            "user_id": 2,
            "user_name": "Duy",
            "user_image": "duy.jpg"
          },
          "comment_content": "Sản phẩm tốt lắm!",
          "comment_date": "2025-04-19T08:00:00Z",
          "comment_star": 5,
          "isPurchase": true
        }
      ])
      const [filteredComments, setFilteredComments] = useState([]);
      const [expandedComments, setExpandedComments] = useState<boolean[]>(new Array(comment.length).fill(false));
      const handleCommentClick = (index: number) => {
        const updatedExpandedComments = [...expandedComments];
        updatedExpandedComments[index] = !updatedExpandedComments[index];
        setExpandedComments(updatedExpandedComments);
      };
    
      const [selectedTab, setSelectedTab] = useState('all');
    //   useEffect(()=>{
    //     setFilteredComments(props.reviews);
    //     setSelectedTab('all');
    //   },[props.reviews])
    //   const handleClick = (selection:string) => {
    //     setSelectedTab(selection);
    //     if (selection === "all") {
    //       setFilteredComments(props.reviews); // Hiển thị tất cả các bình luận
    //     } else {
    //       setFilteredComments(
    //         props.reviews.filter((comment) => comment.isPurchase === true)
    //       ); // Hiển thị chỉ các bình luận có isPurchase là true
    //     }
    //   };
      const login=true;
      const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
      const [activeAction, setActiveAction] = useState<{ action: 'edit' | 'reply' | null, index: number | null }>({ action: null, index: null });
      const handleActionToggle = (index: number, action: 'edit' | 'reply') => {
        // Nếu nhấn cùng một hành động thì tắt nó đi, còn không thì bật hành động mới
        setActiveAction((prevState:any) => prevState.index === index && prevState.action === action
          ? { action: null, index: null }
          : { action, index });
      };
      const CommentSchema = Yup.object().shape({
        commentText: Yup.string().required('Nội dung bình luận không được để trống').min(5, 'Nội dung phải có ít nhất 5 ký tự'),
      });
      const handleDropdownToggle = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
      };
    
  return (
    <div>
    <div className="w-full p-4 bg-white mt-[1rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-[1.6rem] md:text-[2rem] font-bold">
          Đánh giá Điện Thoại Iphone 15 Pro Max 256GB
        </h2>
      </div>
      {/* <StarRating comments={props.reviews} /> */}
    </div>
    <div className="  bg-white">
      <div>
        <h4 className="py-[1rem] text-[2rem] font-semibold ">Lọc theo</h4>
        <div className="flex gap-[1rem]">
    {/* Nút "Tất cả" */}
    <div
      className={`cursor-pointer rounded-[3rem] text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border ${selectedTab === "all" ? "bg-blue-500 text-white" : "border-gray-600"} w-[7rem]`}
    //   onClick={() => handleClick("all")}
    >
      <span>Tất cả</span>
    </div>
    
    {/* Nút "Đã mua hàng" */}
    <div
      className={`cursor-pointer rounded-[3rem] text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border ${selectedTab === "purchased" ? "bg-blue-500 text-white" : "border-gray-600"} w-[12rem]`}
    //   onClick={() => handleClick("purchased")}
    >
      <span>Đã mua hàng</span>
    </div>
  </div>
      </div>
     <div>
    <div className="">
        {comment?.map((review, index) => {
          return (
            <div className="flex items-start space-x-4 mt-[1rem] " key={index}>

              <div
                className={`flex text-[2.5rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-cover bg-center bg-no-repeat`}
             
              >
                <img src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/480816026_3722212301328926_8576528358840974159_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_ohc=JiB-wXaApoAQ7kNvwEvlbSU&_nc_oc=AdkMbvtvINETdHZPs8uqFfuvMaI86Xhq_rpnUcljp6IDGEa9JjP4z1w_znabWXas10fsdQbyxU4hddbqal9q7Bh_&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=8zX1xnr_eiLijkidTfdBog&oh=00_AfECV_bHWH7diNylKgqMi1rnUNhCXksDQZatdGdJN1Qh0Q&oe=680A575B" alt="" />

              </div>
              <div className="flex w-[100%] justify-between">

                <div className="w-[100%]">
                  <div className="flex justify-between">
                    <div>
                    <h3 className="font-bold text-[2rem] flex  gap-[1rem] items-center">{review.user?.user_name} 
                          
                          {review?.isPurchase ?                           
                             <FaCheckCircle className="text-[green]"/>
: ""}
                 
                          
                          </h3>                       
                           <div className="flex items-center text-[1.5rem]">
                        <div className="ml-2 text-[1.5rem] text-gray-500">21/12/2003</div>
                        <div className="ml-2 flex text-[1.3rem] items-center text-orange-500">
                          {[...Array(5)].map((_, index) => (
                            index < Number(review?.comment_star) ? <FaStar key={index} className="text-yellow-500" /> : <FaRegStar key={index} className="text-gray-300" />
                          ))}
                        </div>
                      </div>
                      {activeAction.index === index && activeAction.action === 'edit' ? (
                        <Formik
                          initialValues={{ commentText: review.comment_content }}
                          validationSchema={CommentSchema}
                          onSubmit={(values, { resetForm }) => {
                            const updatedComment = {
                            //   comment_id: review.comment_id,
                            //   product_id: review.product_id,
                            //   comment_content: values.commentText,
                            };

                          

                            // Reset form và đóng action
                            resetForm();
                            setActiveAction({ action: null, index: null });
                          }}
                        >
                          {({ errors, touched }) => (
                            <FormikForm className="flex items-center gap-2 w-full text-[1.8rem]">
                              <Field
                                name="commentText"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Chỉnh sửa bình luận..."
                              />
                              <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                              >
                                Lưu
                              </button>
                              <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                              >
                                Hủy
                              </button>
                            </FormikForm>
                          )}
                        </Formik>
                      ) : (
                        <p className="text-[1.8rem] text-gray-800">{review?.comment_content}</p>
                      )}

                    </div>

                    <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
                      <div className="flex gap-[.5rem] ">
                        {/* <span>{formatTimeAgo(review?.comment_date)}</span> */}
                        <div className="relative">
                          {
                            login ? (
                              <BsThreeDots
                                className="cursor-pointer"
                                onClick={() => handleDropdownToggle(index)}
                              />

                            ) : (
                              <div>

                              </div>
                            )
                          }


                          {activeDropdown === index && (
                            <div className="w-[150px] text-[1.5rem] bg-white rounded-lg shadow-lg absolute left-[-50%] mt-2 p-2">
                              <div className="flex flex-col space-y-2">
                                {/* Hiển thị nút "Chỉnh sửa" và "Xóa" nếu là chủ sở hữu bình luận
                                {review.user_id === user.user_id ? (
                                  <>
                                    <button
                                      onClick={() => handleActionToggle(index, 'edit')}
                                      className="text-blue-500 hover:text-blue-700 transition-colors"
                                    >
                                      Chỉnh sửa
                                    </button>
                                    <button
                                      onClick={() => handleDelete(review)}
                                      className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                      Xoá
                                    </button>
                                  </>
                                ) : (
                                  <span className="text-gray-400 text-center">Không có quyền</span>
                                )} */}
                                   <button
                                    //   onClick={() => handleActionToggle(index, 'edit')}
                                      className="text-blue-500 hover:text-blue-700 transition-colors"
                                    >
                                      Chỉnh sửa
                                    </button>
                                    <button
                                    //   onClick={() => handleDelete(review)}
                                      className="text-red-500 hover:text-red-700 transition-colors"
                                    >
                                      Xoá
                                    </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-[.5rem]">
                        {/* Like button */}
                        <button className="flex items-center text-purple-600">
                          {
                            // review?.likes?.some(item => item?.user_id === user?.user_id)
                            //   ? <BiSolidLike onClick={() => handleLike(review.comment_id, review.product_id)} />
                            //   : <AiOutlineLike onClick={() => handleLike(review.comment_id, review.product_id)} />
                          }
                          <span>{review.likes?.length}</span>
                        </button>


                        <button
                          onClick={() => handleActionToggle(index, 'reply')}
                          className="flex items-center text-purple-600 ml-4"
                        >
                          Phản hồi
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="mt-2 text-purple-600 text-[1.8rem] flex gap-[.5rem]"
                    // onClick={() => handleCommentClick(index)}
                  >
                    <IoIosReturnRight />
                    {/* {expandedComments[index] ? "Ẩn phản hồi" : "Xem phản hồi"} */}
                  </button>

                  <div className="flex items-center justify-between">


                    {/* {activeAction.index === index && activeAction.action === 'reply' && (
                      <Formik
                        initialValues={{ commentText: '' }} /
                        validationSchema={CommentSchema}
                        onSubmit={(values, { resetForm }) => {
                          if (!login) {
                            toast.error("Bạn cần đăng nhập!");
                            navigate(Paths.Login);
                            return;
                          }
                          if (values.commentText.length < 5) {
                            toast.error("Bạn cần nhập 5 kí tự trở lên")


                          };
                          const newComment = {
                            comment_id: review.comment_id,
                            product_id: review.product_id,
                            comment: values.commentText, // Gửi giá trị commentText
                          };


                          dispatch(createCommentRepliesByIdProductThunk(newComment))

                          toast.success("Phản hồi thành công")
                          resetForm();

                          // Đóng dropdown hoặc hành động sau khi submit (nếu có)
                          setActiveAction({ action: null, index: null });
                        }}
                      >
                        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                          <FormikForm onSubmit={handleSubmit} className="flex items-center gap-2 w-full text-[1.8rem]">
                            <Field
                              name="commentText" // Tên của trường phải trùng với initialValues
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Chỉnh sửa bình luận..."
                              value={values.commentText} // Bind giá trị vào input
                              onChange={handleChange}    // Xử lý sự kiện thay đổi giá trị
                              onBlur={handleBlur}        // Xử lý sự kiện blur
                            />
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                              Lưu
                            </button>
                          </FormikForm>
                        )}
                      </Formik>
                    )} */}

                  </div>
                  {expandedComments[index] && (
                    <div className="pl-8">
                      <ReplyComment replies={comment} productId={1} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className='flex justify-center items-center'>
         {filteredComments.length == 0 ? '' : 
     <ProductModalWithPagination reviews={filteredComments}/>}
      </div> */}
    
  </div>
      
      {/* {selectedTab === "purchased" && filteredComments.length == 0 && (
      <div className="text-center text-[1.5rem] text-gray-500 mt-4">
        Chưa có người dùng mua hàng
      </div>
    )} */}
                 
      
    </div>
  </div>
  )
}

export default CommentProduct