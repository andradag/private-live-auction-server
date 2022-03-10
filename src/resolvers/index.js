const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");
const addListing = require("./addListing");
const getAllCategories = require("./getAllCategories");

const resolvers = {
  Query: {
    getSingleUser,
    getAllCategories,
  },
  Mutation: {
    addUser,
    login,
    addListing,
  },
};

module.exports = resolvers;
