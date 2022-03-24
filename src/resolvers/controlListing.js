const { Listing } = require("../models");
const pubsub = require("./pubSub");

const controlListing = async (_, { input }) => {
  try {
    await Listing.findByIdAndUpdate(input.listingId, { status: input.status });

    pubsub.publish("AUCTION_BID", {
      auctionBid: { status: input.status, listingId: input.listingId },
    });

    return { status: input.status };
  } catch (error) {
    console.log(`[ERROR]: Could not control listing | ${error.message}`);
  }
};

module.exports = controlListing;
