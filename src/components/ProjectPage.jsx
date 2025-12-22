import CreateProject from "./CreateProject";
import projects from "../projects";
import "../css/ProjectPage.css";

// Dynamically adds from project
function ProjectPage() {
  return (
    <>
      <h1 className="project-page-title">Past Projects</h1>
      <div className="project-page">
        {projects.map((entry) => (
          <CreateProject
            key={entry.id}
            title={entry.title}
            src={entry.img}
            description={entry.description}
            date={entry.date}
            tags={entry.tags}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
