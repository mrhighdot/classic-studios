import { gql } from "@apollo/server";

const typeDefs = gql`
  type User {
    id: ID!
    username: string!
    password: string!
  }
`;

export default typeDefs;
