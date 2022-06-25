import { Component } from "react";

class SearchBox extends Component {
  // When thinking about single resposibilty, moduler and reusable components
  // my preference is to write the child component first and use generic props names.
  // eg: onChangeHandler rather than onSearchChange.
  // (onSearchChange is the passing functions name in the parent.)
  // If i write the reference part first in the parent componet, most propblaly i will
  // name this prop as onSearchChange.
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
