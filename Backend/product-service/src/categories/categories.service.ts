import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-categories.dto';
import { UpdateProductDto } from './dto/update-categories.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { responseSend, ResponseService } from 'src/model/response';
import { CheckExisting } from 'src/model/model';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly prismaService:PrismaService,
    private readonly response: ResponseService,
    private checkService:CheckExisting,
    
  ){}
  async create(name:string,categories_dad:string) {
    const responsive=await this.prismaService.categories.create({
        name,
        categories_dad
    })
    return responsive;
  }

  async findAll() {
    const responsive=await this.prismaService.categories.findAll();
    const categoriesWithProductCount=await Promise.all(
        responsive.map(async(category)=>{
            const count=await this.prismaService.products.count({
                where:{
                    id_category:category.id,
                }
            })
            return{
                ...category,
                productCount:count
            }
        })
    )
    return this.response.responseSend(categoriesWithProductCount, 'Lấy danh sách category và số sản phẩm thành công', 200);
}


 async update(id: number, name:string,categories_dad:string) {
    const existingCategory = await this.checkService.check("categories",id,"Category not found")


  
    const updateCategories=await this.prismaService.categories.update({
        where:{
            id
        },
        data:{
            name,
            categories_dad
        }
    })

    return this.response.responseSend(updateCategories,"Update categories is successfully",200)
  }

 async remove(ids: number[]) {
    // const existingCategory = await this.checkService.check("categories",id,"Category not found")
    const deleteCategories=await this.prismaService.categories.deleteMany({
        where: {
            id: {
              in: ids,
            },
          },
    })
    return this.response.responseSend(deleteCategories,"Deleted selected categories successfully",200);
  }
}
