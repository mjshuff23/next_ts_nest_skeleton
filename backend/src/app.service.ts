import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  greet(name: string): string {
    return `Hello, ${name}!`;
  }

  echo(data: any): any {
    return data;
  }
}
