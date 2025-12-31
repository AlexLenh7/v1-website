import CreateProject from "./CreateProject";
import projects from "../data/projects";
import "../css/ProjectPage.css";

// Dynamically adds from project
function ProjectPage() {
  return (
    <div className="project-page-container container-border">
      <div className="project-page">
        {projects.map((entry) => (
          <div className={`project-page stagger-item delay-${entry.id}`} key={entry.id}>
            <CreateProject
              title={entry.title}
              src={entry.img}
              description={entry.description}
              date={entry.date}
              tags={entry.tags}
              link={entry.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
