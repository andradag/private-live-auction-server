const {Schema, model} = require("mongoose");

const Bid = require("./Bid");

const listingSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		propertyType: {
			type: String,
			required: true,
		},
		bedrooms: {
			type: Number,
			default: 0,
		},
		bathrooms: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
			required: true,
		},
		reserveAmount: {
			type: Number,
			required: true,
		},
		startingBid: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			required: true,
			default: "Upcoming",
			enum: ["Live", "Upcoming"],
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		googleMapUrl: {type: String},
		keyFeatures: [{type: String}],
		images: [{type: String}],
		bids: [Bid],
	},
	{
		toJSON: {
			getters: true,
			virtuals: true,
		},
		id: true,
		timestamps: true,
	}
);

listingSchema.virtual("currentBid").get(function () {
	return (this?.bids && this?.bids.length && this?.bids.pop()) || null;
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
