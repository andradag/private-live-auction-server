const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");
const addListing = require("./addListing");
const getAllCategories = require("./getAllCategories");
const saveAListing = require("./saveAListing");
const getAllListings = require("./getAllListings");
const getListingsWithStatus = require("./getListingsWithStatus");

const resolvers = {
  Query: {
    getSingleUser,
    getAllCategories,
    getAllListings,
    getListingsWithStatus,
  },
  Mutation: {
    addUser,
    login,
    addListing,
    saveAListing,
  },
};

module.exports = resolvers;
