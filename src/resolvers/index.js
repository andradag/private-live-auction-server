import {getSingleUser} from "./getSingleUser.js";
import {addUser} from "./addUser.js";
import {login} from "./login.js";

export const resolvers = {
	Query: {
		getSingleUser,
	},
	Mutation: {
		addUser,
		login,
	},
};
