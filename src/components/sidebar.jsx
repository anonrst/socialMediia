import { Link, useLocation } from "react-router-dom";
import { Home, PlusCircle, User, Settings, LogOut, TrendingUp } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="d-flex flex-column flex-shrink-0 p-0 bg-white border-end" style={{ width: "280px", minHeight: "100vh" }}>
      <div className="p-4 border-bottom">
        <div className="d-flex align-items-center">
          <div className="bg-primary rounded-circle p-2 me-3">
            <User size={20} className="text-white" />
          </div>
          <div>
            <h6 className="mb-0 fw-semibold">John Doe</h6>
            <small className="text-muted">@johndoe</small>
          </div>
        </div>
      </div>

      <nav className="flex-grow-1 p-3">
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link d-flex align-items-center rounded-3 ${isActive('/') ? 'active' : 'text-dark'}`}
            >
              <Home size={20} className="me-3" />
              <span className="fw-medium">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/create-post" 
              className={`nav-link d-flex align-items-center rounded-3 ${isActive('/create-post') ? 'active' : 'text-dark'}`}
            >
              <PlusCircle size={20} className="me-3" />
              <span className="fw-medium">Create Post</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark d-flex align-items-center rounded-3">
              <TrendingUp size={20} className="me-3" />
              <span className="fw-medium">Trending</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-3 border-top">
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center">
            <Settings size={16} className="me-2" />
            Settings
          </button>
          <button className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center">
            <LogOut size={16} className="me-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
