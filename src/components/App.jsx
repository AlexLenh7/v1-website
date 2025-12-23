import "../css/App.css";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Nav from "./Nav";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import { useState } from "react";
import ExperiencePage from "./ExperiencePage";
// import Iridescence from './BackgroundEffect';
import Aurora from "./BackgroundEffect";

function App() {
  const [activeTab, setActiveTab] = useState("#AboutPage");
  return (
    <div className="app-container">
      {/* <Iridescence color={[0.3, 0.3, 0.9]} mouseReact={true} amplitude={0.1} speed={1.0} /> */}
      <Aurora colorStops={["#69e8ff", "#e08aff", "#227ffa"]} blend={10} amplitude={1} speed={0.5} />{" "}
      <header className="static-left-side">
        <div className="left-side">
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
          <div id="#AboutPage">
            <AboutPage summary="Detail-oriented developer focused on clean UI." />
          </div>
        )}
        {activeTab === "#ExperiencePage" && (
          <div id="ExperiencePage">
            <ExperiencePage />
          </div>
        )}
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
