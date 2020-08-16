import React from "react";
import { ThemeProvider } from "emotion-theming";
import dark from "./themes/dark";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import DetailUXUI from "./pages/DetailUXUI";
import DetailFoto from "./pages/DetailFoto";
import DetailVideo from "./pages/DetailVideo";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/detailUXUI">
            <DetailUXUI />
          </Route>
          <Route path="/detailFoto">
            <DetailFoto />
          </Route>
          <Route path="/detailVideo">
            <DetailVideo />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
