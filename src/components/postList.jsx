import { Suspense, useContext, useEffect } from "react";
import Post from "./post";
import Welcome from "./welcome";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
import { PostContext } from "../lib/contexts";

const PostList = () => {
  const initialPosts = useLoaderData();
  const { postList, addInitialPosts } = useContext(PostContext);
  
  useEffect(() => {
    if (initialPosts && initialPosts.length > 0 && postList.length === 0) {
      addInitialPosts(initialPosts);
    }
  }, [initialPosts, addInitialPosts, postList.length]);
  
  return (
    <div className="container-fluid px-4 py-3">
      <Suspense fallback={<Loading />}>
        {postList.length === 0 ? (
          <Welcome />
        ) : (
          <div className="row g-4">
            {postList.map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <Post post={post} />
              </div>
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default PostList;
