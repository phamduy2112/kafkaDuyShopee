import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseService } from 'src/model/response';
import { CheckExisting } from 'src/model/model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService:PrismaService,
    private readonly existingService:CheckExisting,
    private readonly response:ResponseService
  ){}
  
  async update(user_id:number,name:string,email:string,phone:string,address:string) {

    try {
      
      const response=await this.prismaService.users.update({
        where:{
          id:user_id
        },
        data:{
          name,
          email,
          phone,
          address,
        }
      })
     return this.response.responseSend(response,"Updated user successfully!",200);
    } catch (error) {
      console.error("Lỗi tạo sản phẩm:", error);
      throw new Error("Tạo sản phẩm thất bại");
    }
  }
  async findUserDetail(user_id:number){
    try {
      await this.existingService.check("users",user_id,"User not found")
      const response=await this.prismaService.users.findUnique({
        where:{
          id:user_id
        }
      })
      return this.response.responseSend(response,"Find user detail successfully!",200)
    } catch (error) {
      
    }
  }
  async updatePassword(user_id:number,dto){
    try {
      const user=await this.prismaService.users.findOne({
        where:{id:user_id}
      })
      const isMatch=await bcrypt.compare(dto.oldPassword,user.password);
      if(!isMatch){
        return this.response.responseSend(null,"Old password is not correct",400);
      }
      const handlePassword=await bcrypt.hash(dto.newPassword,10);
      user.password=handlePassword;
      await this.prismaService.users.save(user);
      return this.response.responseSend(null,"Change password is successfully",200);
    
    } catch (error) {
      
    }
  }
  async updateImage(user_id:number,file:string):Promise<any>{
   const updatedImage= await this.prismaService.users.update({
      where: { id: user_id }, // ✅ Điều kiện tìm user
      data: { avatar_url: file }, // ✅ Dữ liệu cần cập nhật
    });
    return this.response.responseSend(updatedImage,"Update image is successfully!",200)
  }

  



}
