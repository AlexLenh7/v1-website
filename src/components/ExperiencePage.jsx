import CreateExperience from "./CreateExperience";
import experience from "../experience";
import "../css/ExperiencePage.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tags from "./Tags";

// Dynamically adds from project
function ExperiencePage() {
  return (
    <div className="exp-page-container">
      <p className="exp-disclaimer">
        While I do not have any formal experience working currently, I am looking for junior or entry level
        opportunities. Here are some of my most relevant projects that best describes my current experience:
      </p>
      <div className="exp-page">
        {experience.map((entry) => (
          <CreateExperience
            key={entry.id}
            title={entry.title}
            description={entry.description}
            date={entry.date}
            tags={entry.tags}
            link={entry.link}
          />
        ))}
      </div>
      <div className="exp-resume">
        <a href="google.com" target="_blank" className="link-styles">
          View Full Resume
          <ArrowOutwardIcon />
        </a>
      </div>
    </div>
  );
}

export default ExperiencePage;
