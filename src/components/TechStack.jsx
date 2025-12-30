import { useState } from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import "../css/TechStack.css";
import Tags from "./Tags";

const TechStack = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const techItems = [
    "JavaScript",
    "React",
    "Node.js",
    "Vite",
    "CSS / SCSS",
    "HTML5",
    "PostgreSQL",
    "Git",
    "SQLite",
    "Sequelize",
  ];

  return (
    /* display: contents makes this div "invisible" to the grid layout, 
       allowing the children to place themselves in the AboutPage grid directly */
    <div className={`expandable ${isExpanded ? "expanded" : ""}`} style={{ display: "contents" }}>
      {/* This goes into Column 2 of the AboutPage grid */}
      <div className="expandable-header link-styles stagger-item delay-4" onClick={() => setIsExpanded(!isExpanded)}>
        <LayersOutlinedIcon />
        Tech Stack
        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>

      {/* This spans Columns 1, 2, and 3 in Row 2 of the AboutPage grid */}
      <div className="expandable-content">
        <div className="about-tech-stack">
          <ul>
            {techItems.map((item, index) => (
              <li key={index} className="list-item">
                <span className="expand-arrow">
                  <ArrowRightOutlinedIcon />
                </span>{" "}
                <span className="list-name">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
