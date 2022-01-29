import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlaceInterface } from './places.model';
import axios from 'axios';

@Injectable()
export class PlacesService {
  constructor(@InjectModel('Place') private placeModel: Model<any>) { }

  async getPlaceID(address: string): Promise<string> {
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address: address,
        key: process.env.GEOCODE_KEY
      }
    })
    const placeID = data.results[0].place_id;
    return placeID;
  }

  async getPlaceInfo(placeID: string): Promise<any> {
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id: placeID,
        key: process.env.PLACES_KEY
      }
    });

    const { lat, lng } = data.result.geometry.location;

    const dataObj = {
      type: data.result.icon,
      name: data.result.name,
      coord: [lat, lng],
      hours: data.result.opening_hours.weekday_text,
      img: await this.getImageStr(data.result.photos[0].photo_reference),
    };

    return dataObj;    
  }

  async getImageStr(photoRef: string): Promise<string> {
    const { data } = await axios.get("https://maps.googleapis.com/maps/api/place/photo", {
      responseType: 'arraybuffer',
      params: {
        maxwidth: 400,
        photo_reference: photoRef,
        key: process.env.PLACES_KEY
      }
    });
    return Buffer.from(data, 'binary').toString('base64');
  }

  //must define the type of return for the function; which here is a Promise
  //and the Promise needs a type; which here is the Place type(interface)
  async create(address: string): Promise<string> {
    //instantiate an instance of PlaceModel
    const newPlace = new this.placeModel(address);
    const result = await newPlace.save();
    return result;
  }

    findAll() {
    return `This action returns all places`;
  }


  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
