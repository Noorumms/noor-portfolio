export interface Project {
  slug: string
  year: string
  category: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  inProgress?: boolean
}

export interface Experience {
  dateRange: string
  role: string
  company: string
  location: string
  bullets: string[]
  tech: string[]
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface Metric {
  value: string
  label: string
}

export interface Achievement {
  text: string
}

export const personalInfo = {
  name: 'Noor Fatima',
  role: 'Software Engineer',
  tagline: 'Full-Stack · ML · .NET',
  oneLiner: 'Building real things with measurable results.',
  email: 'noorefatimah0@gmail.com',
  github: 'https://github.com/Noorumms',
  linkedin: 'https://linkedin.com/in/noor-fatimah-8b86322a7',
  siteUrl: 'https://noorumms.vercel.app/',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export const metrics: Metric[] = [
  { value: '97%+', label: 'NLP Accuracy' },
  { value: '200+', label: "Students TA'd" },
  { value: '60%', label: 'Time Saved' },
  { value: '7+', label: 'Projects' },
]

export const projects: Project[] = [
  {
    slug: 'hunar',
    year: '2025',
    category: 'Full-Stack · ASP.NET Core · Clean Architecture',
    title: 'Hunar — Hyperlocal Services Marketplace',
    description:
      'A hyperlocal skilled worker marketplace connecting customers with nearby service providers across Pakistani cities. Built with Clean Architecture, JWT authentication, role-based access, and a full booking workflow. An AI-powered provider matching layer is planned for the final phase.',
    tech: ['C#', 'ASP.NET Core Web API', 'EF Core', 'SQL Server', 'JWT', 'Clean Architecture', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/noorumms/Hunar',
    featured: true,
    inProgress: true,
  },
  {
    slug: 'spam-classifier',
    year: '2024',
    category: 'Machine Learning · NLP',
    title: 'Spam Email Classifier',
    description:
      'NLP pipeline achieving 97%+ accuracy on real-world email classification, trained, benchmarked, and evaluated across three classifier models with precision, recall, and F1-score.',
    tech: ['Python', 'NLTK', 'TF-IDF', 'Scikit-learn', 'Naive Bayes', 'Logistic Regression', 'SVM'],
    githubUrl: 'https://github.com/Noorumms/sms_email-spam-classifier',
    liveUrl: 'https://spam-checker-app.streamlit.app/',
    featured: true,
  },
  {
    slug: 'car-price-predictor',
    year: '2026',
    category: 'Machine Learning',
    title: 'Car Price Predictor — Regression Pipeline',
    description:
      'An end-to-end ML regression pipeline predicting used car prices from real Quikr India listings. Covers full data cleaning, EDA with interpretations, and a Scikit-learn Pipeline wrapping OneHotEncoding and Linear Regression together. Benchmarked across 1000 random train/test splits to find the most stable model. Deployed as a live Streamlit web app.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Linear Regression', 'Streamlit'],
    githubUrl: 'https://github.com/Noorumms/car-price-predictor',
    liveUrl: 'https://preloved-wheels.streamlit.app',
    featured: true,
  },
  {
    slug: 'virtual-paint',
    year: '2026',
    category: 'Computer Vision',
    title: 'Virtual Paint — Real-Time CV App',
    description:
      'A real-time virtual painting app built with Python and OpenCV. Point any colored object at your webcam and draw on screen — no mouse, no touchscreen needed. Detects orange, purple, and green simultaneously, with adjustable brush sizes, an eraser, canvas clear, and PNG export.',
    tech: ['Python', 'OpenCV', 'NumPy', 'HSV Color Detection', 'Real-Time Processing'],
    githubUrl: 'https://github.com/Noorumms',
    featured: true,
  },
  {
    slug: 'feline-gallery',
    year: '2024',
    category: 'Full-Stack · ASP.NET Core',
    title: 'Feline Gallery',
    description:
      'Full-stack image gallery application built on ASP.NET Core MVC with clean separation of concerns: controllers, Razor views, and EF Core models each with a single defined responsibility.',
    tech: ['C#', 'ASP.NET Core MVC', 'Razor Pages', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/Noorumms/FelineGallery',
    featured: true,
  },
  {
    slug: 'ai-task-manager',
    year: '2025',
    category: 'Automation · API Integration',
    title: 'AI Task & Event Manager',
    description:
      'Automation system integrating Google Calendar and Tasks APIs with conditional logic and OAuth authentication, reducing manual scheduling effort by an estimated 60%.',
    tech: ['n8n', 'Google Calendar API', 'Google Tasks API', 'REST', 'OAuth'],
    githubUrl: 'https://github.com/Noorumms',
    featured: true,
  },
  {
    slug: 'ml-from-scratch',
    year: '2024',
    category: 'Machine Learning · Academic',
    title: 'ML Algorithms from Scratch',
    description:
      'Decision Tree (ID3), K-Means Clustering, Linear Regression, and Logistic Regression implemented without Scikit-learn, manually computing entropy, information gain, and gradient descent.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Noorumms/ml-from-scratch',
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    dateRange: '2025 — 2026',
    role: 'Teaching Assistant — Software Engineering & OOP',
    company: 'PUCIT',
    location: 'Lahore',
    bullets: [
      'Mentored 200+ students per semester in OOP, software architecture, system design, and debugging',
      'Ran structured code reviews on 50+ student projects, driving adoption of SOLID principles and clean code practices',
      'Designed and delivered lab sessions on testing, clean architecture, and software best practices',
      'Collaborated with faculty on curriculum planning, improving lab engagement across two consecutive semesters',
    ],
    tech: ['OOP', 'System Design', 'Code Review', 'SOLID', 'Mentoring'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['C#', 'Python', 'C++', 'JavaScript', 'Kotlin', 'SQL'],
  },
  {
    label: 'Frameworks & Platforms',
    skills: ['ASP.NET Core', '.NET MVC', 'Blazor', 'REST APIs', 'Clean Architecture'],
  },
  {
    label: 'AI / ML',
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'NLTK', 'TF-IDF'],
  },
  {
    label: 'Mobile',
    skills: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase'],
  },
  {
    label: 'Databases',
    skills: ['SQL Server', 'MySQL', 'Oracle', 'Firebase Firestore', 'Entity Framework Core'],
  },
  {
    label: 'Tools',
    skills: ['n8n', 'Git & GitHub', 'Postman', 'Jupyter Notebook', 'VS Code', 'Google Colab'],
  },
  {
    label: 'Practices',
    skills: ['OOP', 'MVC', 'SOLID', 'DSA', 'Agile', 'SDLC'],
  },
]

export const education = {
  dateRange: 'Aug 2023 — May 2027',
  degree: 'BS Software Engineering',
  institution: 'Punjab University College of Information Technology (PUCIT), Lahore',
  cgpa: '3.5 / 4.00',
  coursework: [
    'Machine Learning',
    'Computer Vision',
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Web Development',
    'OOP',
    'Operating Systems',
    'Linear Algebra',
    'Statistics',
  ],
}

export const achievements: Achievement[] = [
  { text: 'Top Campus Ambassador — LoopLab & LoopVerse (2025)' },
  { text: "Participant — COSMOCON'25 Web Development Hackathon (2025)" },
  { text: 'Participant — Code Bees 4.0 Competitive Programming Contest (2025)' },
]
