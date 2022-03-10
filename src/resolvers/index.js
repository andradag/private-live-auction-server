const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");
const addListing = require("./addListing");

const resolvers = {
  Query: {
    getSingleUser,
  },
  Mutation: {
    addUser,
    login,
    addListing,
  },
};

module.exports = resolvers;
