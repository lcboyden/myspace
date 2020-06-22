import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import NoMatch from "./screens/NoMatch";
import NavBar from "./components/NavBar";
import Demo from "./screens/componentsDemo/Demo";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
