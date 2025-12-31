import CreateProject from "./CreateProject";
import projects from "../data/projects";
import "../css/FeaturedProjects.css";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

function FeaturedProjects({ setActiveTab }) {
  return (
    <div className="featured-container">
      <div className="container-border">
        <div className="featured-title stagger-item delay-5">
          <div className="featured-star">
            <StarBorderOutlinedIcon />
            Featured Projects{" "}
          </div>
          <a
            className="featured-more link-styles"
            href="#ProjectPage"
            onClick={() => {
              setActiveTab("#ProjectPage");
            }}
          >
            view more
            <ArrowRightOutlinedIcon />
          </a>
        </div>
        <div className="featured-wrapper">
          {projects
            .filter((entry) => entry.id === 1 || entry.id === 3)
            .map((entry) => (
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
    </div>
  );
}

export default FeaturedProjects;
