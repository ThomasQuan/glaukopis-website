import React, { useState } from "react";
import "./App.css";
import { theme } from "./styles/theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";
import Service from "./components/Service";
import Error from "./components/error";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import ScrollToTop from "./components/side-components/scroll-to-top";

function App() {
  //SET WHICH TAB YOU WANT TO WORK IN
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact>
            <Box>
              <Home />
            </Box>
          </Route>
          <Route path="/home" exact>
            <Box>
              <Home />
            </Box>
          </Route>
          <Route path="/about" exact>
            <Box>
              <About />
            </Box>
          </Route>
          <Route path="/contact" exact>
            <Box>
              <Contact />
            </Box>
          </Route>
          <Route path="/service" exact>
            <Box>
              <Service />
            </Box>
          </Route>
          <Route path="/*" exact>
            <Box>
              <Error />
            </Box>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
