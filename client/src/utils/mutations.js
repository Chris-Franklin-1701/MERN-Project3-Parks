import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_VISITED_PARK = gql`
  mutation addVisitedPark($input: VisitedPark!) {
    addVisitedPark(input: $input) {
      _id
      username
      email
      visitedParks {
        parkId
        url
        fullName
        description
        designation
        latitude
        longitude
        activities
        phoneNumber
        address
        # entranceFees
        # entrancePasses
        # images
      }
    }
  }
`;

export const SAVE_VISITED = gql`
mutation saveVisited($parkId: String!) {
    saveVisited(parkId: $parkId) {
      email
    }
  }
`
