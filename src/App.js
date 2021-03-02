import React, { Component } from "react";
import "./App.css";
import AddEntry from "./components/AddEntry/AddEntry";
import axios from "axios";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddEntry>npm install axios</AddEntry>
      </div>
    );
  }
}

export default App;
