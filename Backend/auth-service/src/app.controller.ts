import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @MessagePattern('get-user')
    handleGetUser(@Payload() data: any) {
      console.log('Received from API Gateway:', data.value);
      return {
        id: 1,
        name: 'Duy đẹp trai 😎',
        email: 'duy@example.com',
      };
    }
}
