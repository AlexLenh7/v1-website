import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import "../css/TechStack.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiGit,
  SiSqlite,
  SiSequelize,
  SiExpress,
  SiVite,
} from "react-icons/si";

const TechStack = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const techItems = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
    },
    {
      name: "Sequelize",
      icon: <SiSequelize />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
  ];

  return (
    /* display: contents makes this div "invisible" to the grid layout, 
       allowing the children to place themselves in the AboutPage grid directly */
    <div className={`expandable ${isExpanded ? "expanded" : ""}`} style={{ display: "contents" }}>
      <div className="expandable-header link-styles stagger-item delay-4" onClick={() => setIsExpanded(!isExpanded)}>
        <LayersOutlinedIcon />
        Tech Stack
        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>

      <div className="expandable-content">
        <div className="about-tech-stack">
          <ul>
            {techItems.map((item, index) => (
              <li key={index} className="list-item">
                <span className="expand-arrow">{item.icon}</span> <span className="list-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
