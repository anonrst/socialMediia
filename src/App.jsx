import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import { useState } from "react";
import { CreatePostProvider } from "./lib/Postcontext";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <CreatePostProvider>
      <div className="app-container">
        <Sidebar
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </CreatePostProvider>
  );
}

export default App;
