// Single source of truth for site content.
// Synced with the CV: mahran_cv_englishV1.pdf (November 2026).

export const CV_URL = '/Mahran_Hadj_Salah_CV.pdf';

export const personal = {
  name: 'Mahran Hadj Salah',
  firstName: 'Mahran',
  lastName: 'Hadj Salah',
  title: 'Software Engineering Student · AI Engineer',
  headline: 'I build LLM-powered agents and the SaaS products around them.',
  intro:
    'Second-year software engineering student at ISIMS Sfax, focused on large language models and agentic AI — from RAG pipelines and multi-agent workflows to production deployment.',
  profile:
    'Second-year software engineering student at ISIMS Sfax, focused on Large Language Models and Agentic AI. Curious and self-driven, I build full-stack projects and SaaS solutions combining AI, software architecture, and modern technologies.',
  about: [
    'I’m a second-year software engineering student at ISIMS Sfax, focused on Large Language Models and agentic AI.',
    'I like owning a product end to end: designing the architecture, wiring the agents and retrieval, shipping the backend and the interface, and putting it in front of real users. AutoReply — an AI sales agent for Tunisian e-commerce that I founded and run in production — is where most of that comes together.',
    'Outside of coursework I lead the Software & AI department of the Intelligent Systems Club at ISIMS, where I organize workshops and supervise student projects.',
  ],
  location: 'Sfax, Tunisia',
  timezone: 'GMT+1',
  availability: 'Open to AI & software engineering internships',
  workPreference: 'Remote worldwide · On-site / hybrid in Tunisia',
  email: 'mahranhadjsalah56@gmail.com',
  phone: '+216 56 187 082',
  whatsapp: 'https://wa.me/21656187082',
  github: 'https://github.com/MahranHadjSalah',
  linkedin: 'https://www.linkedin.com/in/mahran-hadj-salah-4b98bb393/',
  photo: '/profile.jpg?v=3',
};

// Short, verifiable facts for the hero bento
export const heroFacts = [
  { kind: 'live', label: 'Live in production', value: 'AutoReply', note: 'AI sales-agent SaaS · founder' },
  { kind: 'now', label: 'Summer 2026', value: 'AI Engineering Intern', note: 'Your Best Solution · Canada (remote)' },
  { kind: 'edu', label: 'Education', value: 'ISIMS Sfax', note: 'Software Engineering · 2nd year' },
  { kind: 'lead', label: 'Leadership', value: 'Vice President', note: 'Intelligent Systems Club, ISIMS' },
];

export const experience = [
  {
    id: 'supportai-internship',
    role: 'AI Engineering Intern',
    company: 'Your Best Solution',
    product: 'SupportAi',
    location: 'Canada · Remote',
    period: 'Summer 2026 · 2 months',
    projectId: 'supportai',
    bullets: [
      'Designing an enterprise conversational AI platform that combines retrieval-augmented generation with knowledge-graph retrieval to produce grounded answers from company knowledge.',
      'Structuring multi-agent workflows for task decomposition, retrieval, verification, and response generation, orchestrated with LangGraph.',
      'Developing backend services with Python, FastAPI, PostgreSQL/pgvector, Redis, and server-sent events (SSE).',
      'Exploring human validation and multi-tenant design for controlled knowledge access in enterprise use cases.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'Redis', 'RAG', 'GraphRAG'],
  },
  {
    id: 'autoreply-founder',
    role: 'Founder & AI Engineer',
    company: 'AutoReply',
    product: 'AI sales-agent SaaS for Tunisian e-commerce',
    location: 'Sfax, Tunisia',
    period: '2026 – Present',
    bullets: [
      'Built and run a live multi-tenant SaaS where an AI agent answers Facebook Messenger customers and drives sales for merchants.',
      'Agent tuned for Tunisian Darija, with RAG over each merchant’s product catalog (LangChain + FAISS) and per-client multilingual prompt templates.',
      'Production deployment on Hetzner: Docker, Nginx wildcard subdomains, SSL (Certbot), CI/CD with GitHub Actions.',
      'Handled go-to-market: Meta App Review & Business Verification, Meta Ads campaigns, Meta Pixel tracking.',
    ],
    stack: ['React', 'Vite', 'Express.js', 'LangChain', 'FAISS', 'Meta Messenger API', 'Docker'],
  },
];

export const featuredProjects = [
  {
    id: 'supportai',
    title: 'SupportAi',
    kind: 'Internship · Your Best Solution',
    period: 'Summer 2026',
    status: 'in-progress',
    tagline: 'Enterprise conversational AI that grounds answers in company knowledge with RAG + GraphRAG.',
    summary:
      'An enterprise conversational AI platform built during my AI engineering internship. It combines retrieval-augmented generation with knowledge-graph retrieval and multi-agent orchestration to produce grounded answers from company knowledge.',
    role: 'AI Engineering Intern — agent workflows, retrieval and backend services.',
    bullets: [
      'Designing an enterprise conversational AI platform combining retrieval-augmented generation with knowledge-graph retrieval for grounded answers.',
      'Structuring multi-agent workflows for task decomposition, retrieval, verification, and response generation, orchestrated with LangGraph.',
      'Developing backend services with Python, FastAPI, PostgreSQL/pgvector, Redis, and server-sent events (SSE).',
      'Exploring human validation and multi-tenant design for controlled knowledge access in enterprise use cases.',
    ],
    flow: [
      { step: 'Decompose', desc: 'Planner agent breaks the user request into sub-tasks' },
      { step: 'Retrieve', desc: 'Vector search (pgvector) combined with knowledge-graph retrieval' },
      { step: 'Verify', desc: 'Verification agent checks the answer against retrieved sources' },
      { step: 'Respond', desc: 'Grounded response streamed to the client over SSE' },
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'Redis', 'RAG', 'GraphRAG'],
    links: { github: 'https://github.com/MahranHadjSalah/SupportAi' },
    image: '/projects/supportai/preview.jpg',
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Platform',
    kind: 'Personal project · Multi-agent orchestration',
    period: '2026',
    status: 'personal',
    tagline: 'A LangGraph multi-agent platform where a Supervisor routes work to specialized agents.',
    summary:
      'A multi-agent platform built on LangGraph. A Supervisor agent classifies each request and routes it to specialized agents. I wrote the full architecture documentation and build roadmap, with a FastAPI backend and a React / Vite interface.',
    role: 'Sole designer and developer — architecture, agents, backend and UI.',
    bullets: [
      'Multi-agent platform built on LangGraph with a Supervisor agent that routes tasks to specialized agents.',
      'Wrote the full architecture documentation and build roadmap.',
      'FastAPI backend with a React / Vite interface.',
    ],
    flow: [
      { step: 'Request', desc: 'User task enters through the React / Vite interface' },
      { step: 'Supervisor', desc: 'LangGraph Supervisor classifies and routes the task' },
      { step: 'Specialized agents', desc: 'Domain agents execute their part of the workflow' },
      { step: 'Result', desc: 'FastAPI returns the combined result to the UI' },
    ],
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'Vite'],
    links: { github: 'https://github.com/MahranHadjSalah/Entreprise-Ai' },
    image: '/projects/enterprise-ai/preview.jpg',
    gallery: [
      { src: '/projects/enterprise-ai/architecture_diagram.png', caption: 'Architecture diagram' },
      { src: '/projects/enterprise-ai/enterprise_ai_platform_blueprint.png', caption: 'Platform blueprint' },
    ],
  },
];

export const otherProjects = [
  {
    title: 'SeniorVoice',
    context: 'Hackathon',
    description: 'Voice assistant for elderly users in French and Tunisian Darija — Whisper STT, intent detection, SOS and medication reminders.',
    stack: ['Python', 'FastAPI', 'Whisper', 'React'],
    githubUrl: 'https://github.com/MahranHadjSalah/senior-voice',
  },
  {
    title: 'SmartFinanceAnalyzer',
    context: 'Full-stack AI',
    description: 'Financial health diagnostics for SMEs: deterministic ratio engine plus LLM risk analysis, CSV import and PDF reports.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Gemini'],
    githubUrl: 'https://github.com/MahranHadjSalah/Smart-Finance-Analyzer',
  },
  {
    title: 'Hand Vision & Gesture Studio',
    context: 'Computer vision',
    description: 'Real-time hand tracking with MediaPipe and OpenCV: air-drawing canvas, gesture controls and a gesture game.',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/MahranHadjSalah/Hand-detectors',
  },
  {
    title: 'University Absence Management',
    context: 'Full-stack',
    description: 'Role-based attendance platform with admin, professor and student dashboards, batch roll-calls and justifications.',
    stack: ['React', 'Express', 'SQLite', 'JWT'],
    githubUrl: 'https://github.com/MahranHadjSalah/University-Absence-Management',
  },
  {
    title: 'ATTT Inspection Booking',
    context: 'Mobile web',
    description: 'Mobile-first booking flow for vehicle technical inspections, implemented from a Figma design.',
    stack: ['React', 'CSS', 'Figma'],
    githubUrl: 'https://github.com/MahranHadjSalah/app_mobile',
  },
  {
    title: 'Flutter E-Commerce UI',
    context: 'Mobile',
    description: 'Cross-platform shopping app UI: onboarding, catalog, checkout and wallet screens with skeleton loading.',
    stack: ['Flutter', 'Dart'],
    githubUrl: 'https://github.com/MahranHadjSalah/E-commerce-Complete-Flutter-UI-master',
  },
];

export const skills = [
  {
    category: 'AI & LLM Engineering',
    items: ['LLM integration', 'Prompt engineering', 'RAG', 'GraphRAG', 'Embeddings', 'Vector search', 'Tool calling', 'Model APIs', 'Machine Learning'],
    wide: true,
  },
  { category: 'Agent Frameworks', items: ['LangChain', 'LangGraph', 'AutoGen', 'CrewAI'] },
  { category: 'Models & APIs', items: ['Claude API', 'OpenAI API', 'Groq', 'Ollama', 'Hugging Face'] },
  { category: 'Speech AI', items: ['Whisper (STT)', 'Text-to-speech', 'Darija / French code-switching'] },
  { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C', 'SQL'] },
  {
    category: 'Backend & Frontend',
    items: ['FastAPI', 'Node.js / Express', 'REST APIs', 'Webhooks', 'React', 'Vite', 'Tailwind CSS'],
    wide: true,
  },
  { category: 'Vector & Databases', items: ['FAISS', 'pgvector', 'Neo4j', 'PostgreSQL', 'MySQL', 'Oracle', 'Redis'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'GitHub Actions (CI/CD)', 'Nginx', 'Linux', 'Hetzner'] },
  { category: 'Software Engineering & Architecture', items: ['UML', 'OO Design', 'Design Patterns', 'Software Architecture'], wide: true },
];

export const education = [
  {
    degree: 'Computer Engineering Degree — Software Engineering',
    school: 'ISIMS Sfax',
    period: '2025 – Present',
    courses: ['Software architecture & design patterns', 'Advanced databases', 'DevOps & collaborative platforms', 'Agile / Scrum', 'Machine learning & deep learning'],
  },
  {
    degree: 'Integrated Preparatory Cycle (MPI)',
    school: 'ISIMS Sfax',
    period: '2023 – 2025',
    courses: ['Algorithms & data structures', 'OOP (C, Python, Java)', 'Probability & statistics', 'Graph theory', 'Networks', 'Competitive programming'],
  },
];

export const leadership = [
  {
    role: 'Vice President',
    org: 'Intelligent Systems Club (ISC), ISIMS',
    description: 'Leadership, team coordination, and strategic development of club activities.',
  },
  {
    role: 'Head of Software & AI Department',
    org: 'Intelligent Systems Club (ISC), ISIMS',
    description: 'Leading technical initiatives, organizing workshops, and supervising software development and AI projects.',
  },
  {
    role: 'Student Entrepreneur',
    org: 'SNEE — National Student Entrepreneur Status, PEES Sfax',
    description: 'Recognized under Tunisia’s National Student Entrepreneur Program, supporting entrepreneurial initiatives and startup development.',
  },
];

export const languages = [
  { language: 'Arabic', level: 'Native' },
  { language: 'French', level: 'Fluent' },
  { language: 'English', level: 'Fluent' },
];

export const softSkills = ['Leadership & Teaching', 'Communication & Presentation', 'Problem Solving', 'Fast Learning', 'Initiative'];

export const interests = ['AI Agents & Multi-Agent Systems', 'LLMOps', 'Independent SaaS Development', 'Entrepreneurship'];

export const lookingFor = ['AI Engineering internships', 'Software Engineering internships', 'Backend / full-stack roles', 'AI product development'];

export const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];
