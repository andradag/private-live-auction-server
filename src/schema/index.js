const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Listing {
    _id: ID!
    title: String!
    description: String!
    category: String!
    reserveAmount: Float!
    startingBid: Float!
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
  }
`;

module.exports = typeDefs;
