const { ApolloError } = require("apollo-server-core");
const { Listing } = require("../models");

const deleteListing = async (_, { input }) => {
  try {
    await Listing.findByIdAndDelete(input);
    return ` Listing Id: ${input} has been removed`;
  } catch (error) {
    console.log(`[ERROR]: Failed to delete listing | ${error.message}`);
    throw new ApolloError("Failed to delete listing");
  }
};

module.exports = deleteListing;
