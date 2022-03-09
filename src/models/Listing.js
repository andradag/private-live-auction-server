import mongoose from "mongoose";

const { Schema, model } = mongoose;
const imageSchema = require("./Image");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema],
  category: {
    type: String,
    required: true,
  },
  reserveAmount: {
    type: Int,
    required: true,
  },
  startingBid: {
    type: Int,
    required: true,
  },
});

export const Listing = model("Listing", listingSchema);
