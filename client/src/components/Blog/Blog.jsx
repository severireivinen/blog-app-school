import React from "react";
import { GoThumbsup } from "react-icons/go";

import "./Blog.scss";

const Blog = ({ blog }) => {
  console.log(blog);

  return (
    <div className="app__blog">
      <div className="app__blog-header">
        <div className="app__blog-hero">
          <h2 className="head-text">{blog.title}</h2>
          <span>{blog.user.username}</span>
        </div>
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
