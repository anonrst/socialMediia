import { createContext, useReducer } from "react";
export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
 const DefaultPostList = [
  {
    id: '2',
    title: "goint to ano",
    body: "i am anon from india was a pleasure to  meet you guys",
    reaction: 2,
    userid: 'anon311',
    tags: ['viral', 'going to kolkata', 'mango '],
  },
  {
    id: '3',
    title: "did you meet you",
    body: "i just wanted to meet and handshake him",
    reaction: 2,
    userid: 'umme311',
    tags: ['never', 'hello', 'misyou'],
  },
  {
    id: '4',
    title: "i fall in love",
    body: "i am very cool and chill boy",
    reaction: 2,
    userid: 'adiba311',
    tags: ['viral', 'iru', 'love'],
  },
];
const dispatchPostList = (currentState, event) => {
  return currentState;
}; 
export const CreatePostProvider = ({ children }) => {
  const [postList, dispatchPosts] = useReducer(dispatchPostList, DefaultPostList);
  const addPost = () => {};
  const deletePost = () => {};

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

