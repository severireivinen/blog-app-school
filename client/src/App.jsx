import React from "react";
import "./App.scss";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <div className="app">
      <SignIn />
      {// <Blogs />
      // <NewBlogButton />
      }
    </div>
  );
};

export default App;
