const { gql } = require("apollo-server");

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
    category: Category!
    reserveAmount: Float!
    startingBid: Float!
    status: String!
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
    category: String!
    reserveAmount: Float!
    startingBid: Float!
  }

  input AddBidInput {
    amount: Float!
    listingId: ID!
  }

  type Mutation {
    addUser(userInput: UserInput!): Auth
    login(input: LoginInput!): Auth
    addListing(listingInput: ListingInput!): Listing
    saveAListing(input: ID!): User
    addBid(input: AddBidInput!): Bid!
  }

  type Subscription {
    auctionBid(listingId: ID!): Bid
  }
`;

module.exports = typeDefs;
