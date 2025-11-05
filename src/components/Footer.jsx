import { Heart, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              Made with <Heart size={16} className="text-danger mx-1" /> by SocialHub Team
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end justify-content-center gap-3 mt-3 mt-md-0">
              <a href="#" className="text-muted">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <small className="text-muted">© 2025 SocialHub. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
