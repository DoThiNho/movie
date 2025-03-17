export const PATH_URL = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "",
  NOT_FOUND: "*",
  EDIT_PROFILE: "/profile",
  MOVIE: "/movie",
};

export const API_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  AUTH: {
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    LOGOUT: "auth/logout",
    ME: "auth/me",
  },
  USER: {
    UPDATE: "users",
  },
  IMAGE: {
    USER: "images/upload/user",
    MOVIE: "images/upload/movie",
  },
};
