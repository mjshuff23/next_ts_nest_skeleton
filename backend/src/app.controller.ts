import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet/:name')
  greet(@Param('name') name: string): string {
    return this.appService.greet(name);
  }

  @Post('echo')
  echo(@Body() body: any): any {
    return this.appService.echo(body);
  }
}
