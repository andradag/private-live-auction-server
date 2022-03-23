const {gql} = require("apollo-server");

const typeDefs = gql`
	type User {
		id: ID!
		username: String!
		firstName: String!
		lastName: String!
		imageUrl: String!
		email: String!
		isAdmin: Boolean!
		savedListings: [Listing]
	}

	type Listing {
		_id: ID!
		title: String!
		description: String!
		propertyType: String!
		reserveAmount: Float!
		startingBid: Float!
		status: String!
		bedrooms: Int!
		bathrooms: Int!
		createdBy: User!
		createdAt: String!
		updatedAt: String!
		googleMapUrl: String
		keyFeatures: [String]
		images: [String]
		currentBid: Bid
		bids: [Bid]
	}

	type Category {
		_id: ID!
		title: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Bid {
		amount: Float!
		user: User!
		listingId: ID!
		bidTime: String!
	}

	type AuctionBid {
		bid: Bid
		status: String
	}

	type Query {
		getSingleUser(userId: ID!): User
		getAllCategories: [Category]
		getSingleListing(_id: ID!): Listing
		getListings(status: String, category: ID): [Listing]
	}

	input UserInput {
		username: String!
		firstName: String!
		lastName: String!
		imageUrl: String
		email: String!
		password: String!
	}

	input LoginInput {
		email: String!
		password: String!
	}

	input ListingInput {
		title: String!
		description: String!
		propertyType: String!
		reserveAmount: Float!
		startingBid: Float!
		bedrooms: Int!
		bathrooms: Int!
		googleMapUrl: String
		keyFeatures: [String]
		images: [String]
	}

	input AddBidInput {
		amount: Float!
		listingId: ID!
		bidTime: String!
	}

	input ControlListingInput {
		listingId: ID!
		status: String!
	}

	type Mutation {
		addUser(userInput: UserInput!): Auth
		login(input: LoginInput!): Auth
		addListing(input: ListingInput!): Listing
		saveAListing(input: ID!): User
		addBid(input: AddBidInput!): AuctionBid!
		deleteListing(input: ID!): String
		controlListing(input: ControlListingInput): AuctionBid
	}

	type Subscription {
		auctionBid(listingId: ID!): AuctionBid
	}
`;

module.exports = typeDefs;
