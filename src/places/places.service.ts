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
    const placeID = data.results[0]?.place_id;
    return placeID;
  }

  async getPlaceInfo(placeID: string): Promise<any> {
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id: placeID,
        key: process.env.PLACES_KEY
      }
    });

    const { lat, lng } = data.result?.geometry.location || {};

    const dataObj = {
      google_Id: placeID || "newId",
      name: data.result?.name || "noName",
      coord: [lat, lng] || [-1, -1],
      img: await this.getImageStr(data.result?.photos[0]?.photo_reference) || "No image available",
      hours: data.result?.opening_hours?.weekday_text || ["no hours provided"],
      type: data.result?.icon || "https://static.thenounproject.com/png/3451501-200.png",
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

  async create(place: PlaceInterface): Promise<PlaceInterface> {
    const newPlace = new this.placeModel(place);
    const result = await newPlace.save();
    return result;
  }

  async findAll() {
    const places = await this.placeModel.find().exec();
    return places;
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
