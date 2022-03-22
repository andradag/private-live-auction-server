const {Listing} = require("../models");

const stopListing = async (_, {input}) => {
	const newListing = await Listing.findByIdAndUpdate(
		input.listingId,
		{status: "Ended"},
		{new: true}
	);

	return newListing;
};

module.exports = stopListing;
