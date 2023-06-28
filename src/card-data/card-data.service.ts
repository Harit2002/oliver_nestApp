import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DATA_TYPE } from 'src/constants';
import { CardDto } from 'src/dto/cardDto';
import { CARDS_DATA_MODEL, CardsDataDocument } from 'src/schemas/cardsData';

@Injectable()
export class CardDataService {
  constructor(
    @InjectModel(CARDS_DATA_MODEL) private cardModle: Model<CardsDataDocument>,
  ) {}

  async getAllWorkCards() {
    const cards = await this.cardModle.find({ type: 'WORK' });
    return cards;
  }

  async getAllPlayCards() {
    const cards = await this.cardModle.find({ type: 'PLAY' });
    return cards;
  }

  async postWorkCards(cardDto: CardDto) {
    try {
      cardDto.type = DATA_TYPE.WORK;
      const card = await this.cardModle.create(cardDto);
      return card;
    } catch (err) {
      if ((err.name = 'Validation Error'))
        throw new BadRequestException(err.errors);
    }
  }

  async postPlayCards(cardDto: CardDto) {
    try {
      cardDto.type = DATA_TYPE.PLAY;
      const card = await this.cardModle.create(cardDto);
      return card;
    } catch (err) {
      if ((err.name = 'Validation Error'))
        throw new BadRequestException(err.errors);
    }
  }

  async updateCards(id: string, updateCardDto: any) {
    const updatedCard = await this.cardModle.findByIdAndUpdate(
      id,
      updateCardDto,
      { new: true },
    );
    if (!updatedCard) throw new NotFoundException('Card not found');
    return updatedCard;
  }

  async delteCard(id: string) {
    const deletedCard = await this.cardModle.findByIdAndDelete(id);
  }
}
