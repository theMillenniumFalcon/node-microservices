import { gql } from '@apollo/client';

export const DELETE_USERSESSION_MUTATION = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;