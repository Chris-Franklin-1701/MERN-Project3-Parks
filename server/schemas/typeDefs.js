const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        visitedParksCount: Int
        visitedParks: [VisitedParks!]
        trip: [TripParks!]
    }

    type Park {
        _id: ID!
        url: String!
        fullName: String!
        parkCode: String!
        description: String
        latitude: Number!
        longitude: Number!
        activities: [Activities]
        topics: [Topics]
        states: [String]
        phoneNumber: String
        entranceFees: [EntranceFees]
        postalCode: Int
        city: String
        stateCode: String
        line1: String
        line2: String
        line3: String
        images: [Image]
    }

    input VisitedPark {
        _id: ID!
        url: String!
        fullName: String!
        parkCode: String!
        description: String
        latitude: Number!
        longitude: Number!
        activities: [Activities]
        topics: [Topics]
        states: [String]
        phoneNumber: String
        entranceFees: [EntranceFees]
        postalCode: Int
        city: String
        stateCode: String
        line1: String
        line2: String
        line3: String
        images: [Image]
    }

    input TripParks {

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
        cost: Number
        description: String
        title: String
        entrancePasses: [EntrancePass]
    }

    type EntrancePass {
        _id: ID
        cost: Number
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

    type Query {
        parks: [Park]
        user: User
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        addVisitedPark(input: VisitedPark): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
