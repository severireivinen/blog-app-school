import React from "react";
import { GoThumbsup } from "react-icons/go";

import blogService from "../../services/blogService";

import "./Blog.scss";

const Blog = ({ blog, blogs, setBlogs }) => {
  const handleLike = async () => {
    await blogService.likeBlog(blog.id).then(() => {
      const updatedBlog = { ...blog, likes: (blog.likes += 1) };
      setBlogs(
        blogs.map((blog) => (blog.id !== updatedBlog.id ? blog : updatedBlog))
      );
    });
  };

  return (
    <div className="app__blog">
      <div className="app__blog-header">
        <div className="app__blog-hero">
          <h2 className="head-text">{blog.title}</h2>
          <span>{blog.user.username}</span>
        </div>
        <div>
          <p>{blog.likes}</p>
          <GoThumbsup onClick={handleLike} />
        </div>
      </div>

      <p className="app__blog-content p-text">{blog.content}</p>
    </div>
  );
};

export default Blog;
