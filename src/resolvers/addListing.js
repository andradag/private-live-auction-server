const { ApolloError } = require("apollo-server-core");
const { Listing } = require("../models");

const addListing = async (_, { listingInput }, { user }) => {
  try {
    if (user?.isAdmin) {
      const listing = await Listing.create({
        ...listingInput,
        createdBy: user.id,
      });
      return listing;
    } else if (!user?.isAdmin) {
      console.log(
        "[ERROR]: Failed to create listing | Only admins can perform this operation"
      );
      throw new ApolloError("Failed to create listing");
    } else {
      console.log("[ERROR]: Failed to create listing | User not logged in");
      throw new ApolloError("Failed to create listing");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create listing | ${error.message}`);
    throw new ApolloError("Failed to create listing");
  }
};

module.exports = addListing;
