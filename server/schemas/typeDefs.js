const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        visitedParksCount: Int
        saveVisited: [Visited]
        # trip: [TripParks!]
    }

    type Visited {
        parkId: String!
    }

    type Park {
        parkId: String!
        url: String!
        fullName: String!
        description: String
        designation: String
        latitude: String!
        longitude: String!
        activities: [Activities]
        phoneNumber: String
        address: String!
        entranceFees: [EntranceFee]
        entrancePasses: [EntrancePass]
        images: [Image]
    }

    input ActivityInput {
        _id: ID
        name: String
    }


    type Activities {
        _id: ID
        name: String
    }

    type Topics {
        _id: ID
        name: String
    }

    type EntranceFee {
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
        login(email: String!, password: String!): Auth
        saveVisited(parkId: String!): User
    }
`;

module.exports = typeDefs;
