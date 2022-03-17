const { Listing } = require("../models");

const addListing = async (_, { listingInput }) => {
  console.log(listingInput);
  try {
    const newListing = await Listing.create(listingInput);
    console.log(newListing);

    const newerListing = await Listing.findById(newListing._id).populate(
      "category"
    );
    return newerListing;
  } catch (error) {
    console.log(`[ERROR]: Failed to create Listing || ${error.message}`);
  }
};

module.exports = addListing;
