const {Listing} = require("../models");
const pubsub = require("./pubSub");

const controlListing = async (_, {input}) => {
	try {
		await Listing.findByIdAndUpdate(
			input.listingId,
			{status: input.status},
			{new: true}
		);

		pubsub.publish("AUCTION_BID", {
			auctionBid: {status: input.status},
		});

		return {status: input.status};
	} catch (error) {
		console.log(`[ERROR]: Could not control listing | ${error.message}`);
	}
};

module.exports = controlListing;
