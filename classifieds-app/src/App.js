import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { configureStore } from '@reduxjs/toolkit'

import { Landing } from './components/Landing';
import * as theme from './utils/theme';
import { client } from './api/graphqlClient';
import { reducers } from './reducers';

const store = configureStore({ reducer: reducers })

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Landing />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
