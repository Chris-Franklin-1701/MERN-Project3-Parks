const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        visitedParksCount: Int
        visitedParks: [Park!]
        # trip: [TripParks!]
    }

    type Park {
        _id: ID!
        url: String!
        fullName: String!
        description: String
        designation: String
        latitude: Float!
        longitude: Float!
        activities: [Activities]
        phoneNumber: String
        address: Address!
        entranceFees: [EntranceFees]
        entrancePasses: [EntrancePass]
        images: [Image]
    }

    # input VisitedPark {
    #     _id: ID!
    #     url: String!
    #     fullName: String!
    #     parkCode: String!
    #     description: String
    #     latitude: Float!
    #     longitude: Float!
    #     activities: [Activities]
    #     topics: [Topics]
    #     states: [String]
    #     phoneNumber: String
    #     entranceFees: [EntranceFees]
    #     postalCode: Int
    #     city: String
    #     stateCode: String
    #     line1: String
    #     line2: String
    #     line3: String
    #     images: [Image]
    # }

    type Address {
        city: String!
        line1: String!
        line2: String!
        line3: String!
        postalCode: Int!
        stateCode: String!
        type: String!
    }

    type Activities {
        _id: ID
        name: String
    }

    type Topics {
        _id: ID
        name: String
    }

    type EntranceFees {
        _id: ID
        cost: Float
        description: String
        title: String
    }

    type EntrancePass {
        _id: ID
        cost: Float
        description: String
        title: String
    }

    type Image {
        _id: ID
        credit: String
        title: String
        altText: String
        caption: String
        url: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        parks: [Park]
        user: User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addVisitedPark(id: ID!): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
