import Tags from "./Tags";
import "../css/CreateProject.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function CreateProject({ tags, link, title, src, date, description }) {
  const individualtags = tags.split(",").map((tag) => tag.trim());
  return (
    <div className="project">
      <a className="project-hover-layer" href={link} target="_blank"></a>
      <img className="project-img" src={src} alt={title} />
      <div className="project-content">
        <h1 className="project-title">
          {title}
          <span className="project-link">{link && <ArrowOutwardIcon />}</span>
        </h1>
        <span className="project-date">{date}</span>
        <p className="project-description">{description}</p>

        <div className="tag-container">
          {individualtags.map((tagName, index) => {
            return <Tags key={index} name={tagName} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
