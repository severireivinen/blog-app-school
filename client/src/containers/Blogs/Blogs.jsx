import React from "react";
import Blog from "../../components/Blog/Blog";

import "./Blogs.scss";

const blogs = [
  {
    id: 0,
    title: "Blog 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 0,
    user: {
      username: "User 1",
    },
  },
  {
    id: 1,
    title: "Blog 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 12,
    user: {
      username: "User 2",
    },
  },
  {
    id: 2,
    title: "Blog 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 422,
    user: {
      username: "User 3",
    },
  },
  {
    id: 3,
    title: "How I met your mother",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 24,
    user: {
      username: "User 4",
    },
  },
  {
    id: 4,
    title: "Blog 5",
    content: "Lorem ipsum dolor sit amet",
    likes: 12,
    user: {
      username: "User 5",
    },
  },
  {
    id: 5,
    title: "Blog 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 4,
    user: {
      username: "User 6",
    },
  },
  {
    id: 6,
    title: "Blog 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 0,
    user: {
      username: "User 6",
    },
  },
  {
    id: 7,
    title: "Blog 7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 12,
    user: {
      username: "User 7",
    },
  },
  {
    id: 8,
    title: "Blog 8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!Quaerat delectus nobis qui officiis, laboriosam repellendus vel odio quas voluptates nam, quam architecto aut cum asperiores doloremque facere totam beatae dignissimos!",
    likes: 422,
    user: {
      username: "User 8",
    },
  },
];

export const Blogs = () => {
  return (
    <div className="app__blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
