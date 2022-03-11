const { ApolloError } = require("apollo-server-errors");
const { User } = require("../models");

const getSingleUser = async (_, { userId }, context) => {
  try {
    const userFromDb = await User.findById({ _id: userId });

    if (!userFromDb) {
      throw new ApolloError("Could not get user");
    }

    return userFromDb;
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
  }
};

module.exports = getSingleUser;
