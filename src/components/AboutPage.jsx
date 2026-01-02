import "../css/AboutPage.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Profile from "../assets/Profile.jpg";
import { GitHubCalendar } from "react-github-calendar";
import FeaturedProjects from "./FeaturedProjects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TechStack from "./TechStack";
import TimelineIcon from "@mui/icons-material/Timeline";

function AboutPage({ setActiveTab }) {
  const currYear = new Date().getFullYear();
  const githubTheme = {
    dark: [
      "#272731ff", // Level 0: Empty/Background
      "#193458", // Level 1: Faint Blue
      "#1c4d8e", // Level 2: Dim Blue
      "#1f66c4", // Level 3: Bright Blue
      "#227ffa", // Level 4: Primary Blue
    ],
  };
  return (
    <div className="about-page-container">
      <div className="about-content">
        <div className="about-content-wrapper container-border">
          <div className="about-profile-wrapper">
            <img src={Profile} className="about-img stagger-item delay-1" />
          </div>
          <div className="about-p">
            <div className="about-p1 stagger-item delay-1">
              Recent CS grad{" "}
              <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
                @SDSU
              </a>{" "}
              combining backend systems with my passion for detailed designs. During my time at SDSU, I obtained strong
              fundamentals while being adaptable at learning in a fast pace enviornment. I have a strong passion for web
              and software development through various projects I have built.
            </div>
            <div className="about-p2 stagger-item delay-2">
              Some of my notable projects include building a{" "}
              <a href="https://github.com/AlexLenh7/Discord-Bot" target="_blank" className="link-styles">
                Discord Bot
              </a>
              {", "}
              to improve and automate my daily workflow, and a{" "}
              <a href="https://github.com/AlexLenh7/Lock-In-Extension" target="_blank" className="link-styles">
                Chrome Extension
              </a>
              {", "}
              to reduce constant distractions and improve focus. My work currently focuses on backend development while
              exploring the frontend.
            </div>
            <div className="about-p3 stagger-item delay-3">
              Outside of software, some of my hobbies include playing games, watching anime, and occasionally graphic
              design.
            </div>
          </div>
        </div>
        <div className="about-status-social container-border">
          <div className="about-status stagger-item delay-4">
            <div className="about-status-wrapper">
              <div className="about-location">
                <span className="status-1">
                  <FmdGoodOutlinedIcon />
                  San Diego, CA
                </span>
              </div>
              <div className="about-employment">
                <span className="status-2">
                  <WorkOutlineOutlinedIcon />
                  Open to Work!
                </span>
              </div>
            </div>
          </div>
          <TechStack />
          <div className="about-social-wrapper stagger-item delay-4">
            <a className="about-socials link-styles" href="https://github.com/AlexLenh7" target="_blank">
              <span className="social-1">
                <GitHubIcon />
                Github
              </span>
            </a>
            <a
              className="about-socials link-styles"
              href="https://www.linkedin.com/in/alex-lenh-6a560a236/"
              target="_blank"
            >
              <span className="social-2">
                <LinkedInIcon />
                LinkedIn
              </span>
            </a>
            <a className="about-socials link-styles" href="mailto:alexlenh1@gmail.com">
              <span className="social-3">
                <EmailIcon />
                Email
              </span>
            </a>
          </div>
        </div>
        <div className="about-featured">
          <FeaturedProjects setActiveTab={setActiveTab} />
        </div>
        <div className="about-github stagger-item delay-1">
          <span className="about-github-title">
            <TimelineIcon />
            Recent Activity
          </span>
          <GitHubCalendar
            username="AlexLenh7"
            year={currYear}
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            loading={false}
            theme={githubTheme}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
              margin: "0 auto",
              flexGrow: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
