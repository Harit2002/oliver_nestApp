import { Test, TestingModule } from '@nestjs/testing';
import { CardDataController } from './card-data.controller';

describe('CardDataController', () => {
  let controller: CardDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardDataController],
    }).compile();

    controller = module.get<CardDataController>(CardDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
