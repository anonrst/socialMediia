import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./components/postList.jsx";
import CreatePost from "./components/createPost.jsx";
import { postLoader } from "./lib/contexts.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <PostList />, 
        loader: postLoader 
      },
      {
        path: "/create-post",
        element: <CreatePost />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
