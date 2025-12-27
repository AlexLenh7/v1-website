import "../css/AboutPage.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Profile from "../assets/Profile.png";
import { GitHubCalendar } from "react-github-calendar";
import FeaturedProjects from "./FeaturedProjects";

function AboutPage() {
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
        <h1 className="about-greet">
          Hello! I'm Alex{" "}
          <span>
            <WavingHandIcon className="about-wave" />
          </span>
        </h1>
        <div className="about-content-wrapper">
          <div className="about-profile-wrapper">
            <img src={Profile} className="about-img" />
            <div className="about-status">
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
                Open to work!
              </div>
            </div>
          </div>
          <div className="about-p1">
            Recent Computer Science graduate at{" "}
            <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
              San Diego State University
            </a>{" "}
            with a passion for building functional, high-quality applications. During my time at SDSU, I obtained a
            strong foundation in CS while being highly adaptable at learning in a fast pace enviornment. I have a strong
            passion for web and software development through various projects I have built, including this portfolio.
          </div>
        </div>
        <div>
          <FeaturedProjects />
        </div>
        <div className="about-github">
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
          <a href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code
          </a>
          . Built with the latest{" "}
          <a href="https://react.dev/" target="_blank">
            React
          </a>{" "}
          and{" "}
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
            CSS
          </a>{" "}
          on{" "}
          <a href="https://vite.dev/" target="_blank">
            Vite
          </a>
          , deployed with{" "}
          <a href="https://vercel.com/home" target="_blank">
            Vercel
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
