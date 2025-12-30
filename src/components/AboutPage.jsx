import "../css/AboutPage.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Profile from "../assets/Profile.jpg";
import { GitHubCalendar } from "react-github-calendar";
import FeaturedProjects from "./FeaturedProjects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
        <div className="about-content-wrapper">
          <div className="about-profile-wrapper">
            <img src={Profile} className="about-img stagger-item delay-1" />
            <div className="about-status stagger-item delay-4">
              <div className="about-status-wrapper">
                <div className="about-location">
                  <span>
                    <FmdGoodOutlinedIcon />
                  </span>
                  San Diego, CA
                </div>
                <div className="about-employment">
                  <span>
                    <WorkOutlineOutlinedIcon />
                  </span>
                  Seeking
                </div>
              </div>
            </div>
          </div>
          <div className="about-p">
            <div className="about-p1 stagger-item delay-1">
              Recent Computer Science graduate at{" "}
              <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
                San Diego State University
              </a>{" "}
              with a passion for building functional, high-quality applications. During my time at SDSU, I obtained a
              strong foundation in CS while being highly adaptable at learning in a fast pace enviornment. I have a
              strong passion for web and software development through various projects I have built.
            </div>
            <div className="about-p2 stagger-item delay-2">
              Some of my notable projects include building a{" "}
              <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
                Discord Bot
              </a>
              {", "}
              to improve and automate my daily workflow, and a{" "}
              <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
                Chrome Extension
              </a>
              {", "}
              to reduce constant distractions and improve focus. My work currently focuses on backend development while
              exploring the frontend.
            </div>
            <div className="about-p2 stagger-item delay-3">
              Outside of software, some of my hobbies include playing games, watching anime, and graphic design.
            </div>
            <div className="about-social-wrapper stagger-item delay-4">
              <a className="about-socials link-styles" href="https://github.com" target="_blank">
                <span>
                  <GitHubIcon />
                </span>
                Github
              </a>
              <a className="about-socials link-styles" href="https://linkedin.com" target="_blank">
                <span>
                  <LinkedInIcon />
                </span>
                LinkedIn
              </a>
              <a className="about-socials link-styles" href="mailto:alexlenh1@gmail.com">
                <span>
                  <EmailIcon />
                </span>
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="about-featured">
          <FeaturedProjects setActiveTab={setActiveTab} />
        </div>
        <div className="about-github stagger-item delay-1">
          <GitHubCalendar
            username="AlexLenh7"
            year={currYear}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            loading={false}
            theme={githubTheme}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
              padding: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="about-footer-wrapper">
        <p className="about-footer">
          Developed and designed in{" "}
          <a href="https://code.visualstudio.com/" target="_blank" className="link-styles">
            Visual Studio Code
          </a>
          . Built with the latest{" "}
          <a href="https://react.dev/" target="_blank" className="link-styles">
            React
          </a>{" "}
          and{" "}
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" className="link-styles">
            CSS
          </a>{" "}
          on{" "}
          <a href="https://vite.dev/" target="_blank" className="link-styles">
            Vite
          </a>
          , deployed with{" "}
          <a href="https://vercel.com/home" target="_blank" className="link-styles">
            Vercel
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
