import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { CreatePostProvider } from "./lib/Postcontext";

function App() {
  return (
    <CreatePostProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <main className="flex-grow-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </CreatePostProvider>
  );
}

export default App;
