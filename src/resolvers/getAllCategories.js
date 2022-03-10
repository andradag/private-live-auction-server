const { ApolloError } = require("apollo-server-errors");
const Category = require("../models");

const getAllCategories = async (_, __, context) => {
  try {
    const categories = await Category.find({});

    if (!categories) {
      throw new ApolloError("Could not get all categories");
    }

    return categories;
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories | ${error.message}`);
  }
};

module.exports = getAllCategories;
