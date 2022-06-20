import { Component } from "react";
import "./App.css";

class App extends Component {
  // Component Life Cycle Execution Order: 1
  // Initialize the state here.
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  // Component Life Cycle Execution Order: 3
  // Runs when component is mounting.
  // Mounting is the first time a component is placed in the DOM.
  // Happens once per component life cycle.
  componentDidMount() {
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
    return (
      <div className="App">
        {this.state.articles.map((article) => {
          return <h1 key={article.id}>{article.title}</h1>;
        })}
      </div>
    );
  }
}

export default App;
