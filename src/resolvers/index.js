const getSingleUser = require("./getSingleUser");
const addUser = require("./addUser");
const login = require("./login");
const addListing = require("./addListing");
const getAllCategories = require("./getAllCategories");
const saveAListing = require("./saveAListing");
const getListings = require("./getListings");
const getSingleListing = require("./getSingleListing");
const addBid = require("./addBid");

const pubsub = require("./pubSub");

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
		addBid,
	},
	Subscription: {
		auctionBid: {
			subscribe: () => pubsub.asyncIterator(["AUCTION_BID"]),
		},
	},
};

module.exports = resolvers;
