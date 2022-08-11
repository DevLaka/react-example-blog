import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

import { getData } from "./utils/data.utils";

export interface IArticle {
  id: string;
  title: string;
  body: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [demo, setDemo] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const fetchUsers = async () => {
      const articles = await getData<IArticle[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setArticles(articles);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log({ event });
    console.log(event.target.value);
    setSearchTerm(event.target.value.toLocaleLowerCase());
  };

  const onDemoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    setDemo(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const newFilteredArticles = articles.filter((article) =>
      article.title.toLocaleLowerCase().includes(searchTerm)
    );
    setFilteredArticles(newFilteredArticles);
    console.log("Effect Firing - filtering articles");
  }, [articles, searchTerm]);

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
