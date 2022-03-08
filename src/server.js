import "dotenv/config";
import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";

import {typeDefs} from "./schema/index.js";
import {resolvers} from "./resolvers/index.js";
import {authMiddleware} from "./utils/auth.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

const init = async () => {
	try {
		const MONGODB_URI =
			process.env.MONGODB_URI ||
			`mongodb://localhost:27017/${process.env.DB_NAME}`;
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const {url} = await server.listen({port: process.env.PORT || 4000});
		console.log(`Server running on ${url}`);
	} catch (error) {
		console.log(`[ERROR]: Failed to connect to DB | ${error.message}`);
	}
};

init();
