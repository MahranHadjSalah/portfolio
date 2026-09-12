export const portfolioData = {
  personal: {
    name: "Mahran Hadj Salah",
    mainTitle: "Software Engineering Student · AI Engineer · Full-Stack Developer",
    shortTagline: "Building intelligent software products from idea to deployment.",
    description: "I'm a Software Engineering student at ISIMS (Université de Sfax), focused on AI engineering, full-stack development and backend systems. I build real-world products combining AI agents, RAG/GraphRAG, automation and modern SaaS architecture.",
    institution: "ISIMS — Université de Sfax",
    location: "Sfax, Tunisia",
    availability: "Available for Software Engineering & AI Internships",
    workPreference: "Remote (Worldwide) · On-site / Hybrid (Tunisia)",
    timezone: "GMT+1 (Tunis)",
    email: "mahranhadjsalah56@gmail.com",
    phone: "+216 56 187 082",
    phoneRaw: "21656187082",
    whatsapp: "https://wa.me/21656187082",
    github: "https://github.com/MahranHadjSalah",
    linkedin: "https://www.linkedin.com/in/mahran-hadj-salah-4b98bb393/",
    
    // Core Builder Identity
    builderCredo: {
      statement: "I don't just study software engineering. I use it to build products.",
      subtext: "From AI sales automation and clinical SaaS to enterprise GraphRAG systems."
    },

    specialties: [
      "AI Engineering",
      "AI Agents",
      "GraphRAG",
      "Full-Stack",
      "Backend",
      "SaaS"
    ],

    // Verifiable & Honest Metrics
    honestStats: [
      { value: "03", label: "Major Products Built", note: "Autoreply, LUX Dental, SupportAi" },
      { value: "02", label: "SaaS Platforms", note: "Cloud Multi-Tenant Systems" },
      { value: "01", label: "Enterprise AI Internship", note: "Hybrid GraphRAG Research & Build" },
      { value: "01", label: "Engineering Degree in Progress", note: "ISIMS — Université de Sfax" }
    ],

    bio: [
      "I'm a Software Engineering student at ISIMS — Université de Sfax, focused on building AI-powered software and production full-stack systems.",
      "My work sits at the intersection of software engineering and applied AI. I enjoy turning ideas into complete products — from normalized database models and asynchronous queues to AI agents, hybrid retrieval pipelines, and responsive interfaces.",
      "I believe the best way to understand software engineering is to ship real products that solve real friction."
    ]
  },

  // From Idea -> Product Lifecycle
  productLifecycle: {
    title: "From idea → product",
    motto: "I enjoy working across the entire product lifecycle.",
    description: "I build complete software systems from the ground up rather than only writing isolated features.",
    steps: [
      { num: "01", title: "Idea", desc: "Scoping user friction & defining value propositions" },
      { num: "02", title: "Product Design", desc: "Information architecture & interface usability" },
      { num: "03", title: "Architecture", desc: "Data schemas, API boundaries & async workflows" },
      { num: "04", title: "Development", desc: "Type-safe services, reactive components & APIs" },
      { num: "05", title: "AI Integration", desc: "LangGraph state machines, pgvector & RAG" },
      { num: "06", title: "Testing", desc: "Rate limits, error boundaries & retrieval validation" },
      { num: "07", title: "Deployment", desc: "Docker containerization & production monitoring" }
    ]
  },

  // Flagship Projects — Personal Identity
  featuredProjects: [
    {
      id: "autoreply",
      title: "Autoreply",
      badge: "Founder · AI / Full-Stack Engineer",
      role: "Founder · Full-Stack / AI Engineer",
      status: "Building / Product Development",
      category: "AI Sales Automation",
      tagline: "AI sales automation platform for Facebook & Instagram merchants.",
      summary: "Intercepts social customer inquiries via Meta webhooks, classifies purchase intent in real time, queries live product catalogs, and automates order checkout flows.",
      contextNote: "Status: Building / Product Development",
      
      // What I Built checklist
      whatIBuilt: [
        "AI-powered customer conversations with multi-turn memory",
        "Product and inventory retrieval via tool-calling agents",
        "Meta webhook integration with 200ms ingest acknowledgement",
        "Automated order workflows and direct checkout link generation",
        "Conversation state management via LangGraph state machines",
        "Redis-based asynchronous processing and rate limit protection",
        "Multi-tenant SaaS architecture with PostgreSQL persistence"
      ],

      problem: "Social e-commerce merchants lose high-intent buyers during off-hours because manual DM responses take hours, prompting buyers to turn to competitors.",
      solution: "Engineered an event-driven engine that processes Meta webhooks, routes conversation state through an intent classifier, queries dynamic inventory, and synthesizes answers with checkout links.",
      myRole: "Sole founder and engineer: built the FastAPI webhook service, Redis asynchronous queue, LangGraph intent agent, catalog search, and merchant management UI.",
      
      architectureHighlights: [
        "FastAPI webhook ingest layer acknowledging Meta webhooks under 200ms to eliminate duplicate retries",
        "Redis task queue with token-bucket rate limiting to respect Meta Graph API quotas",
        "LangGraph state machine routing inquiries between product queries and human handoff",
        "PostgreSQL relational schema maintaining conversation logs, tenant states, and purchase funnels"
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
        "Automated catalog queries & checkout links",
        "Full Meta Graph API webhook compliance"
      ],

      whatILearned: "Learned how to handle high-concurrency webhook bursts, implement distributed idempotency keys in Redis, and manage LLM token budgets effectively.",
      techStack: ["FastAPI", "Python", "LangGraph", "Redis", "PostgreSQL", "React", "Meta Graph API"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20Autoreply"
    },
    {
      id: "lux-dental",
      title: "LUX Dental",
      badge: "SaaS · Full-Stack · Healthcare",
      role: "Product Builder · Full-Stack Engineer",
      status: "Production Architecture",
      category: "Dental Practice Management SaaS",
      tagline: "A cloud-based platform designed to digitize dental-office workflows, from appointments and patient records to odontograms, reminders and invoicing.",
      summary: "A cloud-based practice management SaaS engineered to digitize dental office operations, featuring multi-chair scheduling, encrypted patient dossiers, interactive tooth charting, and automated communications.",
      contextNote: "Built for a real-world dental workflow",

      // My Contribution checklist
      whatIBuilt: [
        "Full-stack architecture from relational model to deployment",
        "React interface with optimistic calendar scheduling",
        "REST API with granular role-based access control (RBAC)",
        "PostgreSQL data model with audit logging and encryption",
        "Role-based access control (Practitioner, Assistant, Receptionist)",
        "Appointment management with conflict prevention",
        "Patient management & digital medical records",
        "Dental charting (interactive visual odontogram)",
        "Automated reminders for appointment confirmations",
        "Invoicing, treatment tracking & payment receipts",
        "Admin dashboard for clinic metrics and chair utilization"
      ],

      problem: "Independent dental clinics often rely on fragmented paper records or outdated desktop software, resulting in missed appointments, billing friction, and poor record accessibility.",
      solution: "Developed a secure web SaaS suite with role-based access control (RBAC), multi-chair agenda synchronization, patient record tracking, and automated reminder workflows.",
      myRole: "Product builder and full-stack engineer: designed the normalized PostgreSQL schema, coded the Express REST API, developed the reactive React frontend, and containerized the system.",
      
      architectureHighlights: [
        "React frontend with optimistic schedule updates and reactive multi-chair calendar views",
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
      techStack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Docker", "Tailwind CSS"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20LUX%20Dental"
    },
    {
      id: "supportai",
      title: "SupportAi",
      badge: "AI Engineering Internship · GraphRAG",
      role: "AI Engineering Intern",
      status: "Internship Deliverable",
      category: "Enterprise Conversational AI",
      tagline: "An enterprise conversational AI platform combining vector retrieval and knowledge graphs to provide grounded answers from validated company knowledge.",
      summary: "An enterprise retrieval-augmented generation engine engineered to eliminate hallucinations by augmenting vector similarity search with explicit entity-relationship knowledge graphs.",
      contextNote: "Hybrid Vector + Knowledge Graph RAG",

      // SupportAi Architectural Flow
      architectureFlow: [
        { step: "User Query", desc: "Natural language query input" },
        { step: "Intent / Query Analysis", desc: "Decomposition into semantic entities" },
        { step: "Hybrid Retrieval", desc: "Dense Vector Search (pgvector) + Knowledge Graph Traversal" },
        { step: "Context Validation", desc: "Chunk verification & hallucination reduction" },
        { step: "LLM Response", desc: "Streaming answer grounded with source citations" }
      ],

      // Highlights
      whatIBuilt: [
        "LangGraph stateful workflow for iterative query reasoning",
        "GraphRAG retrieval engine combining dense vectors with graph relations",
        "PostgreSQL / pgvector dense embeddings storage & indexing",
        "Knowledge Graph entity-relationship schema",
        "FastAPI asynchronous backend with high concurrency",
        "Redis caching layer for frequent queries and graph nodes",
        "SSE streaming for real-time token delivery",
        "Human validation checks & citation grounding references",
        "Multi-tenant architecture isolating corporate knowledge bases"
      ],

      problem: "Standard vector RAG breaks down on multi-hop questions across complex corporate documentation because vector similarity misses indirect entity relationships.",
      solution: "Built a hybrid GraphRAG retrieval pipeline that maps structured knowledge graphs alongside vector embeddings, retrieving verifiable citations for every generated answer.",
      myRole: "AI Engineering Intern: engineered the vector indexing pipeline, graph traversal logic, LangGraph iterative reasoning loop, and FastAPI streaming API.",
      
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

  // My Engineering Journey (Chronological Milestones)
  engineeringJourney: [
    {
      year: "2023",
      milestone: "Started Computer Science & Multimedia",
      organization: "ISIMS — Université de Sfax",
      details: "Built strong foundations in algorithms, data structures, relational databases, and modern web application development."
    },
    {
      year: "2025",
      milestone: "Entered the Software Engineering Cycle",
      organization: "ISIMS — Université de Sfax",
      details: "Earned admission to the competitive National Engineering Diploma program, specializing in advanced software architecture, distributed systems, and backend engineering."
    },
    {
      year: "2025 — 2026",
      milestone: "Built AI & Full-Stack Products",
      organization: "Independent Products & Internship",
      details: "Architected and deployed Autoreply (AI Sales Automation), LUX Dental (Clinical SaaS), and SupportAi (Enterprise GraphRAG platform during AI Engineering internship)."
    },
    {
      year: "2026",
      milestone: "Focus on AI Engineering, Architecture & Security",
      organization: "Current Horizon",
      details: "Deepening practical expertise in autonomous AI agents, GraphRAG architectures, production systems design, and application web security."
    }
  ],

  // Currently Learning Roadmap
  currentlyLearning: [
    {
      topic: "AI Agents",
      status: "Building",
      details: "State persistence, tool-use loops, human-in-the-loop triggers with LangGraph"
    },
    {
      topic: "Advanced RAG / GraphRAG",
      status: "Deepening",
      details: "Hybrid dense-sparse retrieval, knowledge graph traversal, citation verification"
    },
    {
      topic: "Web Security",
      status: "Exploring",
      details: "PortSwigger Web Security Academy, OWASP Top 10, JWT hardening, authorization flaws"
    },
    {
      topic: "Cloud & Deployment",
      status: "Building",
      details: "Dockerized microservices, reverse proxies, CI/CD routines, runtime telemetry"
    },
    {
      topic: "Software Architecture",
      status: "Deepening",
      details: "Distributed systems patterns, event-driven backends, database indexing strategies"
    }
  ],

  // Engineering Interests
  engineeringInterests: [
    "AI Engineering",
    "Software Architecture",
    "Backend Systems",
    "Cybersecurity",
    "Cloud Infrastructure",
    "SaaS Development"
  ],

  securityFocusNote: "Additional technical interest: Application Security (practicing via PortSwigger Web Security Academy).",

  // Technologies I Use in Real Projects
  realProjectTech: {
    title: "Technologies I use in real projects",
    subtitle: "A proven, practical stack used to build and deploy real products — not arbitrary proficiency scores.",
    proofNote: "Used across Autoreply, LUX Dental and SupportAi",
    groups: [
      {
        category: "AI",
        items: ["Python", "LangGraph", "LangChain", "LLMs", "RAG", "GraphRAG"]
      },
      {
        category: "Backend",
        items: ["FastAPI", "Node.js", "Express", "REST", "Webhooks"]
      },
      {
        category: "Frontend",
        items: ["React", "Vite", "JavaScript", "Tailwind CSS"]
      },
      {
        category: "Data",
        items: ["PostgreSQL", "pgvector", "Redis"]
      },
      {
        category: "DevOps",
        items: ["Docker", "Git", "GitHub", "Linux"]
      }
    ]
  },

  // Featured Engineering Experiments
  engineeringExperiments: [
    {
      title: "LangGraph Multi-Agent Research Swarm",
      category: "AI Agentic Workflow",
      description: "A collaborative state graph of specialized agents (Researcher → Fact Checker → Writer) orchestrating multi-step research reports.",
      stack: ["Python", "LangGraph", "Tavily API", "FastAPI"]
    },
    {
      title: "Redis Task Broker",
      category: "Distributed Systems",
      description: "Asynchronous task broker featuring delayed jobs, exponential backoff retries, and dead-letter queue monitoring.",
      stack: ["Node.js", "Redis", "Docker", "TypeScript"]
    },
    {
      title: "Document Processing Pipeline",
      category: "Data & Retrieval",
      description: "Document ingestion pipeline parsing PDFs and DOCX files into structural chunks with vector embeddings for RAG search.",
      stack: ["Python", "pgvector", "FastAPI", "PyMuPDF"]
    }
  ],

  // Conversion-Oriented Section
  whatImLookingFor: {
    title: "Currently Looking For",
    opportunities: [
      "Software Engineering Internships",
      "AI Engineering Internships",
      "Backend / Full-Stack Opportunities",
      "AI Product Development"
    ],
    note: "Particularly interested in teams working on AI products, intelligent automation, SaaS, and backend systems."
  }
};
