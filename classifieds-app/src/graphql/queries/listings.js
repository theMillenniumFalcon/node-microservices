import { gql } from '@apollo/client';

export const LISTINGS_QUERY = gql`
  {
    listings {
      description
      id
      title
    }
  }
`;