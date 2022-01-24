import { Test, TestingModule } from '@nestjs/testing';
import { DirectionsController } from './directions.controller';
import { DirectionsService } from './directions.service';

describe('DirectionsController', () => {
  let controller: DirectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectionsController],
      providers: [DirectionsService],
    }).compile();

    controller = module.get<DirectionsController>(DirectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
