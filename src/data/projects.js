import sysadmin from "../assets/SysadminThumbnail.png";
import blackjack from "../assets/Blackjack.png";
import facemodel from "../assets/FaceDetectionThumbnail.png";
import discordbotThumbnail from "../assets/DiscordbotThumbnail.png";
import extension from "../assets/LockInThumbnail.jpg";
import familyTracker from "../assets/FamilyTrackerThumbnail.png";
import gachasim from "../assets/gacha-sim.png";

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
    title: "Lock In - Distraction Manager",
    img: extension,
    description:
      "Powerful Chrome extension by tracking and limiting time spent on websites. Monitor productivity, set daily limits, and build better browsing habits.",
    tags: "Typescript, Javascript, React, Tailwind, Puppeteer, Vite",
    date: "Jan 2026 - Mar 2026",
    link: "https://github.com/AlexLenh7/Lock-In-Distraction-Blocker",
  },
  {
    id: 3,
    title: "Gacha Probability Engine",
    img: gachasim,
    description:
      "Built a Monte Carlo simulation engine to compare and contrast simulation results across banner configs with ASCII histogram distribution plots",
    tags: "C++, CMake",
    date: "Mar 2025 - Apr 2026",
    link: "https://github.com/AlexLenh7/Gacha-Probability-Engine",
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
    title: "UNIX/System Administration",
    img: sysadmin,
    description:
      "Multi-platform virtual infrastructure across FreeBSD, OpenBSD, Linux, Solaris, and AIX, integrating mail, web, file, and print servers",
    tags: "Bash, Azure, Linux, Unix, SysAdmin",
    date: "Jan 2025 - May 2025",
  },
  {
    id: 6,
    title: "CLI Blackjack Game",
    img: blackjack,
    description: "Single-player CLI Blackjack game in C++",
    tags: "C++",
    date: "Mar 2025 - May 2025",
    link: "https://github.com/AlexLenh7/Blackjack-Project",
  },
  {
    id: 7,
    title: "Family Country Tracker",
    img: familyTracker,
    description:
      "Website for tracking visited places across the world. View, add, and delete visted countries for each family member",
    tags: "Postgres, Javascript, HTML, CSS, EJS, jQuery",
    date: "Oct 2025 - Nov 2025",
  },
];

export default Projects;
