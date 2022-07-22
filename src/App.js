// In function component we don't have state inside the class or object.
// So, we can't use this.setState();.
// How, can we maintain state then? Use "useState" hook.
// "useState" gives us the ability to use local state in a functional component.
import { useState, useEffect } from "react";
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
  // In class components, only render method runs every time component have to re-render.
  // But, in functional components the entire function runs every single time when it needs to re-render the component.
  // Reminder: In both methods, a component re-renders when there are props or state changes.
  console.log("rendering");
  // State in the function components are stored in individual values unlike class component where state is a single object.
  const [searchTerm, setSearchTerm] = useState(""); // useState returns: [value, setValue]
  // But searchTerm is not an object, its a string.
  console.log(searchTerm);

  const [articles, setArticles] = useState([]);

  // demo state
  const [demo, setDemo] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Problem
  // This causes infinite re-rendering.
  // When the state changes => Whole function runs => agin, state changes
  // Even though the values returned are same, API calls behave differently. ( new array with same values).
  // This causes an infinite loop.
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((articles) => setArticles(articles));

  // Solution: use side effects
  // Side effects can be generated from functional components using the use effect hook.
  // Again, side effect is some behavior that is triggered from the functions that affect something outside of the scope of the function.
  // It can either be we modify or we rely on some value that exists outside of our functional component.
  // Here, any fetch call is a side effect. So, we have to use the "useEffect" hook.
  // In other words, we need to trigger side effects using the use effect hook.
  // 2 parameters. 1. callback 2. array of dependencies.
  // Runs the callback at initial function run (initial render) and only when dependencies change.
  // Empty dependency array => Runs the callback only at initial render.
  useEffect(() => {
    console.log("firing effect - fetch articles");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);

  // Converting class component handler to use hooks.
  const onSearchChange = (event) => {
    console.log(event.target.value);
    // Re-rendering happens if the value for "searchTerm" is changing.
    // Calling setSearchTerm with same value does not re-render. React is smart :)
    setSearchTerm(event.target.value.toLocaleLowerCase());
  };

  const onDemoChange = (event) => {
    console.log(event.target.value);
    setDemo(event.target.value.toLocaleLowerCase());
  };

  // Problem
  // filteredArticles array is getting rebuilt, even if the articles array has not changed.
  // Even when the user input data to second demo search box, the articles array filters out.
  // const filteredArticles = articles.filter((article) =>
  //   article.title.toLocaleLowerCase().includes(searchTerm)
  // );
  // console.log(filteredArticles);

  // Solution : useEffect
  // Only runs when articles array changes and searchTerm array changes.
  useEffect(() => {
    const newFilteredArticles = articles.filter((article) =>
      article.title.toLocaleLowerCase().includes(searchTerm)
    );
    setFilteredArticles(newFilteredArticles);
    console.log("Effect Firing - filtering articles");
  }, [articles, searchTerm]);

  // Returns the UI
  return (
    <div className="App">
      <h1 className="app-title">My Blog</h1>
      <SearchBox
        className="search-box"
        placeholder="search articles"
        onChangeHandler={onSearchChange}
      />
      <SearchBox
        className="search-box"
        placeholder="demo search box"
        onChangeHandler={onDemoChange}
      />
      <CardList articles={filteredArticles} />
    </div>
  );
};

export default App;
