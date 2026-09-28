// Pendyala Shankar - Master Resume Data (Single Source of Truth)

export const PERSONAL_INFO = {
  name: "Pendyala Shankar",
  preferredName: "Shankar",
  handle: "cs-techie",
  title: "Computer Science Engineering Student | Data Analysis & AI-Driven Developer",
  tagline: "Building data-driven and scalable software solutions to solve real-world challenges.",
  college: "Maturi Venkata Subba Rao Engineering College (MVSREC)",
  degree: "B.E in Computer Science & Engineering (2023-Present) | CPI: 8.90",
  objective: "Driven Computer Science undergraduate with hands-on experience in data analysis and AI-driven application development, and a 3-time hackathon winner, demonstrating strong problem-solving, innovation, and teamwork skills. Skilled in building data-driven solutions that address real-world challenges through a practical and scalable approach. Seeking a Software Development Intern role to contribute to impactful, technology-driven solutions.",
  bio: `Driven Computer Science undergraduate at Maturi Venkata Subba Rao Engineering College (MVSREC) with hands-on experience in data analysis and AI-driven application development. 

A 3-time hackathon winner with experience as a Software Development Intern at LawVriksh, skilled in Python, JavaScript, React, RESTful APIs, MySQL, and Data Analytics (Tableau, PowerBI). Focused on building practical, scalable software that solves real-world challenges.`,
  email: "shankarpendyala006@gmail.com",
  phone: "+91-8125409327",
  github: "https://github.com/cs-techie",
  linkedin: "https://www.linkedin.com/in/shankar-s06",
  location: "Hyderabad, India",
  status: "Seeking Software Development Intern Role",
  stats: [
    { label: "Hackathon Victories", value: "3x Winner", icon: "Trophy" },
    { label: "Engineering CPI", value: "8.90 / 10.0", icon: "Award" },
    { label: "Internship Completed", value: "LawVriksh", icon: "Briefcase" },
    { label: "Core Projects Shipped", value: "2 Major", icon: "Code" }
  ]
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Technical Skills" },
  { id: "languages", label: "Programming Languages" },
  { id: "web", label: "Web Technologies" },
  { id: "database", label: "Database Management" },
  { id: "data_analytics", label: "Data & Analytics" },
  { id: "tools", label: "Tools & Platforms" },
  { id: "core_cs", label: "Core CS Concepts" }
];

export const SKILLS = [
  // Programming Languages
  { name: "Python", category: "languages", level: 92, icon: "FileCode", popular: true, desc: "Scripting, ML Models (LSTM), Computer Vision & Backend APIs" },
  { name: "Java", category: "languages", level: 85, icon: "Coffee", desc: "Object-Oriented Programming & Core CS Logic" },
  { name: "PHP", category: "languages", level: 75, icon: "Server", desc: "Server-side web scripting & backend logic" },
  { name: "R", category: "languages", level: 72, icon: "BarChart", desc: "Statistical computing & data analytics" },
  { name: "C Language", category: "languages", level: 85, icon: "Terminal", desc: "Data Structures, Algorithms & Foundational Logic" },

  // Web Technologies
  { name: "React", category: "web", level: 90, icon: "Atom", popular: true, desc: "Modern UI Component Architecture & Full-Stack Interfaces" },
  { name: "JavaScript", category: "web", level: 90, icon: "Code2", popular: true, desc: "DOM manipulation, Async/Await & Frontend/Backend Web Apps" },
  { name: "Tailwind CSS", category: "web", level: 88, icon: "Palette", popular: true, desc: "Utility-first responsive UI styling" },
  { name: "Bootstrap", category: "web", level: 85, icon: "Layers", desc: "Responsive web page layouts & grid design" },
  { name: "HTML", category: "web", level: 95, icon: "Layout", desc: "Semantic Web Structure" },
  { name: "CSS", category: "web", level: 92, icon: "Palette", desc: "Responsive design & custom styling" },

  // Database Management
  { name: "MySQL", category: "database", level: 88, icon: "Database", popular: true, desc: "Relational database management & schema design" },
  { name: "SQL Queries", category: "database", level: 90, icon: "HardDrive", popular: true, desc: "Complex joins, indexing & query optimization" },
  { name: "Database Design", category: "database", level: 85, icon: "Layers", desc: "Entity Relationship modeling & data normalization" },

  // Data & Analytics
  { name: "Tableau", category: "data_analytics", level: 82, icon: "Activity", popular: true, desc: "Business Intelligence dashboards & data visualization" },
  { name: "PowerBI", category: "data_analytics", level: 80, icon: "PieChart", popular: true, desc: "Interactive analytical reports & metrics" },
  { name: "Exploratory Data Analysis (EDA)", category: "data_analytics", level: 88, icon: "Table", desc: "Dataset inspection, cleaning & statistical insights" },
  { name: "Data Visualization", category: "data_analytics", level: 85, icon: "BarChart", desc: "Communicating data-driven insights through charts" },

  // Tools & Platforms
  { name: "GitHub", category: "tools", level: 90, icon: "GitBranch", popular: true, desc: "Version control, repository management & collaboration" },
  { name: "VS Code", category: "tools", level: 92, icon: "Code2", desc: "Integrated development environment" },
  { name: "Jupyter Notebook", category: "tools", level: 88, icon: "FileCode", desc: "Interactive data analysis & Python experiment notebook" },

  // Core CS Concepts
  { name: "OOPs", category: "core_cs", level: 90, icon: "Cpu", popular: true, desc: "Object-Oriented Programming design principles" },
  { name: "DBMS", category: "core_cs", level: 88, icon: "Database", desc: "Database Management Systems architecture" },
  { name: "RESTful APIs", category: "core_cs", level: 90, icon: "Workflow", popular: true, desc: "Backend web API architecture & structured JSON communication" },
  { name: "Data Structures & Algorithms", category: "core_cs", level: 88, icon: "Terminal", popular: true, desc: "Problem solving, memory efficiency & algorithmic design" }
];

export const CERTIFICATIONS = [
  { name: "Google Analytics Certification", issuer: "Google", desc: "Web analytics, audience tracking & data reporting" },
  { name: "Discover Data Analysis", issuer: "Data Analytics Institute", desc: "Exploratory data analysis & statistical modeling" },
  { name: "Database Programming", issuer: "Database Academy", desc: "SQL query optimization, relational DB design & management" }
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
    date: "Feb – Mar 2025",
    tags: ["React", "JavaScript", "RESTful APIs", "SQL / Database Design", "Tailwind CSS"],
    githubUrl: "https://github.com/cs-techie/agriconnect-07-shanks",
    liveUrl: null,
    summary: "A full-stack web application connecting farmers with industries to trade agricultural waste, enabling efficient circular economy transactions and location-based matching.",
    problem: "Agricultural crop waste disposal causes environmental hazards and economic loss, while industries lack a structured digital platform to source agricultural raw materials.",
    solution: "Engineered AgriConnect using RESTful APIs, structured database design, and scalable backend architecture to enable seamless data flow, role-based workflows, and location-based matching.",
    keyFeatures: [
      "Role-based workflows for farmers, agricultural suppliers, and industrial buyers",
      "CRUD operations for agricultural waste listing and transactions",
      "Location-based matching logic to optimize supply chain efficiency",
      "Structured database design ensuring high reliability and efficient query execution",
      "Circular economy approach promoting sustainable waste management"
    ],
    contribution: "Full-Stack Development, RESTful API architecture, Database Design, and Role-Based Workflow Implementation."
  },
  {
    id: "sign-language-translator",
    title: "Sign Language Translator",
    subtitle: "Real-Time Communication Assistant (ASL)",
    category: "ai_cv",
    featured: true,
    badge: "Foundation Project",
    date: "Sept – Dec 2024",
    tags: ["Python", "LSTM", "Deep Learning", "OpenCV", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/cs-techie",
    liveUrl: null,
    summary: "An LSTM-based deep learning system in Python converting American Sign Language (ASL) video gesture inputs into text in real-time at 15 FPS with >90% accuracy.",
    problem: "Individuals with hearing impairments face severe communication barriers due to the lack of real-time gesture-to-text conversion tools.",
    solution: "Programmed an LSTM deep learning model paired with OpenCV video frame preprocessing to classify ASL gestures accurately from real-time video streams.",
    keyFeatures: [
      "LSTM-based deep learning architecture trained for sequential gesture recognition",
      "Computer vision pipeline utilizing OpenCV for real-time video frame preprocessing",
      "Real-time gesture classification running at 15 frames per second (FPS)",
      "Achieved over 90% accuracy in ASL gesture recognition",
      "Converts sign language gestures into text to enhance accessibility for hearing impaired users"
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
    location: "Remote / Hybrid",
    highlights: [
      "Contributed to the development and enhancement of legal-tech web modules, improving system efficiency and user workflow automation.",
      "Collaborated with the development team to implement backend features, optimize APIs, and ensure structured JSON-based data communication.",
      "Assisted in debugging, performance optimization, and feature deployment, strengthening platform reliability and user experience."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.E in Computer Science & Engineering",
    specialization: "Computer Science & Engineering",
    institute: "Maturi Venkata Subba Rao Engineering College (MVSREC)",
    year: "2023 – Present",
    cpi: "8.90 / 10.0",
    status: "Current Undergraduate"
  },
  {
    degree: "Intermediate (10+2)",
    specialization: "Physics, Chemistry, & Mathematics (MPC)",
    institute: "Ideal Junior College",
    year: "2023",
    cpi: "8.80 / 10.0",
    status: "Completed"
  },
  {
    degree: "SSC (Secondary School Certificate)",
    specialization: "General Academics",
    institute: "EUHS",
    year: "2021",
    cpi: "10.0 / 10.0",
    status: "Completed (Perfect Score)"
  }
];

export const HACKATHONS = [
  {
    id: 1,
    title: "3-Time Hackathon Winner",
    project: "AgriConnect (Sustainable Agri Supply Chain)",
    date: "Feb – Mar 2025",
    description: "Awarded top honor for developing AgriConnect, a full-stack platform utilizing RESTful APIs, database design, and location-matching algorithms for agricultural waste trading.",
    impact: "Demonstrated strong innovation, problem-solving, teamwork, and rapid full-stack application development under competitive hackathon pressure."
  }
];

export const TERMINAL_COMMANDS = {
  help: "Available commands:\n  about        - View Pendyala Shankar's objective & background\n  education    - List education details & CPI metrics\n  experience   - View LawVriksh internship details\n  skills       - View technical skills & tools\n  projects     - List AgriConnect, Sign Language Translator\n  certifications - View Google & Data Analytics certifications\n  contact      - Get email, phone, LinkedIn & GitHub\n  clear        - Clear terminal screen",
  about: PERSONAL_INFO.objective,
  education: "Education:\n  1. B.E CSE - MVSREC (2023-Present) | CPI: 8.90\n  2. Intermediate (MPC) - Ideal Junior College (2023) | CPI: 8.80\n  3. SSC - EUHS (2021) | CPI: 10.0",
  experience: "Work Experience:\n  Software Development Intern at LawVriksh (Sep 2025 - Nov 2025)\n  - Legal-tech web modules & user workflow automation\n  - Backend features, API optimization & JSON data communication\n  - Debugging, performance optimization & feature deployment",
  skills: "Technical Skills:\n  Languages: Python, Java, PHP, R, C language\n  Web Tech: HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React\n  Databases: MySQL, SQL Queries, Database Design\n  Data & Analytics: Tableau, PowerBI, EDA, Data Visualization\n  Tools: GitHub, VS Code, Jupyter Notebook\n  Core CS: OOPs, DBMS, RESTful APIs, Data Structures & Algorithms",
  projects: "Core Projects:\n  1. AgriConnect (Hackathon Winner, Feb-Mar 2025) - Sustainable Agri Supply Chain\n  2. Sign Language Translator (Sept-Dec 2024) - LSTM Deep Learning ASL Translator (15 FPS, >90% Acc)",
  certifications: "Certifications:\n  - Google Analytics Certification\n  - Discover Data Analysis\n  - Database Programming",
  contact: `Contact Details:\n  Name: ${PERSONAL_INFO.name}\n  Email: ${PERSONAL_INFO.email}\n  Phone: ${PERSONAL_INFO.phone}\n  LinkedIn: ${PERSONAL_INFO.linkedin}\n  GitHub: ${PERSONAL_INFO.github}`,
  github: PERSONAL_INFO.github,
  linkedin: PERSONAL_INFO.linkedin
};
