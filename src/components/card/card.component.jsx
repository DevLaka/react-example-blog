import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { item, imgSrc, alt } = this.props;
//     const { id, title, body } = item;
//     return (
//       <div className="card-container" key={id}>
//         <img src={imgSrc} alt={alt} />
//         <h2>{title}</h2>
//         <p>{body}</p>
//       </div>
//     );
//   }
// }

// Nested Destructuring the item object.
const Card = ({ item: { id, title, body }, imgSrc, alt }) => {
  return (
    <div className="card-container" key={id}>
      <img src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
