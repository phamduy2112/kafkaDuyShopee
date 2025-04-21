import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from '@nestjs/microservices';

export class UserController {
  constructor(private readonly UserService: UserService) {}



  @MessagePattern("create-User")
  create(@Body() createUserDto) {
    const { name, description, price, quantity, category_id, files } = createUserDto;

    return this.UserService.create(name, description, price, quantity, category_id, files);
  }

  @MessagePattern("get-all-Users")
  findAll() {
    return this.UserService.findAll();
  }


  @MessagePattern("get-User-id")
  findOne(@Param('id') id: string) {
    return this.UserService.findOne(+id);
  }


  @MessagePattern("update-User")
  update(updateUserDto) {
    const {id, name, description, price, quantity, category_id, files } = updateUserDto;

    return this.UserService.update(+id, name, description, price, quantity, category_id, files);
  }


}
