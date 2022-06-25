import { Component } from "react";

class CardList extends Component {
  render() {
    // In React, comopnents render or re-render in 2 occations.
    // 1. When state of the comopnent changes. ( when setSate gets called ).
    // 2. When the props of the component changes.
    console.log(this.props.articles);
    const { articles } = this.props;
    return (
      <div>
        {articles.map((article) => {
          return <h1 key={article.id}>{article.title}</h1>;
        })}
      </div>
    );
  }
}

// Exporting default will allow us to directly import this component
// when we don't destructuring the import like when we importing
// component from react.
export default CardList;
