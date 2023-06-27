import { Test, TestingModule } from '@nestjs/testing';
import { CardDataService } from './card-data.service';

describe('CardDataService', () => {
  let service: CardDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardDataService],
    }).compile();

    service = module.get<CardDataService>(CardDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
