import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from './places.model';

@Module({
  //Import PlaceSchema from places.model.ts and stores it as the name 'Place'
  imports: [MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }])],
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class PlacesModule { }

