import React from "react";
import { BsPencilSquare } from "react-icons/bs";

import "./NewBlogButton.scss";

const NewBlogButton = ({openModal}) => {
  return (
    <div className="app__newblog" onClick={openModal}>
      <BsPencilSquare />
    </div>
  );
};

export default NewBlogButton;
