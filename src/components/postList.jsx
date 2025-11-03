import { useContext } from "react";
import { PostContext } from "../lib/Postcontext";
import Post from "./post";
const PostList = () => {
    const {postList} = useContext(PostContext);
    console.log(postList);
    return (
        <>
       {postList.map((post) => <Post key={post.id} post={post}/>)}
        </>
    )
}

export default PostList; 