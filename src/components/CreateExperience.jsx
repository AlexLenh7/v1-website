import Tags from "./Tags";
import "../css/CreateExperience.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function CreateExperience({ tags, link, title, date, description }) {
  const individualtags = tags.split(",").map((tag) => tag.trim());
  return (
    <div className="experience">
      <a className="exp-hover-layer" href={link} target="_blank"></a>
      <div className="exp-content">
        <h1 className="exp-title">
          {title}
          <span className="exp-link">{link && <ArrowOutwardIcon />}</span>
        </h1>
        <span className="exp-date">{date}</span>
        <p className="exp-description">{description}</p>

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
