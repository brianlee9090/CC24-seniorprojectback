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
    //invokes getPlaceID
    const placeID = await this.placesService.getPlaceID(address);
    //invoke getPlaceInfo and return a placeinterface type
    const placeInfo = await this.placesService.getPlaceInfo(placeID);
    //const dbObj = await this.placesService.create(dbObj)  
    //return this.placesService.create(address);
  }

  @Get()
  findAll() {
    return '';
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