const Post = ({ post }) => {
    return (
        <div className="card" style={{width: "18rem", margin: "10px"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <p className="card-text">
                    <small className="text-muted">By: {post.userid}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Reactions: {post.reaction}</small>
                </p>
                <div>
                    {post.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-1">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;