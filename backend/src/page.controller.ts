import { Controller, Get, Post, Body } from '@nestjs/common';

let content = {
  title: 'Bem-vindo à Ondadura',
  description: 'Sua solução para presença online de alto impacto.',
};

@Controller('api/page')
export class PageController {
  @Get()
  getContent() {
    return content;
  }

  @Post()
  updateContent(@Body() body: { title: string; description: string }) {
    content = body;
    return content;
  }
}
