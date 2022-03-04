import React, {useState} from "react";
import "./App.scss";
import BlogModal from "./components/BlogModal/BlogModal";
import NewBlogButton from "./components/NewBlogButton/NewBlogButton";
import { Blogs } from "./containers/Blogs/Blogs";

const App = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="app">
      <Blogs />
      <NewBlogButton openModal={openModal}/>
      <div>
        {modalIsOpen && <BlogModal closeModal={closeModal} modalIsOpen={modalIsOpen}/>}
      </div>
    </div>
  );
};

export default App;
