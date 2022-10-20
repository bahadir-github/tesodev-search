import axios from "axios";

const instance = axios.create({
  baseURL: "https://635190539d64d7c71303072d.mockapi.io/users/",
});

export const apiClient = instance;
