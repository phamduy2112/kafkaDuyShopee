import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}



  @MessagePattern("create-product")
  create(@Body() createProductDto) {
    const { name, description, price, quantity, category_id, files } = createProductDto;

    return this.productService.create(name, description, price, quantity, category_id, files);
  }

  @MessagePattern("get-all-products")
  findAll() {
    return this.productService.findAll();
  }


  @MessagePattern("get-product-id")
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }


  @MessagePattern("update-product")
  update(updateProductDto) {
    const {id, name, description, price, quantity, category_id, files } = updateProductDto;

    return this.productService.update(+id, name, description, price, quantity, category_id, files);
  }


}
