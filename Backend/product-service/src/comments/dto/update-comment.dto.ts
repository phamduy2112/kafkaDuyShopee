import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-comment.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
