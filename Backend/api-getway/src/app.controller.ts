import { Controller, Get } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly userServiceClient: ClientKafka,
    @Inject('PRODUCT_SERVICE') private readonly productServiceClient: ClientKafka,
  ) {}

  async onModuleInit() {
    // Đăng ký lắng nghe phản hồi
    this.productServiceClient.subscribeToResponseOf('get-all-products');
    await this.productServiceClient.connect();
  }

  @Get('user')
  async getUser() {
    const response = await this.userServiceClient
      .send('get-user', { userId: 1 })
      .toPromise();
    return response;
  }
  @Get("get-all-product")
  async getAllProduct(){
    return await this.productServiceClient.send("get-all-products",{}).toPromise();
  }
}
