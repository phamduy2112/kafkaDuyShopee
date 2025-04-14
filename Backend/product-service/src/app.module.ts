import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
