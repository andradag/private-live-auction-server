const { ApolloError } = require("apollo-server-errors");
const { Listing } = require("../models");

const getListings = async (_, { status }, context) => {
  console.log(status);
  try {
    let listings = [];
    if (status) {
      const options = [];
      if (status) {
        options.push({ status });
      }

      listings = await Listing.find({ $and: options })
        .populate("createdBy")
        .populate({ path: "bids", populate: { path: "user", model: "User" } });
    } else {
      listings = await Listing.find({})
        .populate("createdBy")
        .populate({ path: "bids", populate: { path: "user", model: "User" } });
    }

    // console.log(listings);
    return listings;
  } catch (error) {
    console.log(`[ERROR]: Failed to get listings | ${error.message}`);
  }
};

module.exports = getListings;
