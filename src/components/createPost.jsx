import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PenTool, Hash, Heart, User, Loader2 } from "lucide-react";
import { PostContext } from "../lib/contexts";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    postTitle: "",
    postBody: "",
    reactions: "",
    tags: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const tagsArray = formData.tags 
        ? formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
        : [];

      const newPost = {
        title: formData.postTitle,
        body: formData.postBody,
        reactions: {
          likes: parseInt(formData.reactions) || 0,
          dislikes: 0,
        },
        userId: parseInt(formData.userId) || 1,
        tags: tagsArray,
        id: Date.now()
      };

      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const createdPost = await response.json();
        addPost(createdPost);
        navigate("/");
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      userId: "",
      postTitle: "",
      postBody: "",
      reactions: "",
      tags: ""
    });
  };

  return (
    <div className="container-fluid px-4 py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0 d-flex align-items-center">
                <PenTool size={24} className="me-2" />
                Create New Post
              </h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="userId" className="form-label fw-semibold">
                      <User size={18} className="me-2" />
                      User ID
                    </label>
                    <input
                      name="userId"
                      type="text"
                      className="form-control form-control-lg"
                      id="userId"
                      placeholder="Enter your user ID"
                      value={formData.userId}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="postTitle" className="form-label fw-semibold">
                      Post Title
                    </label>
                    <input
                      type="text"
                      name="postTitle"
                      className="form-control form-control-lg"
                      id="postTitle"
                      placeholder="What's on your mind?"
                      value={formData.postTitle}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="postBody" className="form-label fw-semibold">
                      Post Content
                    </label>
                    <textarea
                      name="postBody"
                      rows={6}
                      className="form-control"
                      id="postBody"
                      placeholder="Share your thoughts, experiences, or ideas..."
                      value={formData.postBody}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="reactions" className="form-label fw-semibold">
                      <Heart size={18} className="me-2" />
                      Expected Reactions
                    </label>
                    <input
                      type="number"
                      name="reactions"
                      className="form-control"
                      id="reactions"
                      placeholder="0"
                      min="0"
                      value={formData.reactions}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="tags" className="form-label fw-semibold">
                      <Hash size={18} className="me-2" />
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      className="form-control"
                      id="tags"
                      placeholder="technology, lifestyle, travel"
                      value={formData.tags}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                    <div className="form-text">Separate tags with commas</div>
                  </div>
                </div>
                
                <div className="d-flex gap-3 mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg px-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="me-2 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <PenTool size={18} className="me-2" />
                        Publish Post
                      </>
                    )}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary btn-lg px-4"
                    onClick={handleReset}
                    disabled={isSubmitting}
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
