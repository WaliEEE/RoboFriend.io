import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import "tachyons";
import SearchBox from "./Search";
import "./style.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robotCollections: robots,
      searchField: "",
    };
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robotCollections.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox change={this.onSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
