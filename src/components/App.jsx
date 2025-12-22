import "../css/App.css";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Nav from "./Nav";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="app-container">
      <header className="static-left-side">
        <div>
          {/* Group the top elements together */}
          <div className="top-group">
            <div id="landing-page">
              <LandingPage
                name="Alex Lenh"
                description="Designer and Developer"
                summary="Aspiring Junior Developer building perfect web experiences focused on backend systems"
              />
            </div>
            <div id="nav">
              <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>

          {/* Footer remains separate to be pushed to the bottom */}
          <footer id="footer">
            <Footer />
          </footer>
        </div>
      </header>
      <main className="dynamic-right-side">
        {activeTab === "#AboutPage" && (
          <div id="AboutPage">
            <AboutPage summary="Detail-oriented developer focused on clean UI." />
          </div>
        )}
        {activeTab === "#ExperiencePage" && <div id="ExperiencePage"></div>}
        {activeTab === "#ProjectPage" && (
          <div id="ProjectPage">
            <ProjectPage />
          </div>
        )}
      </main>
      <div className="frame-overlay"></div>
    </div>
  );
}

export default App;
