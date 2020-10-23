import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Start from "./pages/Start";
import Footer from "./components/Footer";
import DetailUXUI from "./pages/DetailUXUI";
import DetailFoto from "./pages/DetailFoto";
import DetailVideo from "./pages/DetailVideo";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import DetailGraphic from "./pages/DetailGraphic";
import Imprint from "./pages/Imprint";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Start />
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
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route path="/detailGraphic">
          <DetailGraphic />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/imprint">
          <Imprint />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
