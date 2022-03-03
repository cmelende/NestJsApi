import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id: string, age: number): string {
    return 'Hello, ' + id + ', you are ' + age + ' years old';
  }
}
