import React from "react";
import { BsPencilSquare } from "react-icons/bs";

import "./NewBlogButton.scss";

const NewBlogButton = () => {
  return (
    <div className="app__newblog">
      <BsPencilSquare />
    </div>
  );
};

export default NewBlogButton;
