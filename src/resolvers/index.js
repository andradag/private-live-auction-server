const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");
const addListing = require("./addListing");
const getAllCategories = require("./getAllCategories");
const saveAListing = require("./saveAListing");
const getListings = require("./getListings");
const getSingleListing = require("./getSingleListing");
// const addBid = require("./addBid");

const { PubSub } = require("graphql-subscriptions");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    getSingleUser,
    getAllCategories,
    getListings,
    getSingleListing,
  },
  Mutation: {
    addUser,
    login,
    addListing,
    saveAListing,
    addBid: (_, { input }) => {
      console.log(input);
      // get input
      // add to DB

      pubsub.publish("AUCTION_BID", {
        auctionBid: {
          amount: input.amount,
          user: input.user,
        },
      });

      return {
        amount: input.amount,
        user: input.user,
      };
    },
  },
  Subscription: {
    auctionBid: {
      subscribe: () => pubsub.asyncIterator(["AUCTION_BID"]),
    },
  },
};

module.exports = resolvers;
