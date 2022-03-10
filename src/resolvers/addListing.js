const { Listing } = require("../models");

const addListing = async (_, { listingInput }) => {
  console.log(listingInput);
  try {
    const newListing = await Listing.create(listingInput);
    console.log(newListing);
    return newListing;
  } catch (error) {
    console.log(`[ERROR]: Failed to create Listing || ${error.message}`);
  }
};

module.exports = addListing;
