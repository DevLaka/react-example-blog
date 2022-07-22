// In function component we don't have state inside the class or object.
// So, we can't use this.setState();.
// How, can we maintain state then? Use "useState" hook.
// "useState" gives us the ability to use local state in a functional component.
import { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// Converting App class component to an functional component is covered in this commit.
// Difference between function components vs class components in the mounting phase is covered in this commit.

// No constructor, No lifecycle methods.
// Behaves like a regular JS function.
// Input: props. Output: JSX.
// Functional components is all about concept of functions and side effects.

// Impure Function
// Relies on external value (z).
// When z changes the result changes.
// In other words, z may change without impureFunction knowing.
// Example of Impure Function.
let z = 10;
const impureFunction = (x, y) => {
  return x + y + z;
};
impureFunction(2, 3); // Will return 15
z = 15;
impureFunction(2, 3); // Will return 20

// Pure Function: Return the same result given the same arguments, no matter how many times it is called.
// The result is only dependent on the arguments passed on to the function.
// Pure function should not produce side effects.
// Example of pure function.
const pureFunction = (x, y) => {
  return x + y;
};
pureFunction(5, 2); // Will always return 7.

// Side Effect
// A side effect is when a function creates some sort of effect outside of its scope.
let a = 10;
const sideEffectFunction = (x, y) => {
  a = x + y;
  return x * y;
};
sideEffectFunction(2, 3); // Will always return 6. But changes a which is out of the function scope.

// It is better to write JS functions pure way.
// But when we write functional components, we will write impure functions.
// In other words, when we are working with hooks, and we are generating side effects.

const App = () => {
  // State in the function components are stored in individual values unlike class component where state is a single object.
  const [searchTerm, setSearchTerm] = useState(""); // useState returns: [value, setValue]
  // Tip: When logging we can use object shorthand, to give the value a key.
  console.log({ searchTerm });
  // But searchTerm is not an object, its a string.
  console.log(searchTerm);

  // Converting class component handler to use hooks.
  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value.toLocaleLowerCase());
  };

  // Returns the UI
  return (
    <div className="App">
      <h1 className="app-title">My Blog</h1>
      {
        <SearchBox
          className="search-box"
          placeholder="search articles"
          onChangeHandler={onSearchChange}
        />
        // <CardList articles={filterdArticles} />
      }
    </div>
  );
};

export default App;
