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
  siteUrl: 'https://noorfatima.dev',
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
    slug: 'spam-classifier',
    year: '2024',
    category: 'Machine Learning · NLP',
    title: 'Spam Email Classifier',
    description:
      'NLP pipeline achieving 97%+ accuracy on real-world email classification — trained, benchmarked, and evaluated three classifier models with precision, recall, and F1-score.',
    tech: ['Python', 'NLTK', 'TF-IDF', 'Scikit-learn', 'Naive Bayes', 'Logistic Regression', 'SVM'],
    githubUrl: 'https://github.com/Noorumms',
    featured: true,
  },
  {
    slug: 'feline-gallery',
    year: '2024',
    category: 'Full-Stack · ASP.NET Core',
    title: 'Feline Gallery',
    description:
      'Full-stack image gallery application built on ASP.NET Core MVC with clean separation of concerns — controllers, Razor views, and EF Core models each with a single defined responsibility.',
    tech: ['C#', 'ASP.NET Core MVC', 'Razor Pages', 'Entity Framework Core', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/Noorumms',
    featured: true,
  },
  {
    slug: 'ai-task-manager',
    year: '2025',
    category: 'Automation · API Integration',
    title: 'AI Task & Event Manager',
    description:
      'Automation system integrating Google Calendar and Tasks APIs with conditional logic and OAuth authentication — reducing manual scheduling effort by an estimated 60%.',
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
      'Decision Tree (ID3), K-Means Clustering, Linear Regression, and Logistic Regression implemented without Scikit-learn — manually computing entropy, information gain, and gradient descent.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Noorumms',
    featured: false,
  },
  {
    slug: 'face-emotion',
    year: '2024',
    category: 'Computer Vision',
    title: 'Face & Emotion Recognition',
    description:
      'Real-time face detection pipeline using Haar Cascade and DeepFace with histogram equalization preprocessing — outputs annotated images and emotion summary CSVs.',
    tech: ['Python', 'OpenCV', 'DeepFace', 'Haar Cascade', 'Google Colab'],
    githubUrl: 'https://github.com/Noorumms',
    featured: false,
  },
  {
    slug: 'android-apps',
    year: '2024',
    category: 'Mobile · Android',
    title: 'Android Apps — Affirmations & Quotes',
    description:
      'Two Android applications built with Jetpack Compose, Firebase Auth and Firestore, real-time search with StateFlow, and MVVM architecture for clean, testable code.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firebase Firestore', 'MVVM'],
    githubUrl: 'https://github.com/Noorumms',
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
  {
    dateRange: '2025 — Present',
    role: 'Freelance Technical Content Writer',
    company: 'LinkedIn Ghostwriting',
    location: 'Remote',
    bullets: [
      'Wrote technical documentation and engineering content for professional audiences',
      'Translated complex software engineering concepts into accessible, non-technical deliverables',
    ],
    tech: ['Technical Writing', 'Documentation', 'Communication'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['C#', 'Python', 'C++', 'JavaScript', 'Kotlin', 'SQL'],
  },
  {
    label: 'Frameworks & Platforms',
    skills: ['ASP.NET Core', '.NET MVC', 'React', 'Blazor', 'REST APIs', 'Clean Architecture'],
  },
  {
    label: 'AI / ML',
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'NLTK', 'TF-IDF', 'TensorFlow/Keras'],
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
    skills: ['OOP', 'MVC', 'SOLID', 'DSA', 'Microservices', 'Agile', 'SDLC'],
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
