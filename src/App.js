import { Component } from "react";
import "./App.css";

class App extends Component {
  // Component Life Cycle Execution Order: 1
  // Initialize the state here.
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      articles: [],
      searchTerm: "",
    };
  }

  // Component Life Cycle Execution Order: 3
  // Runs when component is mounting.
  // Mounting is the first time a component is placed in the DOM.
  // Happens once per component life cycle.
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((articles) =>
        this.setState(
          () => {
            return {
              articles,
            };
          },
          () => console.log(this.state)
        )
      );
  }

  // Component Life Cycle Execution Order: 2
  // Running inital render with initialzed state.
  // Determines what to show.
  // Component Life Cycle Execution Order: 3
  // Re-renders beacuse state is updated in componentDidMount.
  render() {
    // Another solution is moving filterd array here.
    // And, then map over it inside return.
    console.log("Render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search articles"
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({ searchTerm: event.target.value.toLocaleLowerCase() });
          }}
        />
        {this.state.articles
          .filter((article) => article.title.toLocaleLowerCase().includes(this.state.searchTerm))
          .map((article) => {
            return <h1 key={article.id}>{article.title}</h1>;
          })}
      </div>
    );
  }
}

export default App;
