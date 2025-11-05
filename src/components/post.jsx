"use client";
import { Trash } from "lucide-react";
import { useContext } from "react";
import { PostContext } from "../lib/contexts";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  return (
    <div className="card" style={{ width: "30rem", margin: "30px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 text-white translate-middle bg-danger border border-light rounded-circle p-1"
            onClick={() => deletePost(post.id)}
          >
            <Trash />
          </span>
          <span className="visually-hidden">New alerts</span>
        </h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          <small className="text-muted">By: {post.userId}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Reactions: {post.reactions.likes}</small>
          <small className="text-muted">Reactions: {post.reactions.dislikes}</small>
        </p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">
              #{tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success" role="alert">
          you received {post.reaction} reaction on this post
        </div>
      </div>
    </div>
  );
};

export default Post;
