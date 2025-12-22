import Tags from "./Tags";
import "../css/CreateProject.css";

function CreateProject(props) {
  const individualtags = props.tags.split(",").map((tag) => tag.trim());
  return (
    <div className="project">
      <img className="project-img" src={props.src} alt={props.title} />
      <div className="project-content">
        <h1 className="project-title">{props.title}</h1>
        <span className="project-date">{props.date}</span>
        <p className="project-description">{props.description}</p>

        <div className="tag-container">
          {/* 2. Use the local variable directly (no "props.") */}
          {individualtags.map((tagName, index) => {
            return <Tags key={index} name={tagName} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
