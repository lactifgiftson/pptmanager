import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import axios from "../../axios";
class AddEntry extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    teams: "",
    error: false,
    date: "",
    siteNameTaskSummary: "text",
    TicketDetails: "text",
    DevMember: "text",
    QAMember: "text",
  };
  componentDidMount() {
    axios
      .get("/teams.json")
      .then((response) => {
        this.setState({ teams: response.data });
        console.log(this.state.teams);
      })
      .catch((error) => {
        //console.log(error);
        this.setState({ error: true });
      });
  }
  render() {
    let teamList = Object.keys(this.state.teams);
    let teamListOptionItems = teamList.map((planet) => (
      <option key={planet}>{planet}</option>
    ));
    return (
      <Aux>
        <div className="NewPost">
          <h1>Add a Performance PPT Entry</h1>
          <select>{teamListOptionItems}</select>
          <label>Site Name & Task Summary</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
          <label>Ticket Details</label>
          <textarea
            rows="4"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
          <label>Ticket Details</label>
          <select
            value={this.state.author}
            onChange={(event) => this.setState({ author: event.target.value })}
          >
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
          </select>
          <button onClick={this.postDataHandler}>Add Post</button>
        </div>
      </Aux>
    );
  }
}

export default AddEntry;
