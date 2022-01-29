import * as mongoose from "mongoose";

export const RouteSchema = new mongoose.Schema({
    stops: [{
        placeId: String,
        coord: [Number]
    }]
});

export interface Stop {
    placeId: string;
    coord: number[];
}