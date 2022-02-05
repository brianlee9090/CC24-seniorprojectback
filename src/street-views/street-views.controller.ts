import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StreetViewsService } from './street-views.service';
import { CreateStreetViewDto } from './dto/create-street-view.dto';
import { UpdateStreetViewDto } from './dto/update-street-view.dto';

@Controller('street-views')
export class StreetViewsController {
  constructor(private readonly streetViewsService: StreetViewsService) {}

  @Post()
  create(@Body() createStreetViewDto: CreateStreetViewDto) {
    return this.streetViewsService.create(createStreetViewDto);
  }

  @Get('get')
  findOne() {
    console.log("get recieved");
    this.streetViewsService.findOne()
    //return this.streetViewsService.findOne();
  }

  @Get('all')
  findAll() {
    return this.streetViewsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreetViewDto: UpdateStreetViewDto) {
    return this.streetViewsService.update(+id, updateStreetViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streetViewsService.remove(+id);
  }
}
