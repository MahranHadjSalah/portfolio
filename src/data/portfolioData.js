export const portfolioData = {
  personal: {
    name: "Mahran Hadj Salah",
    title: "Software Engineering Student building AI-powered products and SaaS systems",
    headline: "I design and engineer production-oriented applications across AI agents, GraphRAG, automation, and full-stack systems.",
    institution: "ISIMS — Université de Sfax",
    location: "Sfax, Tunisia",
    availability: "Available for internships · AI / Software Engineering / Full-Stack",
    workPreference: "Remote (Worldwide) · On-site / Hybrid (Tunisia)",
    timezone: "GMT+1 (Tunis)",
    email: "mahranhadjsalah56@gmail.com",
    phone: "+216 56 187 082",
    phoneRaw: "21656187082",
    whatsapp: "https://wa.me/21656187082",
    github: "https://github.com/MahranHadjSalah",
    linkedin: "https://www.linkedin.com/in/mahran-hadj-salah-4b98bb393/",
    bio: [
      "I'm a Software Engineering student at ISIMS — Université de Sfax, focused on building AI-powered software and full-stack products.",
      "My work sits at the intersection of software engineering and applied AI. I enjoy turning ideas into complete systems — from APIs and databases to AI agents, retrieval pipelines, and responsive web interfaces.",
      "I'm particularly interested in AI engineering, backend systems, SaaS architecture, and intelligent automation."
    ]
  },

  whatIBuild: [
    {
      id: "ai-products",
      title: "AI-Powered Products",
      description: "AI agents, LLM applications, RAG systems, and intelligent workflows grounded in source documents.",
      technologies: ["LangGraph", "LangChain", "RAG & GraphRAG", "Embeddings", "FastAPI"]
    },
    {
      id: "saas-platforms",
      title: "SaaS Platforms",
      description: "Multi-tenant cloud applications with authentication, RBAC, relational schemas, and billing workflows.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: "backend-systems",
      title: "Backend & Systems",
      description: "Asynchronous APIs, job queues, webhooks, rate limiting, and event-driven architectures built for stability.",
      technologies: ["FastAPI", "Redis Queues", "PostgreSQL", "Docker", "RESTful APIs"]
    },
    {
      id: "intelligent-automation",
      title: "Intelligent Automation",
      description: "Autonomous agents capable of calling tools, querying databases, and executing end-to-end commercial operations.",
      technologies: ["Tool Calling", "Meta Webhooks", "State Machines", "Python"]
    }
  ],

  howIBuild: [
    {
      step: "01",
      title: "Understand & Scope",
      desc: "Deconstruct business requirements and define exact data contracts before writing code."
    },
    {
      step: "02",
      title: "Architect & Model",
      desc: "Design normalized database schemas, API contracts, state graphs, and asynchronous queues."
    },
    {
      step: "03",
      title: "Engineer & Optimize",
      desc: "Build type-safe, modular services with clean separation between business logic and UI."
    },
    {
      step: "04",
      title: "Test & Validate",
      desc: "Verify error handling, API boundaries, rate-limit edge cases, and retrieval accuracy."
    },
    {
      step: "05",
      title: "Deploy & Monitor",
      desc: "Containerize with Docker, establish CI/CD routines, and log runtime telemetry."
    }
  ],

  featuredProjects: [
    {
      id: "autoreply",
      title: "Autoreply",
      category: "AI Sales Automation",
      tagline: "AI-powered sales automation platform for Facebook & Instagram merchants.",
      summary: "Intercepts social inquiries via webhooks, classifies purchase intent in real time, queries dynamic catalog data, and automates order checkout flows.",
      problem: "E-commerce merchants lose high-intent leads during non-business hours because manual DM responses take hours or days, causing customers to buy from competitors.",
      solution: "Engineered an event-driven automation engine that processes Meta webhooks, passes conversation state through a LangGraph intent router, queries live inventory, and responds autonomously.",
      myRole: "Designed the full-stack architecture, webhook listener, Redis queuing layer, LLM tool-calling logic, and merchant dashboard.",
      architectureHighlights: [
        "FastAPI webhook ingest layer acknowledging Meta webhooks under 200ms to prevent duplicate retries",
        "Redis task queue with token-bucket rate limiting to respect Meta Graph API quotas",
        "LangGraph state machine routing inquiries between catalog queries and human handoff",
        "PostgreSQL schema maintaining conversation history, session state, and order funnels"
      ],
      technicalDecisions: [
        {
          decision: "Why Redis + BullMQ/Celery Queue?",
          reason: "Webhook events must be acknowledged immediately. Offloading AI inference to asynchronous background workers prevents HTTP timeouts."
        },
        {
          decision: "Why LangGraph for conversation flow?",
          reason: "Multi-turn sales negotiations require cyclical state machines with rollback and human-in-the-loop triggers rather than linear chains."
        }
      ],
      engineeringFacts: [
        "Sub-second end-to-end response pipeline",
        "Real-time purchase intent classification",
        "Automated catalog queries & checkout link generation",
        "Full Meta Graph API webhook compliance"
      ],
      whatILearned: "Learned how to handle high-concurrency webhook bursts, implement distributed idempotency keys in Redis, and manage token budgets effectively.",
      techStack: ["FastAPI", "Node.js", "Redis", "PostgreSQL", "Meta Graph API", "LangGraph", "React"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20Autoreply"
    },
    {
      id: "lux-dental",
      title: "LUX Dental",
      category: "Healthcare SaaS",
      tagline: "Modern practice-management SaaS for dental clinics and practitioner workflows.",
      summary: "A unified clinical operations platform providing real-time chair scheduling, digital patient health dossiers, interactive dental charting (odontogram), and automated reminders.",
      problem: "Independent dental clinics often rely on fragmented paper records or outdated desktop software, resulting in missed appointments, billing friction, and poor record accessibility.",
      solution: "Developed a cloud-native SaaS suite with role-based access control (RBAC), multi-chair agenda synchronization, patient record tracking, and automated SMS/email reminders.",
      myRole: "Sole developer across frontend UI, REST API design, relational schema modeling, authentication, and dockerized deployment.",
      architectureHighlights: [
        "React frontend with optimistic schedule updates and reactive calendar views",
        "Express & Node.js REST API with granular RBAC (Practitioner, Assistant, Receptionist)",
        "PostgreSQL relational schema with audit logging and encrypted sensitive patient dossiers",
        "Background cron worker for automated appointment reminder dispatches"
      ],
      technicalDecisions: [
        {
          decision: "Why PostgreSQL with Strict Foreign Keys?",
          reason: "Medical treatments, patient history, and invoices require strict ACID guarantees and audit trails that non-relational databases can't enforce easily."
        },
        {
          decision: "Why granular RBAC?",
          reason: "Receptionists must manage appointments without accessing sensitive diagnosis histories, ensuring patient data confidentiality."
        }
      ],
      engineeringFacts: [
        "RBAC architecture with 3 permission tiers",
        "Optimistic calendar UI with conflict prevention",
        "Relational audit logging for all patient modifications",
        "Containerized with Docker for repeatable deployments"
      ],
      whatILearned: "Gained hands-on experience designing normalized relational schemas for complex real-world workflows and securing API routes with signed JWTs and refresh tokens.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20LUX%20Dental"
    },
    {
      id: "supportai",
      title: "SupportAi",
      category: "GraphRAG Platform",
      tagline: "Enterprise conversational AI platform combining vector search with knowledge graphs.",
      summary: "An advanced retrieval system designed to eliminate context hallucinations by augmenting dense vector similarity with explicit entity-relationship graphs.",
      problem: "Standard naive RAG breaks down on multi-hop questions across complex technical documentation because vector similarity misses indirect entity relationships.",
      solution: "Built a hybrid GraphRAG retrieval pipeline that maps structured knowledge graphs alongside vector embeddings, retrieving verifiable citations for every generated answer.",
      myRole: "Engineered the vector indexing pipeline, graph traversal logic, LangGraph iterative reasoning loop, and FastAPI streaming API.",
      architectureHighlights: [
        "Hybrid retrieval combining dense pgvector embeddings with entity relationship graph traversal",
        "LangGraph stateful workflow managing query decomposition, retrieval self-checking, and synthesis",
        "Citation grounding engine mapping every claim directly back to source document chunks",
        "FastAPI asynchronous backend streaming response tokens via Server-Sent Events (SSE)"
      ],
      technicalDecisions: [
        {
          decision: "Why Graph-Augmented RAG over Pure Vector Search?",
          reason: "Vectors capture semantic similarity but struggle with multi-hop relationships (e.g. 'Which warranty applies to equipment installed under contract X?'). Graphs provide deterministic relational paths."
        },
        {
          decision: "Why Server-Sent Events (SSE)?",
          reason: "SSE provides lightweight unidirectional streaming for generative AI tokens without the WebSocket overhead of bidirectional handshake management."
        }
      ],
      engineeringFacts: [
        "Hybrid vector + graph retrieval architecture",
        "Citation-grounded synthesis with chunk references",
        "Streaming token generation via SSE",
        "Multi-step query decomposition with LangGraph"
      ],
      whatILearned: "Deepened practical understanding of embedding spaces, chunking boundary strategies, entity extraction pipelines, and hallucination reduction techniques.",
      techStack: ["Python", "FastAPI", "LangGraph", "pgvector", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20SupportAi"
    }
  ],

  secondaryProjects: [
    {
      title: "LangGraph Multi-Agent Research Swarm",
      category: "AI Agentic Workflow",
      description: "A collaborative state graph of specialized agents (Searcher, Synthesizer, Fact-Checker) orchestrating multi-step research reports.",
      stack: ["Python", "LangGraph", "Tavily API", "FastAPI"]
    },
    {
      title: "High-Throughput Task Broker",
      category: "Distributed Systems",
      description: "Asynchronous task queue with exponential backoff retries, delayed executions, and dead-letter queue monitoring.",
      stack: ["Node.js", "Redis", "Docker", "TypeScript"]
    },
    {
      title: "Semantic Document Chunking Pipeline",
      category: "Data & Retrieval",
      description: "Document parsing engine extracting structural hierarchies from PDFs and markdown with token-aware chunking for RAG pipelines.",
      stack: ["Python", "pgvector", "FastAPI", "PyMuPDF"]
    }
  ],

  techStack: {
    coreDaily: ["Python", "React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    categories: [
      {
        name: "AI & Intelligence",
        skills: ["Python", "LangGraph", "LangChain", "RAG & GraphRAG", "LLMs", "Embeddings", "Tool Calling"]
      },
      {
        name: "Backend & Systems",
        skills: ["FastAPI", "Node.js", "Express", "REST APIs", "Webhooks Architecture", "Async Queues"]
      },
      {
        name: "Frontend & UI",
        skills: ["React", "Vite", "Tailwind CSS", "JavaScript (ESNext)", "Responsive Design"]
      },
      {
        name: "Data & Cloud",
        skills: ["PostgreSQL", "pgvector", "Redis", "Docker", "Git / GitHub", "Linux"]
      }
    ]
  },

  experienceTimeline: [
    {
      period: "2024 — Present",
      role: "Software Engineering Student (Engineering Cycle)",
      organization: "ISIMS — Institut Supérieur d'Informatique et de Multimédia de Sfax",
      location: "Sfax, Tunisia",
      description: "Enrolled in the Software Engineering cycle. Deepening formal foundations in distributed software architecture, advanced algorithmics, database systems, and operating system internals.",
      points: [
        "Core study: Distributed Systems, Software Design Patterns, Database Engineering",
        "Active builder participating in technical workshops and engineering initiatives"
      ]
    },
    {
      period: "2023 — Present",
      role: "AI & Full-Stack Product Builder",
      organization: "Independent Software Products",
      location: "Tunisia / Remote",
      description: "Designing, building, and deploying real commercial products from idea to architecture and code.",
      points: [
        "Autoreply: Engineered AI sales automation handling real-time Meta webhooks and catalog tool calling",
        "LUX Dental: Built healthcare SaaS with multi-chair agenda, RBAC, and relational audit logging",
        "SupportAi: Architected GraphRAG platform solving multi-hop retrieval with citation-grounded synthesis"
      ]
    }
  ],

  beyondCode: {
    currentlyLearning: ["Web Security & Auth", "AI Agent Swarms", "Distributed Cloud Architecture"],
    location: "Sfax, Tunisia (Open to Remote Worldwide)",
    focus: "Shipping real products instead of tutorial clones"
  }
};
