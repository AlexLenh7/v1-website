import "../css/App.css";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Nav from "./Nav";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import { useState } from "react";
import ExperiencePage from "./ExperiencePage";
// import Aurora from "./BackgroundEffect";
import WavingHandIcon from "@mui/icons-material/WavingHand";

function App() {
  const [activeTab, setActiveTab] = useState("#AboutPage");
  const introContent = {
    "#AboutPage": {
      name: (
        <>
          Hi! I'm Alex <WavingHandIcon className="about-wave" />
        </>
      ),
      description: "Designer and Developer",
      summary: "A little bit about me and what I bring to the table",
    },
    "#ExperiencePage": {
      name: "My Journey",
      description: "Driven Success",
      summary: "My growth as a developer, from university projects to professional work",
    },
    "#ProjectPage": {
      name: "Past Projects",
      description: "Creative & Technical",
      summary: "A collection of applications and tools I've built in my free time",
    },
  };

  const currentIntro = introContent[activeTab] || introContent["#AboutPage"];

  return (
    <div className="app-container">
      {/* <Aurora colorStops={["#69e8ff", "#e08aff", "#227ffa"]} blend={10} amplitude={1} speed={0.5} />{" "} */}
      <div className="content-wrapper">
        <header className="static-left-side">
          <div className="left-side">
            {/* Group the top elements together */}
            <div className="top-group">
              <div id="landing-page">
                <LandingPage
                  name={currentIntro.name}
                  description={currentIntro.description}
                  summary={currentIntro.summary}
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
      </div>
      {/* <div className="frame-overlay"></div> */}
    </div>
  );
}

export default App;
