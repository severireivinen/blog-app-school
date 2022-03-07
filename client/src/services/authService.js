import axios from "axios";
const baseUrl = "http://localhost:5000/api";

const login = async (credentials) => {
  const res = await axios.post(`${baseUrl}/users/login`, credentials, {
    withCredentials: true,
  });
  return res.data;
};

const register = async (credentials) => {
  const res = await axios.post(`${baseUrl}/users/register`, credentials);
  return res.data;
};

const updateToken = async () => {
  const res = await axios.post(`${baseUrl}/token`, null, {
    headers: {
      Authorization: localStorage.getItem("appToken"),
    },
    withCredentials: true,
  });
  const data = res.data;

  if (data.error) {
    return null;
  }
  return data;
};

export default { login, register, updateToken };
