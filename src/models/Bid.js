const {Schema} = require("mongoose");

const bidSchema = {
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	amount: {
		type: Number,
		required: true,
	},
	bidTime: {type: String},
};

const schema = new Schema(bidSchema, {
	toJSON: {
		getters: true,
	},
	id: true,
});

module.exports = schema;
