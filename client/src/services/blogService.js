import axios from "axios";
const baseUrl = "http://localhost:5000/api/blogs";

const getAllBlogs = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createBlog = async (createBlog) => {
  const res = await axios.post(baseUrl, createBlog, {
      headers: {
        Authorization: localStorage.getItem("appToken")
    }
  })
  return res.data
}

export default { getAllBlogs, createBlog };
