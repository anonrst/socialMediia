import { createContext } from "react";
import {redirect} from "react-router-dom"
export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};
export async function createPostAction(data) {
  const fomrData = await data.request.formData();
  const postData = Object.fromEntries(fomrData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: postData.postTitle,
      body: postData.postBody,
      reactions: {
        likes: 2,
        dislikes: 4,
      },
      userId: postData.userId,
      tags: postData.tags,
    }),
  })
    .then((res) => res.json())
    .then((posts) => {
      console.log("ost Object", posts);
    });
  return redirect("/");
}
