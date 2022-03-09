import mongoose from "mongoose";
import { Listing } from "./Listing";

const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  listing: Listing,
  bidIncrement: {
    type: Int,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  closingDate: {
    type: String,
    required: true,
  },
});

export const Event = model("Event", eventSchema);
