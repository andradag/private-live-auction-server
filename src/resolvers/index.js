import {getSingleUser} from "./getSingleUser.js";
import {addUser} from "./addUser.js";

export const resolvers = {
	Query: {
		getSingleUser,
	},
	Mutation: {
		addUser,
	},
};
