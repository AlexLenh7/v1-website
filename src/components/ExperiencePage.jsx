import CreateExperience from "./CreateExperience";
import experience from "../data/experience";
import "../css/ExperiencePage.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import education from "../data/education";
import CreateEducation from "./CreateEducation";
import LabelImportantOutlineIcon from "@mui/icons-material/LabelImportantOutline";

// Dynamically adds from project
function ExperiencePage() {
  const now = new Date();
  const grad = new Date("May 1, 2025");
  const monthsSinceGrad = (now.getFullYear() - grad.getFullYear()) * 12 + (now.getMonth() - grad.getMonth());

  return (
    <div className="exp-page-container">
      <div className="exp-note-container container-border">
        <div className="exp-note stagger-item delay-1">
          {" "}
          <LabelImportantOutlineIcon />
          README
        </div>
        <p className="exp-disclaimer stagger-item delay-2">
          Driven by a passion for clean code and user-centric design, I have spent the past {monthsSinceGrad} months
          learning and honing my skills by developing modern software solutions. These projects represent my technical
          foundation and my commitment to professional growth as an entry-level engineer.
        </p>
        <div className="exp-resume stagger-item delay-3">
          <a href="google.com" target="_blank" className="link-styles">
            View Full Resume
            <ArrowOutwardIcon />
          </a>
        </div>
      </div>
      <Tabs className={"exp-tab-container container-border"}>
        <TabList className={"exp-tab-wrapper stagger-item delay-1"}>
          <Tab selectedClassName="active" className={"exp-tab-1 tab-link-styles"}>
            <WorkHistoryOutlinedIcon />
            Experience
          </Tab>
          <Tab selectedClassName="active" className={"exp-tab-2 tab-link-styles"}>
            <SchoolOutlinedIcon />
            Education
          </Tab>
        </TabList>
        <TabPanel className={"exp-tab-content"}>
          <div className="exp-timeline-wrapper">
            <div className="exp-page">
              {experience.map((entry) => (
                <div className={`exp-timeline-item stagger-item delay-${entry.id + 1}`} key={entry.id}>
                  <CreateExperience
                    date={entry.date}
                    title={entry.title}
                    description={entry.description.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                    tags={entry.tags}
                    link={entry.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel className={"exp-tab-content"}>
          <div className="exp-timeline-wrapper">
            <div className="exp-page">
              {education.map((entry, index) => (
                <div className={`exp-timeline-item stagger-item`} key={index}>
                  <CreateEducation name={entry.name} date={entry.date} degree={entry.degree} link={entry.link} />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ExperiencePage;
