const { ApolloError } = require("apollo-server-errors");
const { Listing } = require("../models");

const getListings = async (_, { status, category }, context) => {
  try {
    let listings;
    if (status || category) {
      console.log(status);
      const options = [];
      if (status) {
        options.push({ status });
      }

      if (category) {
        options.push({ category });
      }

      listings = await Listing.find({ $and: options });
    } else {
      listings = await Listing.find({});
    }

    if (!listings) return [];

    return listings;
  } catch (error) {
    console.log(`[ERROR]: Failed to get listings | ${error.message}`);
  }
};

module.exports = getListings;
