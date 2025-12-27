import sysadmin from "./assets/Sysadmin.png";
import blackjack from "./assets/Blackjack.png";
import facemodel from "./assets/facemodel.png";

const Projects = [
  {
    id: 1,
    title: "Backend Discord Bot",
    img: "https://tasshin.com/wp-content/uploads/2023/11/discord-1024x576.jpg",
    description:
      "Developed a scalable backend Discord bot using Node.js and Sequelize to manage automated workflows and secure SQLite data persistence. By integrating modular APIs like Google’s Gemini, I streamlined complex tasks and external service interactions, saving approximately one hour of manual workload daily.",
    tags: "Javascript, Node.js, SQLite, API",
    date: "May 2025 - Aug 2025",
    link: "https://github.com/AlexLenh7/Discord-Bot",
  },
  {
    id: 2,
    title: "UNIX/System Administration",
    img: sysadmin,
    description:
      "Designed and automated a multi-platform virtual infrastructure across FreeBSD, OpenBSD, Linux, Solaris, and AIX, integrating core network services and cloud environments. I significantly optimized security workflows by developing Bash scripts for automated SSH management, reducing manual overhead by 75% while maintaining robust backup and access protocols.",
    tags: "Bash, Azure, Linux, Unix",
    date: "Jan 2025 - May 2025",
  },
  {
    id: 3,
    title: "Chrome Extension",
    img: "https://tasshin.com/wp-content/uploads/2023/11/discord-1024x576.jpg",
    description:
      "Designed and built a responsive UI/UX experience featuring dynamic DOM manipulation and animated transitions using HTML5, CSS, and JavaScript. I also engineered background scripts to track user-defined actions, which boosted productivity by reducing daily distractions by up to 58%.",
    tags: "Javascript, HTML, CSS",
    date: "Aug 2025 - Present",
    link: "https://github.com/AlexLenh7/Lock-In-Extension",
  },
  {
    id: 4,
    title: "Face Detection Model",
    img: facemodel,
    description:
      "Led a team of five to develop a high-accuracy real-time facial recognition system using Python and TensorFlow’s Functional API with VGG16. I managed the end-to-end deep learning pipeline—from data collection to validation—achieving 95% accuracy for secure authentication across diverse conditions.",
    tags: "Python, TensorFlow",
    date: "Mar 2024 - Apr 2024",
    link: "https://github.com/ChristopherOng4/FaceDetectionWithTenslorFlow",
  },
  {
    id: 5,
    title: "CLI Blackjack Game",
    img: blackjack,
    description:
      "Engineered a single-player Blackjack game in C++ using object-oriented principles, leveraging inheritance and polymorphism to ensure a highly maintainable codebase. By implementing a modular design with separate headers and implementations, I reduced code redundancy by 25% and significantly accelerated development cycles.",
    tags: "C++",
    date: "Mar 2025 - May 2025",
    link: "https://github.com/AlexLenh7/Blackjack-Project",
  },
];

export default Projects;
