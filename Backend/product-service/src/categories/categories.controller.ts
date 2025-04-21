import { MessagePattern } from '@nestjs/microservices';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';



export class CategoriesController {
  constructor(private readonly categoriesService:CategoriesService) {}

  @Post()
  create(@Body() createProductDto) {
    const {name,categories_dad}=createProductDto
    return this.categoriesService.create(name,categories_dad);
  }

  @MessagePattern("get-all-products")
  findAll() {
    return this.categoriesService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto) {
    return this.categoriesService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
