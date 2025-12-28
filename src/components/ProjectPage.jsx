import CreateProject from "./CreateProject";
import projects from "../projects";
import "../css/ProjectPage.css";

// Dynamically adds from project
function ProjectPage() {
  return (
    <div className="project-page-container">
      <div className="project-page">
        {projects.map((entry) => (
          <CreateProject
            key={entry.id}
            title={entry.title}
            src={entry.img}
            description={entry.description}
            date={entry.date}
            tags={entry.tags}
            link={entry.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
