import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.SERVICES_URI + "/graphql",
    cache: new InMemoryCache(),
})

