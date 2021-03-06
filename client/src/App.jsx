import React, { useState, useEffect } from "react";
import "./App.scss";
import BlogModal from "./components/BlogModal/BlogModal";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";
import SignIn from "./components/SignIn/SignIn";

import authService from "./services/authService";
import blogService from "./services/blogService";
import LogoutButton from "./components/LogoutButton/LogoutButton";

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
      <LogoutButton setToken={setToken}/>
      <Blogs blogs={blogs} setBlogs={setBlogs} />
      <NewBlogButton openModal={openModal} />
      <div>
        {modalIsOpen && (
          <BlogModal
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            blogs={blogs}
            setBlogs={setBlogs}
          />
        )}
      </div>
    </div>
  );
};

export default App;
