import { IArticle } from "../../App";
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

interface ICardProps {
  item: IArticle;
  imgSrc: string;
  alt: string;
}

// Nested Destructuring the item object.
const Card = ({ item: { id, title, body }, imgSrc, alt }: ICardProps) => {
  return (
    <div className="card-container" key={id}>
      <img src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
