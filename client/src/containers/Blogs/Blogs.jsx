import React from "react";
import Blog from "../../components/Blog/Blog";

import "./Blogs.scss";

export const Blogs = ({ blogs, setBlogs }) => {
  return (
    <div className="app__blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} />
      ))}
    </div>
  );
};
