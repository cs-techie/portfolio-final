// Pendyala Shankar - Master Resume Data (Single Source of Truth)

export const PERSONAL_INFO = {
  name: "Pendyala Shankar",
  preferredName: "Shankar",
  handle: "cs-techie",
  title: "Computer Science Engineering Student | Full-Stack Developer",
  tagline: "Computer Science undergraduate and 3x hackathon-winning full-stack developer.",
  college: "Maturi Venkata Subba Rao Engineering College",
  degree: "B.E., Computer Science & Engineering (2023-Present) | CGPA: 8.37",
  objective: "Computer Science undergraduate (CGPA 8.37) and 3x hackathon-winning full-stack developer with production experience shipping REST APIs and web modules at a legal-tech startup. Built and deployed 3 full-stack applications spanning agri-tech, computer vision, and ed-tech, using Python, JavaScript/React, and SQL. Strong foundation in DSA, OOP, and DBMS; seeking Software Engineering internship/new-grad roles.",
  bio: `Computer Science undergraduate (CGPA 8.37) and 3x hackathon-winning full-stack developer with production experience shipping REST APIs and web modules at a legal-tech startup. Built and deployed 3 full-stack applications spanning agri-tech, computer vision, and ed-tech, using Python, JavaScript/React, and SQL. Strong foundation in DSA, OOP, and DBMS; seeking Software Engineering internship/new-grad roles.`,
  email: "shankarpendyala006@gmail.com",
  phone: "+91-8125409327",
  github: "https://github.com/shankar-s06",
  linkedin: "https://linkedin.com/in/shankar-s06",
  resumeUrl: "/assets/resume.pdf",
  location: "Hyderabad, India",
  status: "Seeking Software Engineering internship/new-grad roles",
  stats: [
    { label: "Hackathon Wins", value: "3x Winner", icon: "Trophy" },
    { label: "Engineering CGPA", value: "8.37 / 10", icon: "Award" },
    { label: "Internship Completed", value: "LawVriksh", icon: "Briefcase" },
    { label: "Core Projects Shipped", value: "3 Apps", icon: "Code" }
  ]
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Technical Skills" },
  { id: "languages", label: "Programming Languages" },
  { id: "web", label: "Web & Frameworks" },
  { id: "data", label: "Data & Databases" },
  { id: "tools", label: "Tools" },
  { id: "core_cs", label: "Core CS Concepts" }
];

export const SKILLS = [
  // Programming Languages
  { name: "Python", category: "languages", level: 90, icon: "FileCode", popular: true, desc: "Scripting, ML Models & Backend APIs" },
  { name: "Java", category: "languages", level: 85, icon: "Coffee", desc: "Object-Oriented Programming" },
  { name: "JavaScript", category: "languages", level: 90, icon: "Code2", popular: true, desc: "DOM manipulation & Web Apps" },
  { name: "PHP", category: "languages", level: 75, icon: "Server", desc: "Server-side web scripting" },
  { name: "R", category: "languages", level: 72, icon: "BarChart", desc: "Statistical computing" },
  { name: "C", category: "languages", level: 85, icon: "Terminal", desc: "Foundational Logic" },

  // Web Technologies
  { name: "React", category: "web", level: 90, icon: "Atom", popular: true, desc: "Modern UI Component Architecture" },
  { name: "HTML5", category: "web", level: 95, icon: "Layout", desc: "Semantic Web Structure" },
  { name: "CSS3", category: "web", level: 90, icon: "Palette", desc: "Responsive design" },
  { name: "Tailwind CSS", category: "web", level: 88, icon: "Palette", popular: true, desc: "Utility-first responsive UI styling" },
  { name: "Bootstrap", category: "web", level: 85, icon: "Layers", desc: "Responsive web page layouts" },
  { name: "RESTful APIs", category: "web", level: 90, icon: "Workflow", popular: true, desc: "Backend web API architecture" },

  // Data & Databases
  { name: "MySQL", category: "data", level: 88, icon: "Database", popular: true, desc: "Relational database management" },
  { name: "SQL", category: "data", level: 90, icon: "HardDrive", popular: true, desc: "Query optimization" },
  { name: "Tableau", category: "data", level: 82, icon: "Activity", popular: true, desc: "Data visualization" },
  { name: "Power BI", category: "data", level: 80, icon: "PieChart", popular: true, desc: "Interactive analytical reports" },
  { name: "EDA", category: "data", level: 88, icon: "Table", desc: "Exploratory Data Analysis" },

  // Tools & Platforms
  { name: "Git", category: "tools", level: 90, icon: "GitBranch", desc: "Version control" },
  { name: "GitHub", category: "tools", level: 90, icon: "Github", popular: true, desc: "Repository management" },
  { name: "VS Code", category: "tools", level: 92, icon: "Code2", desc: "Integrated development environment" },
  { name: "Jupyter Notebook", category: "tools", level: 88, icon: "FileCode", desc: "Interactive data analysis" },

  // Core CS Concepts
  { name: "Data Structures & Algorithms", category: "core_cs", level: 90, icon: "Terminal", popular: true, desc: "Problem solving" },
  { name: "OOP", category: "core_cs", level: 90, icon: "Cpu", popular: true, desc: "Object-Oriented Programming" },
  { name: "DBMS", category: "core_cs", level: 88, icon: "Database", desc: "Database Management Systems architecture" },
  { name: "System Design Fundamentals", category: "core_cs", level: 85, icon: "Layers", desc: "Scalable architecture" }
];

export const CERTIFICATIONS = [
  { name: "Google Analytics Certification", issuer: "Google", desc: "Web analytics, audience tracking & data reporting" },
  { name: "Discover Data Analysis", issuer: "Microsoft", desc: "Exploratory data analysis & statistical modeling" },
  { name: "Database Programming", issuer: "Oracle Academy", desc: "SQL query optimization, relational DB design & management" }
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack_agri", label: "Web & Supply Chain" },
  { id: "ai_cv", label: "AI & Computer Vision" }
];

export const PROJECTS = [
  {
    id: "agriconnect",
    title: "AgriConnect",
    subtitle: "Sustainable Agri Supply Chain Platform",
    category: "fullstack_agri",
    featured: true,
    badge: "🏆 Hackathon Winner",
    date: "Feb 2025 – Mar 2025",
    tags: ["Node.js", "React", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/shankar-s06",
    liveUrl: null,
    image: "/projects/agriconnect.jpg",
    summary: "A full-stack web application connecting farmers with industries to trade agricultural waste, supporting a circular-economy waste model.",
    problem: "Agricultural crop waste disposal causes environmental hazards and economic loss, while industries lack a structured digital platform to source agricultural raw materials.",
    solution: "Designed and built a full-stack marketplace with a normalized relational schema supporting multi-role transactions.",
    keyFeatures: [
      "Designed and built a full-stack marketplace connecting farmers with industries to trade agricultural waste.",
      "Implemented a normalized relational schema supporting multi-role transactions.",
      "Implemented CRUD operations, role-based access workflows, and location-based matching logic.",
      "Enabled efficient buyer-seller pairing and supported a circular-economy waste model.",
      "Won 1st place among competing teams for technical execution and real-world sustainability impact."
    ],
    contribution: "Full-Stack Development, REST APIs, Role-Based Access Workflows, and Relational Schema Design."
  },
  {
    id: "sign-language-translator",
    title: "Real-Time Sign Language Translator",
    subtitle: "Real-Time ASL Gesture Recognition",
    category: "ai_cv",
    featured: true,
    badge: "Computer Vision",
    date: "Sep 2024 – Dec 2024",
    tags: ["Python", "TensorFlow/Keras (LSTM)", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/shankar-s06",
    liveUrl: null,
    image: "/projects/asl_translator.jpg",
    summary: "An LSTM-based deep learning system converting American Sign Language (ASL) video gesture inputs into text in real-time at 15 FPS with >90% accuracy.",
    problem: "Individuals with hearing impairments face severe communication barriers due to the lack of real-time gesture-to-text conversion tools.",
    solution: "Trained an LSTM-based deep learning model and built an OpenCV preprocessing pipeline to recognize ASL gestures.",
    keyFeatures: [
      "Trained an LSTM-based deep learning model to recognize American Sign Language (ASL) gestures from live video.",
      "Converts gestures to text in real time to aid users with hearing impairments.",
      "Built an OpenCV preprocessing pipeline.",
      "Achieved 15 FPS real-time inference.",
      "Reached 90%+ classification accuracy."
    ],
    contribution: "Deep Learning model development in Python, LSTM architecture design, OpenCV video preprocessing, and accuracy evaluation."
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Software Development Intern",
    company: "LawVriksh",
    period: "Sep 2025 – Nov 2025",
    type: "Internship",
    location: "Remote",
    highlights: [
      "Built and shipped backend features for legal-tech web modules using REST APIs, reducing manual workflow steps for end users and improving turnaround time on core case-management tasks.",
      "Implemented structured JSON-based data contracts between frontend and backend services, cutting integration bugs reported by the frontend team.",
      "Debugged and resolved production issues across the stack, improving platform reliability and contributing to a smoother release cycle for two feature deployments."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.E., Computer Science & Engineering",
    specialization: "Computer Science & Engineering",
    institute: "Maturi Venkata Subba Rao Engineering College",
    year: "2023 – Present",
    cpi: "CGPA: 8.37 / 10",
    status: "Current Undergraduate"
  },
  {
    degree: "Intermediate (PCM)",
    specialization: "Physics, Chemistry, & Mathematics",
    institute: "Ideal Junior College",
    year: "2023",
    cpi: "Percentage: 88.0%",
    status: "Completed"
  },
  {
    degree: "SSC",
    specialization: "General Academics",
    institute: "EUHS",
    year: "2021",
    cpi: "CGPA: 10.0 / 10",
    status: "Completed"
  }
];

export const HACKATHONS = [
  {
    id: 1,
    title: "AgriConnect — Sustainable Agri Supply Chain Platform",
    project: "Hackathon Winner",
    date: "Feb 2025 – Mar 2025",
    description: "Won 1st place among competing teams for technical execution and real-world sustainability impact.",
    impact: "Demonstrated strong innovation, problem-solving, teamwork, and rapid full-stack application development under competitive hackathon pressure."
  },
  {
    id: 2,
    title: "Tableau Data Visualization Contest",
    project: "Data Development Den",
    date: "2024",
    description: "Won 1st place in a Tableau data visualization contest at the college level.",
    impact: "Demonstrated excellent exploratory data analysis and visualization skills."
  },
  {
    id: 3,
    title: "PromptWars X AIMERverse Hackathon",
    project: "Hack2skill & Google for Developers",
    date: "2024",
    description: "Won 1st place in the PromptWars X AIMERverse hackathon.",
    impact: "Showcased ability to rapidly engineer prompts and build AI-driven solutions."
  },
  {
    id: 4,
    title: "Competitive Exam Preparation Platform",
    project: "College R&D Program",
    date: "2024",
    description: "Platform selected for the college's R&D program for further development and incubation.",
    impact: "Demonstrated production-level code quality and long-term project viability."
  }
];

export const TERMINAL_COMMANDS = {
  help: "Available commands:\n  about        - View Pendyala Shankar's objective & background\n  education    - List education details & CGPA metrics\n  experience   - View LawVriksh internship details\n  skills       - View technical skills & tools\n  projects     - List AgriConnect, Sign Language Translator\n  certifications - View Microsoft, Google & Oracle certifications\n  contact      - Get email, phone, LinkedIn & GitHub\n  clear        - Clear terminal screen",
  about: PERSONAL_INFO.objective,
  education: "Education:\n  1. B.E CSE - MVSREC (2023-Present) | CGPA: 8.37\n  2. Intermediate (PCM) - Ideal Junior College (2023) | Percentage: 88.0%\n  3. SSC - EUHS (2021) | CGPA: 10.0",
  experience: "Work Experience:\n  Software Development Intern at LawVriksh (Sep 2025 - Nov 2025)\n  - Built backend features using REST APIs\n  - Implemented structured JSON-based data contracts\n  - Debugged and resolved production issues across the stack",
  skills: "Technical Skills:\n  Languages: Python, Java, JavaScript, PHP, R, C\n  Web Tech: React, HTML5, CSS3, Tailwind CSS, Bootstrap, RESTful APIs\n  Databases: MySQL, SQL, Relational Database Design\n  Data & Analytics: Tableau, Power BI, Exploratory Data Analysis, Data Visualization\n  Tools: Git, GitHub, VS Code, Jupyter Notebook\n  Core CS: Data Structures & Algorithms, OOP, DBMS, System Design Fundamentals",
  projects: "Core Projects:\n  1. AgriConnect (Hackathon Winner) - Sustainable Agri Supply Chain Platform\n  2. Real-Time Sign Language Translator - LSTM Deep Learning ASL Translator (15 FPS, 90%+ Acc)",
  certifications: "Certifications:\n  - Google Analytics Certification (Google)\n  - Discover Data Analysis (Microsoft)\n  - Database Programming (Oracle Academy)",
  contact: `Contact Details:\n  Name: ${PERSONAL_INFO.name}\n  Email: ${PERSONAL_INFO.email}\n  Phone: ${PERSONAL_INFO.phone}\n  LinkedIn: ${PERSONAL_INFO.linkedin}\n  GitHub: ${PERSONAL_INFO.github}`,
  github: PERSONAL_INFO.github,
  linkedin: PERSONAL_INFO.linkedin
};
