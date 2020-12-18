import React, { Component } from "react";
import { robots } from "../components/robots";
import CardList from "../components/CardList";
import SearchBox from "../components/Search";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
/*****For Styling*****/
import "tachyons";
import "../containers/style.css";

class App extends Component {

  /*****State Constructor*****/

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  /*****Event Catcher*****/

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {

     /*****Filter Objects*****/

    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });


    if (!robots.length) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBox change={this.onSearch} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
