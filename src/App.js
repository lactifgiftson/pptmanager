import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AddEntry from "./containers/AddPost/AddEntry";
import { BrowserRouter } from "react-router-dom";
import { Route, NavLink, Switch } from "react-router-dom";
import Download from './containers/Download/Download';
import Visualize from './containers/Visualize/Visualize';
import axios from "axios";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink
          exact
          to="/"
          activeClassName="my-active"
          activeStyle={{
            color: "#fa923f",
            textDecoration: "underline",
          }}
        >
          Home
                  </NavLink>
        <NavLink
          exact
          to="/new-post"
          activeClassName="my-active"
          activeStyle={{
            color: "#fa923f",
            textDecoration: "underline",
          }}
        >
          Add Performance Entry
                  </NavLink>

        <NavLink
          exact
          to="/download"
          activeClassName="my-active"
          activeStyle={{
            color: "#fa923f",
            textDecoration: "underline",
          }}
        >
          Download as PPT
                  </NavLink>
        <NavLink
          exact
          to="/visualize"
          activeClassName="my-active"
          activeStyle={{
            color: "#fa923f",
            textDecoration: "underline",
          }}
        >
          Visualize Data
                  </NavLink>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new-post" component={AddEntry} />
            <Route exact path="/download" component={Download} />
            <Route exact path="/visualize" component={Visualize} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
