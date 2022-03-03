import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:ID')
  async getHello(
    @Param('ID') id: string,
    @Query('age') age: number,
  ): Promise<string> {
    return this.appService.getHello(id, age);
  }
}
