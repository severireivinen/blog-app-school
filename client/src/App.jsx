import React, { useState, useEffect } from "react";
import "./App.scss";
import BlogModal from "./components/BlogModal/BlogModal";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";
import SignIn from "./components/SignIn/SignIn";

import authService from "./services/authService";
import blogService from "./services/blogService";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    authService.updateToken().then((data) => {
      setToken(data);
      window.localStorage.setItem("appToken", `Bearer ${data}`);
    });
  }, []);

  useEffect(() => {
    blogService.getAllBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (token === null) {
    return <SignIn setToken={setToken} />;
  }

  return (
    <div className="app">
      <Blogs blogs={blogs} setBlogs={setBlogs} />
      <NewBlogButton openModal={openModal} />
      <div>
        {modalIsOpen && (
          <BlogModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        )}
      </div>
    </div>
  );
};

export default App;
