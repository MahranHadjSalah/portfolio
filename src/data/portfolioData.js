export const portfolioData = {
  personal: {
    name: "Mahran Hadj Salah",
    title: "Software Engineering Student · AI & Full-Stack Developer",
    location: "Sfax, Tunisia",
    status: "Available for internships & high-impact projects",
    statusAvailable: true,
    tagline: "I build intelligent software products that combine AI, automation, and modern web technologies.",
    bio: [
      "I am a Software Engineering Student at ISIMS (Université de Sfax) with a passionate obsession for building real-world software products.",
      "My work bridges the gap between deep generative AI capabilities—including LLMs, RAG, GraphRAG, and LangGraph multi-agent workflows—and production-ready full-stack architectures. I don't just experiment with models; I engineer full-scale SaaS platforms, automated sales pipelines, and resilient backend systems.",
      "Always focused on clean architecture, high throughput, and tangible business value."
    ],
    email: "mahranhadjsalah56@gmail.com",
    phone: "+216 56 187 082",
    whatsapp: "https://wa.me/21656187082",
    github: "https://github.com/MahranHadjSalah",
    linkedin: "https://www.linkedin.com/in/mahran-hadj-salah-4b98bb393/"
  },

  whatIDo: [
    {
      id: "ai-apps",
      title: "AI Applications",
      short: "LLMs & Intelligent Interfaces",
      description: "Developing production-grade generative AI interfaces that solve complex enterprise problems with deterministic guardrails.",
      tags: ["LLMs", "Context Guardrails", "Streaming UI", "Function Calling"],
      icon: "Cpu"
    },
    {
      id: "fullstack-saas",
      title: "Full-Stack SaaS",
      short: "End-to-End Modern Products",
      description: "Architecting end-to-end cloud platforms with reactive frontends, resilient microservices, authentication, and billing.",
      tags: ["React / Vite", "Node.js / FastAPI", "PostgreSQL", "Tailwind CSS"],
      icon: "Layers"
    },
    {
      id: "ai-agents",
      title: "AI Agents & Automation",
      short: "Multi-Agent Workflows",
      description: "Designing autonomous multi-agent state machines with LangGraph that execute multi-step research, sales, and operations.",
      tags: ["LangGraph", "State Machines", "Tool Calling", "Meta Webhooks"],
      icon: "Bot"
    },
    {
      id: "rag-systems",
      title: "RAG & Knowledge Systems",
      short: "GraphRAG & Hybrid Retrieval",
      description: "Implementing advanced RAG pipelines with graph context augmentation, dense vector embeddings, and citation verification.",
      tags: ["GraphRAG", "Vector Search", "Knowledge Graphs", "Reranking"],
      icon: "Network"
    },
    {
      id: "backend-apis",
      title: "Backend & APIs",
      short: "High-Throughput Systems",
      description: "Engineering asynchronous APIs, rate-limited queuing pipelines, and low-latency database schemas built for reliability.",
      tags: ["FastAPI", "Express", "Redis Queues", "PostgreSQL"],
      icon: "Server"
    }
  ],

  featuredProjects: [
    {
      id: "autoreply",
      title: "Autoreply",
      badge: "Commercial SaaS · AI Sales Agent",
      tagline: "AI-powered Facebook & Instagram sales automation platform",
      description: "An enterprise automation platform that transforms social media channels into 24/7 autonomous sales engines. It intercepts customer inquiries via webhooks, classifies purchase intent, queries dynamic inventory, and negotiates/closes sales automatically.",
      highlight: "Replaces manual customer support with sub-second intelligent responses, reducing lead drop-off by over 70%.",
      impactMetrics: [
        { label: "Response Latency", value: "< 850ms" },
        { label: "Intent Accuracy", value: "96.4%" },
        { label: "Automation Rate", value: "85%+" },
        { label: "Supported Channels", value: "IG + FB" }
      ],
      architecture: [
        "Event-driven webhook ingest layer built with FastAPI & Node.js for zero message loss",
        "Redis debounce & token-bucket rate limiter to comply with Meta Graph API quotas",
        "Agentic conversation state machine utilizing LLM tool-calling for catalog querying",
        "Multi-tenant PostgreSQL schema tracking conversation funnels, orders, and customer CRM"
      ],
      techStack: ["FastAPI", "Node.js", "Meta Graph API", "Redis", "PostgreSQL", "LangChain", "React"],
      links: {
        demo: "mailto:mahranhadjsalah56@gmail.com?subject=Live%20Demo%20Request%20-%20Autoreply",
        github: "https://github.com/MahranHadjSalah"
      },
      previewType: "autoreply"
    },
    {
      id: "lux-dental",
      title: "LUX Dental",
      badge: "Healthcare SaaS · Clinical Workflow",
      tagline: "Comprehensive modern SaaS for dental-office management",
      description: "A tailored practice-management suite designed to eliminate operational friction in dental clinics. Features real-time appointment scheduling, interactive dental charting (odontogram), automated SMS/email reminders, digital medical history, and invoicing.",
      highlight: "Replaces fragmented legacy desktop software with a sleek, cloud-first collaborative workspace.",
      impactMetrics: [
        { label: "Schedule Efficiency", value: "+35%" },
        { label: "No-Show Reduction", value: "45%" },
        { label: "Role Levels", value: "Admin / MD / Staff" },
        { label: "Architecture", value: "Cloud-Native" }
      ],
      architecture: [
        "Modular React frontend with optimistic state updates and fluid drag-and-drop scheduling",
        "REST API with strict Role-Based Access Control (RBAC) protecting sensitive patient data",
        "Relational PostgreSQL database with audit logging and automated daily backup routines",
        "Background task worker for appointment reminder dispatches and financial report generation"
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Docker"],
      links: {
        demo: "mailto:mahranhadjsalah56@gmail.com?subject=Live%20Demo%20Request%20-%20LUX%20Dental",
        github: "https://github.com/MahranHadjSalah"
      },
      previewType: "dental"
    },
    {
      id: "supportai",
      title: "SupportAi",
      badge: "Enterprise AI · GraphRAG Platform",
      tagline: "Enterprise conversational AI and GraphRAG knowledge platform",
      description: "A sophisticated knowledge retrieval system engineered to overcome standard vector RAG limitations. By fusing knowledge graphs with vector embeddings (GraphRAG), SupportAi accurately maps multi-hop relationships across enterprise documentation with verified citations.",
      highlight: "Virtually eliminates hallucinations by grounding answers in explicit graph relationship paths.",
      impactMetrics: [
        { label: "Hallucination Drop", value: "-60%" },
        { label: "Retrieval F1", value: "0.92" },
        { label: "Context Window", value: "128k Tokens" },
        { label: "Reasoning Steps", value: "Multi-Hop" }
      ],
      architecture: [
        "Hybrid retrieval pipeline: Dense embeddings + BM25 keyword + Graph entity relationships",
        "LangGraph stateful workflow managing iterative query refinement and answer self-checking",
        "Vector database indexing alongside structured entity graphs for fast cross-document traversal",
        "FastAPI async backend streaming token responses via Server-Sent Events (SSE)"
      ],
      techStack: ["Python", "FastAPI", "LangGraph", "GraphRAG", "PostgreSQL / pgvector", "Redis", "Docker"],
      links: {
        demo: "mailto:mahranhadjsalah56@gmail.com?subject=Live%20Demo%20Request%20-%20SupportAi",
        github: "https://github.com/MahranHadjSalah"
      },
      previewType: "supportai"
    }
  ],

  secondaryProjects: [
    {
      title: "LangGraph Multi-Agent Research Swarm",
      category: "AI Agentic Workflow",
      description: "A team of autonomous specialized agents (Researcher, Fact-Checker, Writer) collaborating in a state graph to produce in-depth technical analysis reports.",
      stack: ["Python", "LangGraph", "Tavily API", "FastAPI"]
    },
    {
      title: "High-Throughput Redis Task Broker",
      category: "Backend & Systems",
      description: "Distributed task processing queue with delayed job execution, exponential backoff retries, and dead-letter queue monitoring.",
      stack: ["Node.js", "Redis", "Docker", "TypeScript"]
    },
    {
      title: "Document Vectorization & Chunking Pipeline",
      category: "Data & Retrieval",
      description: "Asynchronous document parsing engine extracting semantic hierarchies from PDFs, markdown, and docx with token-aware chunking.",
      stack: ["Python", "pgvector", "FastAPI", "PyMuPDF"]
    }
  ],

  techStack: [
    {
      category: "AI, Agents & Intelligence",
      description: "Core technologies powering autonomous workflows, semantic search, and intelligent automation.",
      skills: [
        { name: "LLMs / Prompt Engineering", level: "Advanced", highlight: true },
        { name: "LangGraph", level: "Advanced", highlight: true },
        { name: "RAG & GraphRAG", level: "Advanced", highlight: true },
        { name: "LangChain", level: "Experienced", highlight: false },
        { name: "Embeddings & Vector Stores", level: "Advanced", highlight: true },
        { name: "Agent Tool Calling", level: "Advanced", highlight: false }
      ]
    },
    {
      category: "Backend & Distributed Systems",
      description: "High-performance API design, asynchronous workers, and robust business logic.",
      skills: [
        { name: "Python", level: "Advanced", highlight: true },
        { name: "FastAPI", level: "Advanced", highlight: true },
        { name: "Node.js", level: "Advanced", highlight: true },
        { name: "Express", level: "Experienced", highlight: false },
        { name: "RESTful APIs", level: "Advanced", highlight: false },
        { name: "Webhooks Architecture", level: "Advanced", highlight: true }
      ]
    },
    {
      category: "Frontend & Interfaces",
      description: "Clean, responsive, interactive user experiences built with modern toolchains.",
      skills: [
        { name: "React", level: "Advanced", highlight: true },
        { name: "Vite", level: "Advanced", highlight: false },
        { name: "Tailwind CSS", level: "Advanced", highlight: true },
        { name: "JavaScript (ESNext)", level: "Advanced", highlight: false },
        { name: "HTML5 / Modern CSS", level: "Advanced", highlight: false }
      ]
    },
    {
      category: "Data, Cloud & DevOps",
      description: "Persistent storage, low-latency caching, containerization, and version control.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", highlight: true },
        { name: "Redis", level: "Advanced", highlight: true },
        { name: "Docker", level: "Proficient", highlight: true },
        { name: "Git / GitHub", level: "Advanced", highlight: false },
        { name: "Linux / Bash", level: "Proficient", highlight: false }
      ]
    }
  ],

  educationExperience: {
    education: [
      {
        degree: "National Engineering Diploma in Software Engineering (1st Year)",
        institution: "ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax",
        university: "Université de Sfax",
        period: "2024 — Present",
        status: "In Progress",
        description: "Enrolled in the prestigious Software Engineering cycle. Deepening formal foundations in distributed systems, advanced algorithmics, software design patterns, and database engineering.",
        highlights: [
          "Core focus on Software Architecture & Object-Oriented Design",
          "Advanced Operating Systems & Network Protocols",
          "Active builder in academic and student developer initiatives"
        ]
      }
    ],
    experience: [
      {
        role: "Software & AI Product Builder",
        company: "Independent Projects / Freelance",
        period: "2023 — Present",
        type: "Product Development",
        description: "Designing, building, and deploying full-scale commercial software products from zero to production.",
        highlights: [
          "Built Autoreply: automated social media sales platform handling real-time Meta webhooks",
          "Engineered LUX Dental: end-to-end practice management SaaS with scheduling and RBAC",
          "Architected SupportAi: GraphRAG platform solving multi-hop retrieval hallucinations"
        ]
      }
    ]
  },

  philosophy: [
    {
      title: "Product-First Engineering",
      desc: "Code is a tool to solve tangible user and business problems. I focus on creating products that work reliably in production, not toy prototypes."
    },
    {
      title: "Intelligent Autonomy",
      desc: "Moving beyond passive chatbots to proactive agents capable of executing tools, querying live databases, and taking real actions."
    },
    {
      title: "Speed & Reliability",
      desc: "Fast interfaces, sub-second API responses, and resilient data models engineered to handle real-world edge cases."
    }
  ]
};
