import Tags from "./Tags";
import "../css/CreateExperience.css";

function CreateExperience(props) {
  const individualtags = props.tags.split(",").map((tag) => tag.trim());
  return (
    <div className="experience">
      <div className="exp-hover-layer"></div>
      <div className="exp-content">
        <h1 className="exp-title">{props.title}</h1>
        <span className="exp-date">{props.date}</span>
        <p className="exp-description">{props.description}</p>

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
