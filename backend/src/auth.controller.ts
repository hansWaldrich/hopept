import { Controller, Post, Body } from '@nestjs/common';

@Controller('api')
export class AuthController {
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    if (username === 'admin' && password === 'senha123') {
      return { success: true };
    }
    return { success: false };
  }
}
