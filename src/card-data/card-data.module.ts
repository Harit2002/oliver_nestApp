import { Module } from '@nestjs/common';
import { CardDataService } from './card-data.service';
import { CardDataController } from './card-data.controller';

@Module({
  providers: [CardDataService],
  controllers: [CardDataController]
})
export class CardDataModule {}
