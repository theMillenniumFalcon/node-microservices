import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`;