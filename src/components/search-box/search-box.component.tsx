import { ChangeEvent } from "react";
import "./search-box.styles.css";

// class SearchBox extends Component {
//   // When thinking about single resposibilty, moduler and reusable components
//   // my preference is to write the child component first and use generic props names.
//   // eg: onChangeHandler rather than onSearchChange.
//   // (onSearchChange is the passing functions name in the parent.)
//   // If i write the reference part first in the parent componet, most propblaly i will
//   // name this prop as onSearchChange.
//   render() {
//     const { className, placeholder, onChangeHandler } = this.props;
//     return (
//       <input
//         // use search-box to write styles common to all search-box components.
//         // use className to write specific styles.
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

interface ISearchBoxProps {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
