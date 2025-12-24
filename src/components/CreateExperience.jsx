import Tags from "./Tags";
import "../css/CreateExperience.css";

function CreateExperience({ title, date, description, tags }) {
  const individualtags = tags.split(",").map((tag) => tag.trim());
  return (
    <div className="experience">
      <div className="exp-hover-layer"></div>
      <div className="exp-content">
        <h1 className="exp-title">{title}</h1>
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
