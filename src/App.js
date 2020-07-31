import React from "react";
import { ThemeProvider } from "emotion-theming";
import dark from "./themes/dark";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Start from "./pages/Start";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Start />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
