import { gql } from '@apollo/client';

export const CREATE_LISTING = gql`
  mutation($description: String!, $title: String!) {
    createListing(description: $description, title: $title) {
      id
    }
  }
`;