import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardDataService } from './card-data.service';
import { CardDto } from 'src/dto/cardDto';

@Controller('card-data')
export class CardDataController {
  constructor(private readonly cardService: CardDataService) {}

  @Get('/work')
  getAllWorkCards() {
    return this.cardService.getAllWorkCards();
  }

  @Get('/play')
  getAllPlayCards() {
    return this.cardService.getAllPlayCards();
  }

  @Post('/work')
  postWorkCards(@Body() cardDto : CardDto) {
    return this.cardService.postWorkCards(cardDto);
  }

  @Post('/play')
  postPlayCards(@Body() cardDto : CardDto) {
    return this.cardService.postPlayCards(cardDto);
  }

  @Put('/:id')
  updateCards(@Param('id') id: string, @Body() updateCardDto: any) {
    return this.cardService.updateCards(id, updateCardDto);
  }

  @Delete('/:id')
  delteCards(@Param('id') id: string) {
    return this.cardService.delteCard(id);
  }
}
