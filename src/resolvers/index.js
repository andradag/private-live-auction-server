const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");

const resolvers = {
  Query: {
    getSingleUser,
  },
  Mutation: {
    addUser,
    login,
  },
};

module.exports = resolvers;
