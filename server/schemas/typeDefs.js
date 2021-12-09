const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        visitedParks: [VisitedParks]
        trip: [TripParks]
    }

    type Parks {
        _id: ID
        url: String
        fullName: String
        parkCode: String
        description: String
        latitude: Number
        longitude: Number
        activities: [Activities]
        topics: [Topics]
        states: [String]
        phoneNumber: Number
        entranceFees: [EntranceFees]
        postalCode: Number
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
        entrancePasses: [EntrancePasses]
    }

    type EntrancePasses {
        _id: ID
        cost: Number
        description: String
        title: String
    }

    type Images {
        _id: ID
        credit: String
        title: String
        altText: String
        caption: String
        url: String
    }

    type VisitedParks {
        _id: ID
        parks: [Parks]
    }

    type Trip {
        _id: ID
        parks: [Parks]
    }

    type Query {
        parks: [Parks]
        user: User
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        addPark(_id: ID!, fullName: String!): Parks
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
