import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('RoutesController', () => {
  let routesController: RoutesController;
  let routesService: RoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [RoutesService, {
        provide: getModelToken('Route'),
        useValue: {
          save: jest.fn().mockResolvedValue(Model),
          find: jest.fn().mockResolvedValue([Model])
        },
      }],
    }).compile();

    routesController = module.get<RoutesController>(RoutesController);
    routesService = module.get<RoutesService>(RoutesService);
  });

  describe('findAll', () => {
    it('should return an array', async () => {
      const result = [];
      jest.spyOn(routesService, 'findAll').mockImplementation(async () => result);
      expect(await routesController.findAll()).toBe(result);
    });
  });
});
