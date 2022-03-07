import React, { useState, useEffect } from "react";
import "./App.scss";
import BlogModal from "./components/BlogModal/BlogModal";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";
import SignIn from "./components/SignIn/SignIn";

import auth from "./services/auth";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    auth.updateToken().then((data) => {
      setToken(data);
      window.localStorage.setItem("appToken", `Bearer ${JSON.stringify(data)}`);
    });
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
      <Blogs />
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
