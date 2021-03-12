import React, { Component } from "react";

import ReactDOM from "react-dom";
import { Route, NavLink, Switch } from "react-router-dom";
import AddEntry from "../../containers/AddPost/AddEntry";
class Home extends Component {
  teamOptionsStructure = null;
  teamOptionsStructure = (
    <p style={{ textAlign: "center" }}>Something went wrong!</p>
  );

  render() {
    return (
      <div>
        <div className="top-bar">
          <header>
            <nav>
              <ul>
                <li></li>
                <li>

                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="main-section">

        </div>
      </div>
    );
  }
}

export default Home;
