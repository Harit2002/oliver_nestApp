import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CardDataService } from './card-data.service';

@Controller('card-data')
export class CardDataController {
  constructor(private readonly cardService: CardDataService) {}

  @Get('/work')
  getAllWorkCards() {}

  @Get('/play')
  getAllPlayCards() {}

  @Post('/work')
  postWorkCards() {}

  @Post('/play')
  postPlayCards() {}

  @Put('/work')
  updataWorkCards() {}

  @Put('/play')
  updatePlayCards() {}

  @Delete('/work')
  delteWorkCards() {}

  @Delete('/play')
  deletePlayCards() {}
}
