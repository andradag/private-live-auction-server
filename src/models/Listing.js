const {Schema, model} = require("mongoose");
const Category = require("./Category");

const listingSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		//   images: [
		//       {
		//           type: String,
		//       }
		//   ],
		category: {
			type: Schema.Types.ObjectId,
			ref: Category,
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
		bids: [
			{
				user: {type: Schema.Types.ObjectId, required: true, ref: "User"},
				amount: {type: Number},
				bidTime: {type: String},
			},
		],
	},
	{
		toJSON: {
			getters: true,
			virtuals: true,
		},
	}
);

listingSchema.virtual("currentBid").get(function () {
	return (this?.bids && this?.bids.length && this?.bids.pop()) || null;
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
