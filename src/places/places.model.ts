import * as mongoose from 'mongoose';

//create schema using TypeScript Mongoose
export const PlaceSchema = new mongoose.Schema({
    google_Id: String,
    name: String,
    coord: [Number],
    img: String,
    hours: [String],
    type: String
});

//create interface here so we don't have to repeatedly make a new object 
export interface PlaceInterface {
    google_Id: string,
    name: string,
    coord: number[],
    img: string,
    hours: string[],
    type: string
}