import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('Comment')
export class CommentController {
  constructor(private readonly CommentService: CommentService) {}



  @MessagePattern("create-Comment")
  create(@Body() createCommentDto) {
    const { name, description, price, quantity, category_id, files } = createCommentDto;

    return this.CommentService.create(name, description, price, quantity, category_id, files);
  }




  @MessagePattern("update-Comment")
  update(updateCommentDto) {
    const {id, name, description, price, quantity, category_id, files } = updateCommentDto;

    return this.CommentService.update(+id, name, description, price, quantity, category_id, files);
  }


}
