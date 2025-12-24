import "../css/AboutPage.css";
import Tags from "./Tags";
function AboutPage() {
  return (
    <div className="about-page">
      <h1>Hello!</h1>
      <p className="about-p1">
        I’m Alex, a recent Computer Science graduate at{" "}
        <a href="https://www.sdsu.edu/" target="_blank" className="link-styles">
          San Diego State University
        </a>{" "}
        with a passion for building functional, high-quality applications. During my time at SDSU, I obtained a strong
        foundation in CS while being highly adaptable at learning in a fast pace enviornment. I have a strong passion
        for web and software development through various projects I have built, including this portfolio.
      </p>
      <p className="about-p2">
        As a developer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with
        my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable
        and efficient while providing engaging, pixel-perfect user experiences.
      </p>
      <p className="about-p3">
        I am currently open to junior or entry level opportunities in Frontend, Backend, or Software Development.
      </p>
      <div className="about-desc">
        <div>Here are some technologies I've been working with recently:</div>
        <ul className="about-skills">
          <span>Languages</span>
          <Tags name="Javascript (ES6)" />
          <Tags name="HTML5" />
          <Tags name="CSS3" />
          <Tags name="Python" />
          <Tags name="SQL" />
        </ul>
        <ul className="about-skills">
          <span>Frameworks & Libraries</span>
          <Tags name="React" />
          <Tags name="Express" />
          <Tags name="jQuery" />
          <Tags name="Bootstrap" />
          <Tags name="EJS" />
        </ul>
        <ul className="about-skills">
          <span>Databases</span>
          <Tags name="PostgreSQL" />
          <Tags name="SQLite" />
          <Tags name="Sequelize (ORM)" />
        </ul>
        <ul className="about-skills">
          <span>Tools</span>
          <Tags name="Bash" />
          <Tags name="Chrome DevTools" />
          <Tags name="Postman" />
          <Tags name="Node.js" />
          <Tags name="REST API" />
          <Tags name="Vite" />
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
