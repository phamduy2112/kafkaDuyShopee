import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class UserService {
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
