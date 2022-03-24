const { Listing } = require("../models");
const pubsub = require("./pubSub");

const addBid = async (_, { input }, { user }) => {
  try {
    if (user) {
      const { status } = await Listing.findById(input.listingId);

      if (status === "Live") {
        await Listing.findByIdAndUpdate(input.listingId, {
          $push: {
            bids: {
              amount: input.amount,
              user: user.id,
              bidTime: input.bidTime,
            },
          },
        });

        const bid = {
          amount: input.amount,
          user,
          bidTime: input.bidTime,
          // listingId: input.listingId,
        };

        pubsub.publish("AUCTION_BID", {
          auctionBid: { bid, status, listingId: input.listingId },
        });

        return { bid, status };
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to add bid | ${error.message}`);
  }
};

module.exports = addBid;
