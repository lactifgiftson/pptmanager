import React, { Component, useState } from "react";
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddEntry extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    teams: "",
    error: false,
  };
  teamOptionsStructure = null;
  teamOptionsStructure = (
    <p style={{ textAlign: "center" }}>Something went wrong!</p>
  );
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
    let planets = Object.keys(this.state.teams);
    let optionItems = planets.map((planet) => (
      <option key={planet}>{planet}</option>
    ));
    const Example = () => {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      );
    };
    return (
      <div className="NewPost">
        <h1>Add a Performance PPT Entry</h1>
        <select>{optionItems}</select>
        {Example}

        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default AddEntry;
