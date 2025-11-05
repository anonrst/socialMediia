import {  useReducer } from "react";
import { PostContext } from "./contexts";

const DefaultPostList = [];
const dispatchPostList = (currentState, event) => {
  let newPostList = currentState;
  if (event.type === "DELETE") {
    newPostList = newPostList.filter(
      (item) => item.id !== event.payload.postId
    );
  } else if (event.type === "CREATE") {
    newPostList = [event.payload, ...currentState];
  } else if (event.type === "ADD_INITIAL_POSTS") {
    console.log(event.payload.posts);
    newPostList = event.payload.posts;
  }
  return newPostList;
};
export const CreatePostProvider = ({ children }) => {
  const [postList, dispatchPosts] = useReducer(
    dispatchPostList,
    DefaultPostList
  );
  const addPost = (post) => {
    dispatchPosts({
      type: "CREATE",
      payload: post,
    });
  };
  const deletePost = (postid) => {
    console.log("deleting post", postid);
    dispatchPosts({
      type: "DELETE",
      payload: {
        postId: postid,
      },
    });
  };

  return (
    <PostContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
