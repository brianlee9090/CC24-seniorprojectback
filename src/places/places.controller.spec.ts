import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { Model } from 'mongoose';


describe('PlacesController', () => {
  let placesController: PlacesController;
  let placesService: PlacesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesController],
      providers: [PlacesService, {
        provide: getModelToken('Place'),
        useValue: {
          save: jest.fn().mockResolvedValue(Model),
          find: jest.fn().mockResolvedValue([Model])
        }
      }],
    }).compile();

    placesController = module.get<PlacesController>(PlacesController);
    placesService = module.get<PlacesService>(PlacesService);
  });


  describe('findAll', () => {
    it('it should return an array', async () => {
      const result = [];
      jest.spyOn(placesService, 'findAll').mockImplementation(async () => result);
      expect(await placesController.findAll()).toBe(result);
    });
  })
});
