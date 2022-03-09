const { Listing } = require("./Listing");

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

const Event = model("Event", eventSchema);
