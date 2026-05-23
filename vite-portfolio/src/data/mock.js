// Mock data for portfolio - user can update later

export const personalInfo = {
  name: "Ritik Singh",
  roles: [
    "Full-stack Engineer.",
    "Web Application Developer.",
    "Backend Developer.",
    "Frontend Developer."
  ],
  bio: "Security-first, self-driven developer with hands-on experience building applications from scratch focus on writing clean code, designing efficient backends,  Dockerized environments, Redis-powered optimizations, and secure development practices I believe strong skills are built by consistently building and improving real-world applications",




  image: "/devel1.png",
  resumeUrl: "#"
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/ritik-singh",
  github: "https://github.com/ritiksingh",
  email: "ritik.singh@example.com",
  phone: "+91 9876543210",
  whatsapp: "https://wa.me/919876543210"
};

export const skills = [
  { name: "HTML/CSS", level: 90, color: "#E34F26", icon: "htmlcss" },
  { name: "JavaScript", level: 92, color: "#F7DF1E", icon: "javascript" },
  { name: "React", level: 90, color: "#61DAFB", icon: "react" },
  { name: "Node.js", level: 88, color: "#339933", icon: "nodejs" },
  { name: "Express.js", level: 85, color: "#888888", icon: "express" },
  { name: "MongoDB", level: 80, color: "#47A248", icon: "mongodb" },
  { name: "MySQL", level: 78, color: "#00758F", icon: "mysql" },
  { name: "Docker", level: 75, color: "#2496ED", icon: "docker" },
  { name: "Redis", level: 75, color: "#DC382D", icon: "redis" },
  { name: "GitHub", level: 88, color: "#181717", icon: "github" },
  { name: "Postman", level: 82, color: "#FF6C37", icon: "postman" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with payment integration, real-time inventory management, and admin dashboard. Built with microservices architecture for scalability.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/ritiksingh/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.example.com"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Supports agile workflows and sprint planning.",
    techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/ritiksingh/task-manager",
    liveUrl: "https://taskmanager.example.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation platform leveraging GPT models for blog posts, social media content, and marketing copy. Features template library and content scheduling.",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/ritiksingh/ai-content-gen",
    liveUrl: "https://content-ai.example.com"
  },
  {
    id: 4,
    title: "Real-Time Analytics Dashboard",
    description: "Enterprise analytics platform with interactive data visualizations, custom reporting, and real-time data streaming. Handles millions of events per day.",
    techStack: ["React", "D3.js", "Node.js", "Kafka", "ClickHouse"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/ritiksingh/analytics-dashboard",
    liveUrl: "https://analytics.example.com"
  }
];

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects, implemented CI/CD pipelines, and optimized application performance."
  }
];