import Root from "./components/Root";
import { createGlobalStyle } from "styled-components";

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
    <div>
      <GlobalStyle />
      <Root />
    </div>
  );
}

export default App;
