import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlaceInterface } from './places.model';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  async postPlace(@Body('address') address: string) {
    //Given location, returns a placeId which is a string that comes from the google geocoder api
    const placeID = await this.placesService.getPlaceID(address);
    //Given a placeId, returns place information as a type called PlaceInterface
    const newPlace = await this.placesService.getPlaceInfo(placeID);
    //Given a PlaceInterface object, saves the object into database under the collection called places
    return this.placesService.create(newPlace);
  }

  @Get()
  findAll() {
    //Returns all place objects in the collection called places
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }
}