import { Trash2, Heart, MessageCircle, Share, ThumbsDown, User, Calendar } from "lucide-react";
import { useContext, useState } from "react";
import { PostContext } from "../lib/contexts";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.reactions?.likes || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="card h-100 shadow-sm border-0 hover-shadow">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle p-2 me-3">
              <User size={16} className="text-white" />
            </div>
            <div>
              <h6 className="mb-0 fw-semibold">User {post.userId}</h6>
              <small className="text-muted d-flex align-items-center">
                <Calendar size={12} className="me-1" />
                {formatDate()}
              </small>
            </div>
          </div>
          <button
            className="btn btn-outline-danger btn-sm rounded-circle p-2"
            onClick={() => deletePost(post.id)}
            title="Delete post"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <h5 className="card-title fw-bold mb-3 text-dark">{post.title}</h5>
        <p className="card-text text-muted flex-grow-1 mb-3">{post.body}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-3">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge bg-light text-primary border me-1 mb-1">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="border-top pt-3 mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <button 
                className={`btn btn-sm d-flex align-items-center ${isLiked ? 'text-danger' : 'text-muted'}`}
                onClick={handleLike}
              >
                <Heart size={16} className={`me-1 ${isLiked ? 'fill-current' : ''}`} />
                <span className="fw-medium">{likesCount}</span>
              </button>
              
              <button className="btn btn-sm text-muted d-flex align-items-center">
                <ThumbsDown size={16} className="me-1" />
                <span className="fw-medium">{post.reactions?.dislikes || 0}</span>
              </button>
              
              <button className="btn btn-sm text-muted d-flex align-items-center">
                <MessageCircle size={16} className="me-1" />
                <span className="fw-medium">Comment</span>
              </button>
            </div>
            
            <button className="btn btn-sm text-muted">
              <Share size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
