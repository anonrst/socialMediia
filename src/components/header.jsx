import { Search, User, MessageCircle } from "lucide-react";
import Clock from "./clock";

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <MessageCircle size={32} className="me-2" />
            <h4 className="mb-0 fw-bold">SocialHub</h4>
          </div>
          
          <div className="d-flex align-items-center flex-grow-1 mx-4">
            <div className="position-relative w-100" style={{ maxWidth: "400px" }}>
              <Search size={20} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <input
                type="search"
                className="form-control ps-5 rounded-pill"
                placeholder="Search posts, users..."
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Clock />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
