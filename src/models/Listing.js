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
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
