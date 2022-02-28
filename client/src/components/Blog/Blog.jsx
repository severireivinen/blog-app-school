import React from "react";
import { GoThumbsup } from "react-icons/go";

import "./Blog.scss";

const Blog = ({ blog }) => {
  return (
    <div className="app__blog">
      <div className="app__blog-header">
        <h2 className="head-text">{blog.title}</h2>
        <div>
          <p className="">{blog.likes}</p>
          <GoThumbsup />
        </div>
      </div>

      <p className="app__blog-content p-text">{blog.content}</p>
    </div>
  );
};

export default Blog;
