import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseService } from 'src/model/response';
import { CheckExisting } from 'src/model/model';

@Injectable()
export class ProductService {
  constructor(
    private readonly prismaService:PrismaService,
    private readonly existingService:CheckExisting,
    private readonly response:ResponseService
  ){}
  
  async create(user_id:number,product_id:number,content:string,parent_comment_id?:number) {

    try {
      const response=await this.prismaService.comments.create({
        data:{
            user_id,
            product_id,
            content,
            parent_comment_id: parent_comment_id || null,  // Nếu không có `parent_comment_id`, truyền `null`
          
        }
      })
      return response
     
    } catch (error) {
      console.error("Lỗi tạo sản phẩm:", error);
      throw new Error("Tạo sản phẩm thất bại");
    }
  }
  
  


  

  async update(user_id: number, product_id: number, content: string, parent_comment_id?: number) {
    try {
      const updated = await this.prismaService.comments.update({
        where: {
          // Tìm bình luận dựa trên user_id, product_id và parent_comment_id
          user_id_product_id_parent_comment_id: {
            user_id,
            product_id,
            parent_comment_id: parent_comment_id || null,
          },
        },
        data: {
          content,
        },
      });
      return updated;
    } catch (error) {
      console.error("Lỗi update bình luận:", error);
      throw new Error("Cập nhật bình luận thất bại");
    }
  }
  

  async remove(ids: number[]) {
    const response=await this.prismaService.product.deleteMany({
      where:{
        id:{
          in:ids,
        }
      }
    })
    return this.response.responseSend(response,"Deleted selected product successfully",200);

  }
}
