import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "dev", lastName: "laka" },
      age: 25,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}
          </p>
          {/*  1)  React does shallow Merging of state object.
                  In simpler terms, looking for the property with matching key
                  and updates it.
              
              2)  In order to ensure that the app is running faultlessly, we are
                  updating the state to same type of values.
                  Wrong: this.setState({ name : "devlaka" }) // Object ==> String
                  Correct: this.setState({ name: { firstName: "siri", lastName: "pala" } }) // Object ==> Object
                  Doing so will break the app becuase we are rendering
                  this.state.name.firstName but there is no property called firstName
                  after updateing the state.*/}
          <button
            onClick={() => {
              this.setState({ name: { firstName: "siri", lastName: "pala" } });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
