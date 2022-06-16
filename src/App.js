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
            // Problem Definition
            // onClick={() => {
            //   this.setState({ name: { firstName: "siri", lastName: "pala" } });
            //   // Logging state here will print previous state values.
            //   // Reason: setState is async and react batches state updates.
            //   // console.log(this.state);
            // }}

            // Solution
            // Here we pass 2 parameters to OnClick. Both functions.
            // First one to update the state and second callbacks after state is updated.
            // Previously for the setState a object is passed. But, here a function is passed.
            // Thus, setState has access to current state and the props of the component.
            onClick={
              (() => {
                this.setState((state, props) => {
                  return {
                    name: { firstName: "siri", lastName: "pala" },
                  };
                });
              },
              () => {
                console.log(this.state);
              })
            }
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
