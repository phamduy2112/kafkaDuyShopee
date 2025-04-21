import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-user.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
