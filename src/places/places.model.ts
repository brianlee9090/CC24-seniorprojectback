import * as mongoose from 'mongoose';

//Create schema for places using TypeScript Mongoose
export const PlaceSchema = new mongoose.Schema({
    google_Id: String,
    name: String,
    coord: [Number],
    img: String,
    hours: [String],
    type: String
});

//Create interface for place objects to use for Typescript typing
export interface PlaceInterface {
    google_Id: string,
    name: string,
    coord: number[],
    img: string,
    hours: string[],
    type: string
}