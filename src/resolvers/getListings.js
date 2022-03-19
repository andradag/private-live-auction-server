const {ApolloError} = require("apollo-server-errors");
const {Listing} = require("../models");

const getListings = async (_, {status, category}, context) => {
	try {
		let listings = [];
		if (status || category) {
			const options = [];
			if (status) {
				options.push({status});
			}

			if (category) {
				options.push({category});
			}

			listings = await Listing.find({$and: options})
				.populate("category")
				.populate("createdBy")
				.populate({path: "bids", populate: {path: "user", model: "User"}});
		} else {
			listings = await Listing.find({})
				.populate("category")
				.populate("createdBy")
				.populate({path: "bids", populate: {path: "user", model: "User"}});
		}

		// console.log(listings);
		return listings;
	} catch (error) {
		console.log(`[ERROR]: Failed to get listings | ${error.message}`);
	}
};

module.exports = getListings;
