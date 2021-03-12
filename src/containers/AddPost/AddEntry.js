import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import axios from "../../axios";

class AddEntry extends Component {
  state = {
    teamName: "",
    teams: "",
    error: false,
    date: "",
    selectedTeam: "",
    siteNameTaskSummary: "",
    TicketDetails: "",
    devMembers: "",
    QAMembers: "",
    status: '',
    dataCategory: '',
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
    axios
      .get("/categories.json")
      .then((response) => {
        this.setState({ dataCategory: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  postDataHandler = () => {
    const data = {
      date: this.state.date,
      selectedTeam: this.state.selectedTeam,
      siteNameTaskSummary: this.state.siteNameTaskSummary,
      TicketDetails: this.state.TicketDetails,
      devMembers: this.state.devMembers,
      QAMembers: this.state.QAMembers,
      dataCategory: this.state.dataCategory,
    };
    axios
      .post("/entries.json", data)
      .then((response) => {
        console.log("success");
      })
  }
  render() {
    let teamList = Object.keys(this.state.teams);
    let teamListOptionItems = teamList.map((data) => (
      <option value={data} key={data}>{data}</option>
    ));
    let categoryList = Object.keys(this.state.dataCategory);
    let categoryListOptionItems = categoryList.map((data) => (
      <option value={data} key={data}>{data}</option>
    ));
    return (
      <Aux>
        <div className="NewPost">
          <h1>Add Performance PPT Entries</h1>
          <label>Team Name</label>
          <select id="team-select"
            value={this.state.selectedTeam}
            onChange={(event) => this.setState({ selectedTeam: event.target.value })}>
            {teamListOptionItems}</select>

          <label>Category</label>
          <select
            value={this.state.dataCategory}
            onChange={(event) => this.setState({ dataCategory: event.target.value })}>
            {categoryListOptionItems}</select>

          <label>Date</label>
          <input
            type="text"
            value={this.state.date}
            onChange={(event) => this.setState({ date: event.target.value })}
          />

          <label>Site Name & Task Summary</label>
          <input
            type="text"
            value={this.state.siteNameTaskSummary}
            onChange={(event) => this.setState({ siteNameTaskSummary: event.target.value })}
          />

          <label>Ticket Details</label>
          <input
            type="text"
            value={this.state.TicketDetails}
            onChange={(event) => this.setState({ TicketDetails: event.target.value })}
          />

          <label>Dev Members</label>
          <input
            type="text"
            value={this.state.devMembers}
            onChange={(event) => this.setState({ devMembers: event.target.value })}
          />

          <label>QA Members</label>
          <input
            type="text"
            value={this.state.QAMembers}
            onChange={(event) => this.setState({ QAMembers: event.target.value })}
          />

          <button onClick={this.postDataHandler}>Submit Entry</button>
        </div>
      </Aux>
    );
  }
}

export default AddEntry;
