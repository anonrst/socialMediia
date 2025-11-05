import { MessageCircle, PlusCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="mb-4">
              <MessageCircle size={80} className="text-primary mb-3" />
            </div>
            <h1 className="display-4 fw-bold text-dark mb-3">Welcome to SocialHub</h1>
            <p className="lead text-muted mb-4">
              Connect with friends, share your thoughts, and discover amazing content from people around the world.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/create-post" className="btn btn-primary btn-lg px-4">
                <PlusCircle size={20} className="me-2" />
                Create Your First Post
              </Link>
              <button className="btn btn-outline-primary btn-lg px-4">
                <Users size={20} className="me-2" />
                Explore Community
              </button>
            </div>
            <div className="mt-5 pt-4 border-top">
              <p className="text-muted small mb-0">
                No posts yet? Be the first to share something amazing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
