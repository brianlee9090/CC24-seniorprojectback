import * as mongoose from "mongoose";

export const RouteSchema = new mongoose.Schema({
    stops: [{
        placeId: String,
        coord: String
    }]
});

export interface Stop {
    placeId: string;
    coord: string;
}