import { Form } from "react-router-dom";
const CreatePost = () => {
  return (
    <Form className="create-post" method="POST">
      <div className="mb-3 postInput">
        <label htmlFor="userId" className="htmlForm-label">
          User ID
        </label>
        <input
          name="userId"
          type="text"
          id="userId"
          placeholder="enter your userid"
        />
      </div>
      <div className="mb-3 postInput">
        <label htmlFor="postTitle" className="htmlForm-label">
          postTitle
        </label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="enter your postTitle"
        />
      </div>
      <div className="mb-3 postInput">
        <label htmlFor="postBody" className="htmlForm-label">
          post details
        </label>
        <textarea
          type="text"
          name="postBody"
          rows={4}
          id="postBody"
          placeholder="tell us more about you"
        />
      </div>
      <div className="mb-3 postInput">
        <label htmlFor="reaction" className="htmlForm-label">
          reactions
        </label>
        <textarea
          type="text"
          name="reactions"
          id="reactions"
          placeholder="deiced your pst reaction"
        />
      </div>
      <div className="mb-3 postInput">
        <label htmlFor="tags" className="htmlForm-label">
          post Tags
        </label>
        <textarea
          type="text"
          name="tags"
          id="tags"
          placeholder="give your tags name....."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default CreatePost;
