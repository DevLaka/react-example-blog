import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: 1,
          title: "Introduction to GIT",
          category: "GIT",
        },
        {
          id: 2,
          title: "Introduction to React",
          category: "React",
        },
        {
          id: 3,
          title: "Introduction to Redux",
          category: "React",
        },
      ],
    };
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
