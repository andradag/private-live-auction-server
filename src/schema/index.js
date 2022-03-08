import {gql} from "apollo-server";

export const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		firstName: String!
		lastName: String!
		email: String!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		getSingleUser: User
	}

	input UserInput {
		username: String!
		firstName: String!
		lastName: String!
		email: String!
		password: String!
	}

	type Mutation {
		addUser(userInput: UserInput!): Auth
	}
`;
