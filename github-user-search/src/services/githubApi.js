import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

// Optional: add token if using personal access token
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  headers: token
    ? { Authorization: `token ${token}` }
    : {},
});

// 🔎 Search GitHub users by username
export const searchUsers = async (username) => {
  try {
    const response = await api.get(`/search/users?q=${username}`);
    return response.data.items; // returns an array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// 👤 Get details of a specific GitHub user
export const getUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data; // returns user details
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
