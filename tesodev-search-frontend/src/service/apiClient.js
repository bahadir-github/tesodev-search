import axios from "axios";

const instance = axios.create({
  baseURL: "https://634a983133bb42dca407074d.mockapi.io",
});

export const apiClient = instance;
