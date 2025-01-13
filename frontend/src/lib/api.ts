import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};
