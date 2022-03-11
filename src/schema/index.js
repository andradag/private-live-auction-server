const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    savedListings: [Listing]
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    category: String!
    reserveAmount: Float!
    startingBid: Float!
    status: String!
  }

  type Category {
    _id: ID!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(userId: ID!): User
    getAllCategories: [Category]
    getAllListings: [Listing]
  }

  input UserInput {
    username: String!
    firstName: String!
    lastName: String!
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

  type Mutation {
    addUser(userInput: UserInput!): Auth
    login(input: LoginInput!): Auth
    addListing(listingInput: ListingInput!): Listing
    saveAListing(input: ID!): User
  }
`;

module.exports = typeDefs;
