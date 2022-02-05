import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectionsModule } from './directions/directions.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { PlacesModule } from './places/places.module';
import { StreetViewsModule } from './street-views/street-views.module';


@Module({
  imports: [DirectionsModule, ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@db.5g66y.mongodb.net/justgo_db?retryWrites=true&w=majority`), RoutesModule, PlacesModule, StreetViewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
