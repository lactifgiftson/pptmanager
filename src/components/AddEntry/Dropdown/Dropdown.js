import React from "react";
import axios from "../../axios";
class DropDown extends React.Component {
  state = {
    values: [],
  };
  componentDidMount() {
    axios
      .get("/teams.json")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({
          values: json,
        });
      });
  }
  render() {
    return (
      <div className="drop-down">
        <p>I would like to render a dropdown here from the values object</p>
        <select>
          {this.state.values.map((obj) => {
            return <option value={obj.id}>{obj.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default DropDown;
