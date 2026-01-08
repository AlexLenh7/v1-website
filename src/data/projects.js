import sysadmin from "../assets/SysadminThumbnail.png";
import blackjack from "../assets/Blackjack.png";
import facemodel from "../assets/FaceDetectionThumbnail.png";
import discordbotThumbnail from "../assets/DiscordbotThumbnail.png";
import extension from "../assets/ExtensionThumbnail.png";
import familyTracker from "../assets/FamilyTrackerThumbnail.png";

const Projects = [
  {
    id: 1,
    title: "Backend Discord Bot",
    img: discordbotThumbnail,
    description:
      "Discord bot to automated workflows and streamline mundane tasks through API interactions and utilizing Sqlite storing data",
    tags: "Javascript, Node.js, SQLite, API, Sequelize",
    date: "May 2025 - Aug 2025",
    link: "https://github.com/AlexLenh7/Discord-Bot",
  },
  {
    id: 2,
    title: "UNIX/System Administration",
    img: sysadmin,
    description:
      "Multi-platform virtual infrastructure across FreeBSD, OpenBSD, Linux, Solaris, and AIX, integrating mail, web, file, and print servers",
    tags: "Bash, Azure, Linux, Unix, SysAdmin",
    date: "Jan 2025 - May 2025",
  },
  {
    id: 3,
    title: "Chrome Extension",
    img: extension,
    description: "Tracks time on each website with tools to block interactions based on user defined settings",
    tags: "Javascript, HTML, CSS",
    date: "Aug 2025 - Present",
    link: "https://github.com/AlexLenh7/chrome-extension",
  },
  {
    id: 4,
    title: "Face Detection Model",
    img: facemodel,
    description: "Real-time facial recognition system designed to work across diverse conditions",
    tags: "Python, TensorFlow",
    date: "Mar 2024 - Apr 2024",
    link: "https://github.com/ChristopherOng4/FaceDetectionWithTenslorFlow",
  },
  {
    id: 5,
    title: "CLI Blackjack Game",
    img: blackjack,
    description: "Single-player CLI Blackjack game in C++",
    tags: "C++",
    date: "Mar 2025 - May 2025",
    link: "https://github.com/AlexLenh7/Blackjack-Project",
  },
  {
    id: 6,
    title: "Family Country Tracker",
    img: familyTracker,
    description:
      "Website for tracking visited places across the world. View, add, and delete visted countries for each family member",
    tags: "Postgres, Javascript, HTML, CSS, EJS, jQuery",
    date: "Oct 2025 - Nov 2025",
  },
];

export default Projects;
