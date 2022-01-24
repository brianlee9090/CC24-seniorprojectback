import { Injectable } from '@nestjs/common';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';
import axios from 'axios';

@Injectable()
export class DirectionsService {
  create(createDirectionDto: CreateDirectionDto) {
    return 'This action adds a new direction';
  }

  async getDirections(coordinates, destination) {
    try{
      const response = await axios.get("https://maps.googleapis.com/maps/api/directions/json", {
        params: {
          origin: coordinates,
          destination: destination, 
          key: process.env.USER_KEY
        },
    });
    return response.data; 

    }catch(error){
      console.error(error);
    }
}

  findOne(id: number) {
    return `This action returns a #${id} direction`;
    }

  update(id: number, updateDirectionDto: UpdateDirectionDto) {
    return `This action updates a #${id} direction`;
    }

  remove(id: number) {
    return `This action removes a #${id} direction`;
    }
  }
