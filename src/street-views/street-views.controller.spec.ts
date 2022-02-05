import { Test, TestingModule } from '@nestjs/testing';
import { StreetViewsController } from './street-views.controller';
import { StreetViewsService } from './street-views.service';

describe('StreetViewsController', () => {
  let controller: StreetViewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetViewsController],
      providers: [StreetViewsService],
    }).compile();

    controller = module.get<StreetViewsController>(StreetViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
