import { Component } from "react";
import Card from "../card/card.component";
import "./card-list-styles.css";

// class CardList extends Component {
//   render() {
//     // In React, comopnents render or re-render in 2 occations.
//     // 1. When state of the comopnent changes. ( when setSate gets called ).
//     // 2. When the props of the component changes.
//     // console.log(this.props.articles);
//     const { articles } = this.props;
//     return (
//       <div className="card-list">
//         {articles.map((article) => {
//           const { id, title, body } = article;
//           return (
//             <Card
//               item={article}
//               imgSrc={`https://robohash.org/${id}?set=set1&size=180x180`}
//               alt={`article ${title}`}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// Functional component gets 2 arguments.
// 1. props
// 2. forwardRef (Not used here)
// const CardList = (props) => {
//   const { articles } = props;
//   return (
//     <div className="card-list">
//       {articles.map((article) => {
//         const { id, title, body } = article;
//         return (
//           <Card
//             item={article}
//             imgSrc={`https://robohash.org/${id}?set=set1&size=180x180`}
//             alt={`article ${title}`}
//           />
//         );
//       })}
//     </div>
//   );
// };

// Small improvements to above functional component.
const CardList = ({ articles }) => (
  <div className="card-list">
    {articles.map((article) => {
      const { id, title, body } = article;
      return (
        <Card
          item={article}
          imgSrc={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`article ${title}`}
        />
      );
    })}
  </div>
);

export default CardList;
