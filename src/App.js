import React from "react";
import { ThemeProvider } from "emotion-theming";
import dark from "./themes/dark";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <h1>Hello people of the internet</h1>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
