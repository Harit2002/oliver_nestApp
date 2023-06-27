import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CARDS_DATA_MODEL, CardsDataDocument } from 'src/schemas/cardsData';

@Injectable()
export class CardDataService {
  constructor(
    @InjectModel(CARDS_DATA_MODEL) private cardModle: Model<CardsDataDocument>,
  ) {}

  getAllWorkCards() {}

  getAllPlayCards() {}

  postWorkCards() {}

  postPlayCards() {}

  updataWorkCards() {}

  updatePlayCards() {}

  delteWorkCards() {}

  deletePlayCards() {}
}
