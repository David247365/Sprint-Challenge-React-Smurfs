import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(smurfs => this.setState({ smurfs: smurfs.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

export default App;
