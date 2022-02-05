import { Module } from '@nestjs/common';
import { StreetViewsService } from './street-views.service';
import { StreetViewsController } from './street-views.controller';

@Module({
  controllers: [StreetViewsController],
  providers: [StreetViewsService]
})
export class StreetViewsModule {}
