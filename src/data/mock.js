// Mock data for portfolio - user can update later

export const personalInfo = {
  name: "Ritik Singh",
  roles: [
    "Full-stack AI developer.",
    "Web Application Developer.",
    "Generative AI Developer.",
    "Backend Developer.",
    "Frontend Developer."
  ],
  bio: "Security-first, self-driven developer with hands-on experience building applications from scratch focus on writing clean code, designing efficient backends,  Dockerized environments, Redis-powered optimizations, and secure development practices I believe strong skills are built by consistently building and improving real-world applications",




  image: "/devel1.png",
  resumeUrl: "/Priyanshu_Kushwah_Resume.pdf"
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ritik-singh90",
  github: "https://github.com/Ritikk00",
  email: "ritikkushwaha415@gmail.com",
  phone: "+91 6396790245",
  whatsapp: "https://wa.me/6396790245"
};

export const skills = [
  { name: "HTML/CSS", level: 90, color: "#E34F26", icon: "htmlcss", category: "Frontend" },
  { name: "JavaScript", level: 92, color: "#F7DF1E", icon: "javascript", category: "Frontend" },
  { name: "React", level: 90, color: "#61DAFB", icon: "react", category: "Frontend" },
  { name: "Node.js", level: 88, color: "#339933", icon: "nodejs", category: "Backend" },
  { name: "Express.js", level: 85, color: "#888888", icon: "express", category: "Backend" },
  { name: "MongoDB", level: 80, color: "#47A248", icon: "mongodb", category: "Backend" },
  { name: "MySQL", level: 78, color: "#00758F", icon: "mysql", category: "Backend" },
  { name: "Docker", level: 75, color: "#2496ED", icon: "docker", category: "Tools" },
  { name: "Redis", level: 75, color: "#DC382D", icon: "redis", category: "Backend" },
  { name: "GenAI", level: 84, color: "#8B5CF6", icon: "genai", category: "AI" },
  { name: "REST APIs", level: 86, color: "#14B8A6", icon: "restapi", category: "Backend" },
  { name: "ChatGPT", level: 88, color: "#10B981", icon: "chatgpt", category: "AI" },
  { name: "Claude", level: 85, color: "#F59E0B", icon: "claude", category: "AI" },
  { name: "GitHub", level: 88, color: "#181717", icon: "github", category: "Tools" },
  { name: "Postman", level: 82, color: "#FF6C37", icon: "postman", category: "Tools" }
];

export const projects = [
  {
    id: 1,
    title: "Virtual AI assistant",
    description: "Intelligent virtual assistant powered by cutting-edge AI technology, providing seamless integration with daily tasks, information retrieval, and personalized recommendations.",
    techStack: ["React", "JavaScript", "Node.js", "express", "MongoDB", "grok API", "tavily API", "Web Speech API"],
    image: "/post1.png",
    images: [
      "/post1.png",
      "/post2.png",
      "/post3.png",
      "/post4.png"
    ],
    githubUrl: "https://github.com/Ritikk00/virtual-AI-assistant",
    liveUrl: "https://virtual-ai-assistant-hzhf.onrender.com"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Supports agile workflows and sprint planning.",
    techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=900&fit=crop"
    ],
    githubUrl: "https://github.com/ritiksingh/task-manager",
    liveUrl: "https://taskmanager.example.com"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "A new project is being prepared. More details will be shared soon.",
    techStack: ["React", "Node.js"],
    image: "/dummy.png",
    images: ["/dummy.png"],
    githubUrl: "#",
    liveUrl: "#",
    isComingSoon: true
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Another exciting build is in progress. Stay tuned for the launch.",
    techStack: ["Next.js", "Tailwind CSS"],
    image: "/dummy.png",
    images: ["/dummy.png"],
    githubUrl: "#",
    liveUrl: "#",
    isComingSoon: true
  }
];

export const experience = [
  {
    title: "Full Stack Developer Trainee (MERN Stack & AI Tools)",
    company: "GUVI Geek Network (An HCL Group Initiative)",
    period: "1 Year (Hands-on Training & Project Apprenticeship)",
    location: "Remote / India",
    badge: "Training",
    summary: "Completed an intensive 1+ year professional training program focused on full-stack development, AI-assisted product building, and modern deployment practices.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Groq API", "Gemini API", "Docker", "GUVI"],
    highlights: [
      "Completed 1+ year of rigorous MERN Stack training with JavaScript ES6+, Tailwind CSS, and RESTful APIs.",
      "Integrated GenAI workflows using Groq API, Gemini API, Tavily Web Search API, and Web Speech API to build voice-activated applications.",
      "Solved 250+ algorithmic coding challenges on Codekata with a strong focus on data structures, optimization, and logical problem solving.",
      "Built and deployed end-to-end products including a voice-enabled virtual assistant, local transit navigation app, and personal finance tracker with Render hosting and Docker workflows.",
      "Applied GitHub-based version control, multi-environment setup, and deployment architectures aligned with modern DevOps practices."
    ]
  }
];