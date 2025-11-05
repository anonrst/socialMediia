import { useReducer, useCallback } from "react";
import { PostContext } from "./contexts";

const DefaultPostList = [];

const postReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter(post => post.id !== action.payload.postId);
    case "CREATE":
      return [{ ...action.payload, id: Date.now() }, ...state];
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;
    case "UPDATE_POST":
      return state.map(post => 
        post.id === action.payload.id 
          ? { ...post, ...action.payload.updates }
          : post
      );
    default:
      return state;
  }
};

export const CreatePostProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postReducer, DefaultPostList);

  const addPost = useCallback((post) => {
    dispatch({
      type: "CREATE",
      payload: post,
    });
  }, []);

  const deletePost = useCallback((postId) => {
    dispatch({
      type: "DELETE",
      payload: { postId },
    });
  }, []);

  const updatePost = useCallback((id, updates) => {
    dispatch({
      type: "UPDATE_POST",
      payload: { id, updates },
    });
  }, []);

  const addInitialPosts = useCallback((posts) => {
    dispatch({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  }, []);

  const contextValue = {
    postList,
    addPost,
    deletePost,
    updatePost,
    addInitialPosts,
  };

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
};
