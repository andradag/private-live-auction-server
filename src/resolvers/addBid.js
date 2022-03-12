const { PubSub } = require("graphql-subscriptions");

const pubsub = new PubSub();

const addBid = (_, { input }) => {
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
};

module.exports = addBid;
