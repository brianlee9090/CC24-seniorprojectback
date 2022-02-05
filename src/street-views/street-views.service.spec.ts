import { Test, TestingModule } from '@nestjs/testing';
import { StreetViewsService } from './street-views.service';

describe('StreetViewsService', () => {
  let service: StreetViewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreetViewsService],
    }).compile();

    service = module.get<StreetViewsService>(StreetViewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
