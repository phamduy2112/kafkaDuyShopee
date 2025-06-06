export class Paths{
  static client:{
    Home: "/",
  Search: "/tim-kiem",
  FavoriteProducts: "/san-pham-yeu-thich",
  ListProducts: "/list-san-pham",
  ProductDetail: "/san-pham-chi-tiet/:id",
  Blogs: "/bai-viet",
  BlogDetail: "/bai-viet-chi-tiet/:id",
  UserOrderDetail: "/don-hang-chi-tiet-cua-ban/:id",
  Profile: "/nguoi-dung",
  ChangePassword: "/nguoi-dung/doi-mat-khau",
  UserOrders: "/don-hang-cua-ban",
  Cart: "/gio-hang",
  Voucher: "/giam-gia",
  Checkout: "/thanh-toan",
  Bill: "/xuat-hoa-don",
  Introduce: "/gioi-thieu",
  Contact: "/lien-he",
  CustomerCare: "/cham-soc-khach-hang",
  QuestionAnswer: "/hoi-dap",
  Login: "/dang-nhap",
  Register: "/dang-ky",
  ForgetPassword: "/quen-mat-khau",
  }
  static  Admin: {
    PathsAdmin: "/admin",
    Dashboard: "trang-chu",
    Categories: "quan-li-loai/danh-muc-san-pham",
    Products: "quan-li-san-pham",
    ProductDetail: "quan-li-san-pham-chi-tiet/:id",
    AddProduct: "quan-li-san-pham/tao-san-pham-moi",
    EditProduct: "quan-li-san-pham/sua-san-pham/:id",
    ProductComments: "quan-li-san-pham/:id/quan-li-binh-luan",
    ProductCommentsDetail: "quan-li-san-pham/:productId/quan-li-binh-luan/:commentId",
    Blogs: "quan-li-bai-viet",
    AddBlog: "quan-li-bai-viet/them-bai-viet-moi",
    EditBlog: "quan-li-bai-viet/sua-bai-viet/:id",
    BlogComments: "quan-li-bai-viet/quan-li-binh-luan-bai-viet",
    Customers: "quan-li-khach-hang",
    Staff: "quan-li-nhan-vien",
    AddStaff: "quan-li-nhan-vien/tao-nhan-vien-moi",
    EditStaff: "quan-li-nhan-vien/sua-nhan-vien/:id",
    Orders: "quan-li-don-hang",
    OrderDetail: "quan-li-don-hang-chi-tiet/:id",
    AddOrder: "quan-li-don-hang/tao-don-hang",
    EditOrder: "quan-li-don-hang/sua-don-hang/:id",
    Chat: "quan-li-tin-nhan",
        Chart: "quan-li-bieu-do",
    Settings: "quan-li-trang-web",
  },
}