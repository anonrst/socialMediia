import Post from "./post";
import Welcome from "./welcome";
import { PostContext } from "../lib/contexts";
import Loading from "./Loading";
import {useLoaderData} from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData()
  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
