import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import State from "./pages/State";
import PortfolioPage from "./pages/Portfolio";


// import Login from "./pages/Login";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const location = {
  lat: 37.42216,
  lng: -122.08427,
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/state">
              <State location={location} zoomLevel={17}/>
            </Route>
            {/* <Route exact path="/signup">
              </Route> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <PortfolioPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
