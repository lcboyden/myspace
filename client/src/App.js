import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import NoMatch from "./screens/NoMatch";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from "./components/ProtectedRoute";
import MyFriends from "./components/MyFriends";
import Posts from "./components/Posts";

function App() {
  return (
    <>
    <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/friends" component={MyFriends} />
            <ProtectedRoute exact path="/posts" component={Posts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
