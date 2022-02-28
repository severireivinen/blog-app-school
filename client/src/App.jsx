import React from "react";
import "./App.scss";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";

const App = () => {
  return (
    <div className="app">
      <Blogs />
      <NewBlogButton />
    </div>
  );
};

export default App;
