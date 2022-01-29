import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from './places.model';

@Module({
  //1. importing schema from Model so 
  //2. allow access to this schema inside of this resource
  //2.it labels the table and assigns it the schema we created in Model
  imports: [MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }])],
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class PlacesModule { }

