const { ApolloError } = require("apollo-server-core");

const { Listing } = require("../models");

const addListing = async (_, { input }, { user }) => {
  try {
    if (user?.isAdmin) {
      const newListing = await Listing.create({
        ...input,
        createdBy: user.id,
      });

      if (newListing) {
        const listing = await Listing.findById(newListing._id).populate(
          "createdBy"
        );
        return listing;
      } else {
        console.log(
          "[ERROR]: Failed to create listing | Listing does not exist"
        );
        throw new ApolloError("Failed to create listing");
      }
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
