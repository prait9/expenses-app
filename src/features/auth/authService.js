import axios from "axios";

const API_URL = "http://localhost:1573/api/auth";

export const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data.user;
};
