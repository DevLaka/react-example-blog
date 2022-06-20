import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

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
