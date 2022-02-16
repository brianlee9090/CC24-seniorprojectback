import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { StopInterface } from './routes.model';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel('Route') private routeModel: Model<any>,
  ) { }
  
  async create(stops: StopInterface[]): Promise<any> {
    const newRoute = new this.routeModel({ stops });
    const result = await newRoute.save(); 
    return result;
  }

  async findAll() {
    const routes = await this.routeModel.find();
    return routes;
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
