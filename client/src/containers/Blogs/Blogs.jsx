import React, { useState, useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import blogService from "../../services/blogService";

import "./Blogs.scss";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getAllBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className="app__blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} />
      ))}
    </div>
  );
};
