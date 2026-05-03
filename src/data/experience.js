const experience = [
  {
    id: 1,
    title: "Gacha Probability Engine",
    description: [
      "Built a Monte Carlo simulation engine in C++ with thread-safe task distribution, splitting runtime batches to parallelize 1M+ simulations, reducing elapsed runtime by ~8x",
      "Developed a statistical aggregation pipeline over 1M+ simulation results, applying a O(n log n) sort-once with a result cache to optimize repeated queries in O(1) after the initial computation across merged thread results",
      "Implemented custom binary serialization with RAII file guards to compare and contrast simulation results across banner configs, with a histogram renderer that outputs ASCII distribution plots",
    ],
    tags: "C++, CMake",
    date: "Mar 2026 - Apr 2026",
  },
  {
    id: 2,
    title: "Lock In - Chrome Extension",
    description: [
      "Architected background scripts using 6+ Chrome APIs to fetch real-time user data via 30 second polling intervals to ensure data accuracy across restricted environments",
      "Developed an analytics frontend with React and TypeScript to provide real-time data visualization through custom weighted algorithms to calculate dynamic user-friendly metrics",
      "Optimized data synchronization performance by implementing a 100ms debounce on rapid API events and parallel async operations to reduce race conditions and redundant storage writes calls",
    ],
    tags: "Typescript, Javascript, React, Tailwind",
    date: "Jan 2026 - Mar 2026",
  },
  {
    id: 3,
    title: "Backend Discord Bot",
    description: [
      "Designed a backend focused Discord bot with Node.js for scalability and utilizing Discord.js, a powerful library, to streamline REST and websocket API’s with Discord servers",
      "Engineered solutions by integrating modular APIs that handled automation and external services such as Google’s Gemini API to reduce redundant tasks and workload saving on average an hour per day",
      "Implemented a SQL database layer using SQLite3, a lightweight performant database for its simplicity and Sequelize, an ORM for query modularity, to persist and store user data allowing for secure data and faster data lookups in overall features ",
    ],
    tags: "Javascript, Node.js, SQLite, API",
    date: "May 2025 - Aug 2025",
    link: "https://github.com/AlexLenh7/Discord-Bot",
  },
];

export default experience;
