const { Schema, model } = require("mongoose");

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
  //   images: [
  //       {
  //           type: String,
  //       }
  //   ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  reserveAmount: {
    type: Number,
    required: true,
  },
  startingBid: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Upcoming",
    enum: ["Live", "Upcoming"],
  },
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
