import { PrismaService } from "src/prisma/prisma.service";

export class LikeService{
    constructor(private prismaService:PrismaService){}
    async toggleLike(userId: number, commentId: number) {
        try {
          // Kiểm tra xem người dùng đã like bình luận này chưa
          const existingLike = await this.prismaService.likes.findUnique({
            where: {
              user_id_comment_id: {
                user_id: userId,
                comment_id: commentId,
              },
            },
          });
      
          if (existingLike) {
            // Nếu đã like, thì xóa lượt like
            const deletedLike = await this.prismaService.likes.delete({
              where: {
                id: existingLike.id,
              },
            });
      
            return { action: "deleted", like: deletedLike };
          } else {
            // Nếu chưa like, tạo mới lượt like
            const newLike = await this.prismaService.likes.create({
              data: {
                user_id: userId,
                comment_id: commentId,
              },
            });
      
            return { action: "created", like: newLike };
          }
        } catch (error) {
          console.error("Lỗi toggle lượt like:", error);
          throw new Error("Tạo hoặc xóa lượt like thất bại");
        }
      }
    async countLikes(commentId:number){
        try {
                const likeCounts=await this.prismaService.likes.count({
                    where:{
                        comment_id:commentId
                    }
                })
                return likeCounts
        } catch (error) {
            
        }
    }
}