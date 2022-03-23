const { ApolloError } = require("apollo-server-errors");
const { Listing } = require("../models");

const getListingsWithStatus = async (_, status, context) => {
  console.log(status);
  try {
    const listings = await Listing.find(status);
    if (!listings) {
      throw new ApolloError(`Could not get listings with status ${status}`);
    }

    return listings;
  } catch (error) {
    console.log(`[ERROR]: Failed to get listings | ${error.message}`);
  }
};

module.exports = getListingsWithStatus;
