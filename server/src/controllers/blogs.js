const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const middleware = require("../utils/middleware");

blogsRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("user");

  res.json(blogs.map((blog) => blog.toJSON()));
});

blogsRouter.post("/", middleware.isAuth, async (req, res) => {
  const body = req.body;

  const user = await User.findById(req.user.id);

  const blog = new Blog({
    title: body.title,
    content: body.content,
    likes: 0,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  res.json(savedBlog.toJSON());
});

blogsRouter.put("/:id", middleware.isAuth, async (req, res) => {
  const user = req.user;
  console.log(user);

  // Check if user has already liked the blog
  /*const blogToLike = await Blog.findById(req.params.id);

  if (blogToLike.likedBy.includes(user.id)) {
    return res.status(400).json({ error: "User has already liked this blog" });
  }*/

  // Update Blog
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { likes: 1 },
      $push: { likedBy: user.id },
    },
    { new: true }
  );

  // Update user
  await User.findByIdAndUpdate(
    user.id,
    {
      $push: { likedBlogs: updatedBlog.id },
    },
    { new: true }
  );

  if (updatedBlog) {
    res.json(updatedBlog.toJSON());
  } else {
    res.status(404).end();
  }
});

module.exports = blogsRouter;
