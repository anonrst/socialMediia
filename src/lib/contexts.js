import { createContext } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  updatePost: () => {},
  addInitialPosts: () => {},
});

export const postLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=20");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
};
