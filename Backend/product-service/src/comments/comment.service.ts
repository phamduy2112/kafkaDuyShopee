import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseService } from 'src/model/response';
import { CheckExisting } from 'src/model/model';

@Injectable()
export class CommentService {
  constructor(
    private readonly prismaService:PrismaService,
    private readonly existingService:CheckExisting,
    private readonly response:ResponseService
  ){}
  
  async create(name:string, description:string, price:number, quantity:number, category_id:number, files:any) {
    try {
  
      const newPost = await this.prismaService.$transaction(async (prisma) => {
        const post = await prisma.Comments.create({
          data: { name, description, price, quantity, category_id },
        });
  
        if (files && files.length > 0) {
          await prisma.media.createMany({
            data: files.map(file => ({
              Comment_id: post.id,
              url: file.url,
              type: file.type, // 👈 Thêm type ở đây
            })),
          });
        }
  
        return post;
      });
  
      return newPost;
  
    } catch (error) {
      console.error("Lỗi tạo sản phẩm:", error);
      throw new Error("Tạo sản phẩm thất bại");
    }
  }
  
  async findAll() {
    const response=await this.prismaService.Comments.findAll()
    return this.response.responseSend(response,"Success !",200);
  }

  async findIdCategory(id:number){
    await this.existingService.check("categories",id,"Comment not found")
    const response=await this.prismaService.Comment.findUnique({
      where:{
        id_category:id,
      }
    })
    return this.response.responseSend(response,"Success !",200);
  }

  async findOne(id: number) {
    await this.existingService.check("Comments",id,"Comment not found")

    const response=await this.prismaService.Comment.findUnique({
      where:{
        id,
      }
    })
    return this.response.responseSend(response,"Success !",200);

  }



  

  async update(id: number, name:string, description:string, price:number, quantity:number, category_id:number, files:any) {
    try {
  
      const updatedComment = await this.prismaService.$transaction(async (prisma) => {
        // 1. Update Comment info
        const Comment = await prisma.Comments.update({
          where: { id },
          data: { name, description, price, quantity, category_id },
        });
  
        // 2. Xóa media cũ nếu có
        await prisma.media.deleteMany({
          where: { Comment_id: id },
        });
  
        // 3. Thêm media mới
        if (files && files.length > 0) {
          await prisma.media.createMany({
            data: files.map(file => ({
              Comment_id: id,
              url: file.url,
              type: file.type,
            })),
          });
        }
  
        return Comment;
      });
  
      return updatedComment;
    } catch (error) {
      console.error('Lỗi update sản phẩm:', error);
      throw new Error('Cập nhật sản phẩm thất bại');
    }
  }

  async remove(ids: number[]) {
    const response=await this.prismaService.Comment.deleteMany({
      where:{
        id:{
          in:ids,
        }
      }
    })
    return this.response.responseSend(response,"Deleted selected Comment successfully",200);

  }
}
