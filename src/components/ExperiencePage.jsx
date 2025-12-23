import CreateExperience from "./CreateExperience";
import experience from "../experience";
import "../css/ExperiencePage.css";

// Dynamically adds from project
function ExperiencePage() {
  return (
    <>
      <h1 className="exp-page-title">Work Experience</h1>
      <div className="exp-page">
        {experience.map((entry) => (
          <CreateExperience
            key={entry.id}
            title={entry.title}
            description={entry.description}
            date={entry.date}
            tags={entry.tags}
          />
        ))}
      </div>
    </>
  );
}

export default ExperiencePage;
