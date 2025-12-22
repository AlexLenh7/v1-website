import "../css/Nav.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

function Nav({ activeTab, setActiveTab }) {
  const navItems = [
    { key: 1, name: "About", href: "#AboutPage", icon: <PersonOutlineOutlinedIcon /> },
    { key: 2, name: "Experience", href: "#ExperiencePage", icon: <WorkOutlineOutlinedIcon /> },
    { key: 3, name: "Projects", href: "#ProjectPage", icon: <CodeOutlinedIcon /> },
  ];

  return (
    <nav className="side-nav">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              className={activeTab === item.href ? "active" : ""}
              onClick={() => setActiveTab(item.href)}
            >
              <span className={`nav-indicator ${activeTab === item.href ? "visible" : ""}`}>{item.icon}</span>
              <span className="link-text">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
