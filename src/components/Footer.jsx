import "../css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">
            <LinkedInIcon />
          </a>
          <a href="mailto:alexlenh1@gmail.com">
            <EmailIcon />
          </a>
        </div>

        <p className="copyright-text">
          <CopyrightOutlinedIcon className="copyright-icon" />
          Alex Lenh {currYear}
        </p>
      </div>
      <p className="about-footer">
        Developed and designed in{" "}
        <a href="https://code.visualstudio.com/" target="_blank" className="link-styles">
          Visual Studio Code
        </a>
        . Built with{" "}
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
    </footer>
  );
}

export default Footer;
