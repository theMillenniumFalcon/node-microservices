import { gql } from '@apollo/client';

export const USERSESSION_QUERY = gql`
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`;