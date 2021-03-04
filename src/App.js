import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
