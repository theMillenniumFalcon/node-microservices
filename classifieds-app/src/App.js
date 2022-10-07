import { ApolloProvider } from '@apollo/client';

import { Root } from './components/Root';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as theme from './utils/theme';
import { client } from './api/graphqlClient';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
