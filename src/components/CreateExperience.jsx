import Tags from "./Tags";
import "../css/CreateExperience.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function CreateExperience({ tags, link, title, date, description }) {
  const individualtags = tags.split(",").map((tag) => tag.trim());
  return (
    <div className="experience">
      <a className="exp-hover-layer" href={link} target="_blank"></a>
      <div className="exp-content">
        <span className="exp-date">{date}</span>
        <h1 className="exp-title link-styles">
          {title}
          <span className="exp-link">{link && <ArrowOutwardIcon />}</span>
        </h1>
        <ul className="exp-description">{description}</ul>

        <div className="tag-container">
          {individualtags.map((tagName, index) => {
            return <Tags key={index} name={tagName} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateExperience;
