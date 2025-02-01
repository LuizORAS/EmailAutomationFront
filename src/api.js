import axios from "axios";

const api = axios.create({
  baseURL: "https://classifieremails.onrender.com",
});

export default api;
