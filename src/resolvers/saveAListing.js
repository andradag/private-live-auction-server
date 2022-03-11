const { AuthenticationError } = require("apollo-server");
const { User } = require("../models");

const saveAListing = async (_, { input }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are still not authorised to perform this operation"
      );
    }

    return await User.findByIdAndUpdate(
      context.user.id,
      {
        $push: {
          savedListings: input,
        },
      },
      { new: true, runValidators: true }
    ).populate("savedListings");
  } catch (error) {
    console.log(`[ERROR]: Failed to find myself | ${error.message}`);
  }
};

module.exports = saveAListing;
