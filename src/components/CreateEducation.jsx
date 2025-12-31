import "../css/CreateEducation.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function CreateEducation({ name, date, degree, link }) {
  return (
    <div className="education">
      <a className="edu-hover-layer" href={link} target="_blank"></a>
      <div className="edu-content">
        <span className="edu-date">{date}</span>
        <h1 className="edu-name link-styles">
          {name}
          <span className="edu-link">{link && <ArrowOutwardIcon />}</span>
        </h1>
        <p className="edu-degree">{degree}</p>
      </div>
    </div>
  );
}

export default CreateEducation;
