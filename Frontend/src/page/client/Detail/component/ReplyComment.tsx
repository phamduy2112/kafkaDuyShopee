import { AiOutlineLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';




const CommentSchema = Yup.object().shape({
  commentText: Yup.string().required('Nội dung không được để trống.'),
});

const ReplyComment = ({ replies, productId }) => {

  console.log(replies);
  

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleEditToggle = (index: number) => {
    setEditingIndex(editingIndex === index ? null : index);
    setActiveDropdown(null);
  };

  const login:any=true

  

  const handleEditSubmit = (values, commentId) => {
    const data = {
      product_id: productId,
      comment: values.commentText,
      id: commentId,
    };
   

    setEditingIndex(null);
  };

  const handleDeleteComment = (commentId) => {
    const data = {
      product_id: productId,

      id: commentId,
    };
 
    setActiveDropdown(null);
  };

  if (!replies || replies.length === 0) {
    return <div className="text-gray-500 text-[1.5rem]">Chưa có phản hồi nào.</div>;
  }
let user_id=1
  return (
    <div className="comment-section space-y-6">
      {replies.map((review, index) => (
        <div
          key={review.comment_id}
          className="comment-item ml-12 mt-4 border-l-2 border-purple-300 pl-4 space-y-3"
        >
          <div className="flex items-start gap-[1rem]">
         
            <div className="flex-1">
              <h3 className="font-bold text-[2rem]">{review?.user?.user_name}</h3>
              <div className="text-[1.5rem] text-gray-500">{formatDate(review?.repiles_date)}</div>

              {/* Bình luận hoặc form chỉnh sửa */}
              {editingIndex === index ? (
                <Formik
                  initialValues={{ commentText: review.comment }}
                  validationSchema={CommentSchema}
                  onSubmit={(values) => handleEditSubmit(values, review.id)}
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
                        onClick={() => setEditingIndex(null)}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                      >
                        Hủy
                      </button>
                    </FormikForm>
                  )}
                </Formik>
              ) : (
                <p className="text-[1.8rem] text-gray-800">{review.comment}</p>
              )}
            </div>

            {/* Dropdown menu */}
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
    <div className="w-[120px] text-[1.5rem]
   
    bg-white rounded-lg shadow-lg absolute right-0 mt-2 p-2">
                        {user_id==1 ? (
                        <div>
                           <button
                    onClick={() => handleEditToggle(index)}
                    className="w-full text-blue-500 hover:text-blue-700 transition-colors mb-2"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    onClick={() => handleDeleteComment(review.id)}
                    className="w-full text-red-500 hover:text-red-700 transition-colors"
                  >
                    Xoá
                  </button>
                        </div>
                      ):(          <span className="text-gray-400 text-center">Không có quyền</span>
                      )} 
                 
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyComment;