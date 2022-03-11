const { ApolloError } = require("apollo-server-errors");
const { Listing } = require("../models");

const getAllListings = async (_, __, context) => {
  try {
    const listings = await Listing.find({});
    if (!listings) {
      throw new ApolloError("Could not get all listings");
    }

    return listings;
  } catch (error) {
    console.log(`[ERROR]: Failed to get listings | ${error.message}`);
  }
};

module.exports = getAllListings;
