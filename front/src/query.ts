import { gql } from "urql";

const usersQuery = gql`
  query {
    users {
      id
      email
      name
    }
  }
`;
