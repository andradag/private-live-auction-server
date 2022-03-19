const {Listing} = require("../models");
const pubsub = require("./pubSub");

const addBid = async (_, {input}, {user}) => {
	try {
		if (user) {
      await Listing.findByIdAndUpdate(input.listingId, {
        $push: {
          bids: {
            amount: input.amount,
            user: user.id,
          },
        },
      });

      const bid = {
        amount: input.amount,
        user,
        listingId: input.listingId,
      };
      //   console.log(bid);

      pubsub.publish("AUCTION_BID", {
        auctionBid: bid,
      });

      return bid;
    }
	} catch (error) {
		console.log(`[ERROR]: Failed to add bid | ${error.message}`);
	}
};

module.exports = addBid;
