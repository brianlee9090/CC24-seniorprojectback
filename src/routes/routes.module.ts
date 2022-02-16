import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { RouteSchema } from './routes.model';
import { Route } from './entities/route.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Route", schema: RouteSchema }])],
  controllers: [RoutesController],
  providers: [RoutesService]
})
export class RoutesModule { }
