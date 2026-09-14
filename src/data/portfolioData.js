export const portfolioData = {
  personal: {
    name: "Mahran Hadj Salah",
    mainTitle: "Software Engineering Student · AI Engineer · Full-Stack Developer",
    shortTagline: "Software Engineering student specializing in AI engineering and intelligent agents, with a focus on building AI-powered products, SaaS platforms, and full-stack systems that turn ideas into real-world solutions.",
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

    languages: [
      { language: "Arabic", level: "Native", note: "Mother tongue" },
      { language: "French", level: "Fluent", note: "Written & spoken — professional level" },
      { language: "English", level: "Intermediate", note: "Technical reading, documentation & communication" }
    ],

    // Core Engineering Capabilities & Metrics
    honestStats: [
      { value: "3+", label: "Production Systems", note: "Shipped & deployed" },
      { value: "AI", label: "Agentic & RAG Systems", note: "LangGraph & pgvector" },
      { value: "Cloud", label: "Cloud Infrastructure", note: "Docker, Linux & CI/CD" },
      { value: "SaaS", label: "Full-Stack Delivery", note: "End-to-end products" }
    ],

    bio: [
      "I'm a Software Engineering student at ISIMS — Université de Sfax, focused on building AI-powered software and production full-stack systems.",
      "My work sits at the intersection of software engineering and applied AI. I enjoy turning ideas into complete products — from normalized database models and asynchronous queues to AI agents, hybrid retrieval pipelines, and responsive interfaces.",
      "I believe the best way to understand software engineering is to ship real products that solve real friction."
    ]
  },

  // Focus Areas / What I Build
  whatIBuild: [
    {
      id: "ai-products",
      title: "AI-Powered Products",
      description: "AI agents, LLM applications, RAG systems, and intelligent workflows grounded in real data.",
      technologies: ["LangGraph", "LangChain", "RAG & GraphRAG", "Embeddings", "FastAPI"]
    },
    {
      id: "saas-platforms",
      title: "SaaS Platforms",
      description: "Multi-tenant cloud applications with authentication, RBAC, relational schemas, and structured business workflows.",
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
        "PostgreSQL relational schema maintaining conversation logs, tenant states, and purchase funnels",
        "Production infrastructure deployed on Hetzner VPS with Nginx wildcard reverse proxy and automated Certbot SSL"
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
      techStack: ["FastAPI", "Python", "LangChain", "FAISS", "Hetzner", "Nginx", "Meta Graph API", "React"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://autoreply.online/",
      demoUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20Autoreply"
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
    },
    {
      id: "altivox",
      title: "AltiVox",
      badge: "Enterprise AI Internship · PFE",
      role: "AI Engineering Intern · Full-Stack",
      status: "Production Architecture",
      category: "Enterprise GraphRAG Support SaaS",
      tagline: "Intelligence without noise. Answers grounded exclusively in validated enterprise knowledge.",
      summary: "A multi-tenant enterprise customer support SaaS built on GraphRAG architecture, featuring role-tailored portals (Customer, Manager, Admin), dynamic LLM model selection (Llama 3.1, Mistral, Qwen 2.5), and automated anti-hallucination escalation.",
      contextNote: "Multi-Tenant Enterprise GraphRAG SaaS",

      // Architectural Flow
      architectureFlow: [
        { step: "User Query", desc: "Customer question received via Chat Widget" },
        { step: "Ensemble Retrieval", desc: "Weighted Reciprocal Rank Fusion: pgvector (60%) + Neo4j (40%)" },
        { step: "Confidence Scoring", desc: "Verification against Manager-validated knowledge boundaries" },
        { step: "Dynamic Model Inference", desc: "Manager-selected LLM (Llama 3.1 / Mistral / Qwen 2.5 via HF API)" },
        { step: "Escalation Gate", desc: "Low-confidence fallback triggers human manager resolution" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Multi-tenant SaaS architecture serving Customer, Manager, and Admin portals",
        "Hybrid GraphRAG retrieval combining PostgreSQL (pgvector) and Neo4j entity relationships",
        "Dynamic model switcher allowing managers to select Llama 3.1, Mistral, or Qwen 2.5",
        "LLM benchmarking suite evaluating hallucination rates, ROUGE scores, and token throughput",
        "Zero-hallucination escalation pipeline auto-routing low-confidence questions to managers",
        "7-stage document ingestion pipeline converting Excel/PDF docs into semantic vector chunks",
        "Redis-backed session conversation history ensuring persistent multi-turn memory",
        "FastAPI asynchronous backend with Docker Compose multi-service orchestration"
      ],

      problem: "Enterprise customer service bots frequently hallucinate inaccurate policies or outdated company information, and standard vector search fails to resolve multi-hop relational dependencies between teams, products, and contracts.",
      solution: "Engineered AltiVox with a dual PostgreSQL (pgvector) + Neo4j GraphRAG pipeline and strict anti-hallucination confidence gates. Any query falling outside validated knowledge is automatically escalated to a human manager.",
      myRole: "AI Engineering Intern: architected the hybrid retrieval pipeline (pgvector + Neo4j), coded the FastAPI backend services, developed the manager model-benchmarking interface, and containerized the multi-service stack with Docker.",

      architectureHighlights: [
        "Separation of data storage: PostgreSQL + pgvector stores content & embeddings, while Neo4j stores relationship graphs",
        "EnsembleRetriever combining dense vector search and knowledge graph traversal with reciprocal rank fusion",
        "Dynamic LLM selection from Manager Portal allowing instant switching between Llama 3.1, Mistral, and Qwen 2.5",
        "Deterministic escalation pipeline assembled in FastAPI to notify managers of ungrounded customer questions"
      ],

      technicalDecisions: [
        {
          decision: "Why decouple content in PostgreSQL from relationships in Neo4j?",
          reason: "PostgreSQL with pgvector excels at storing text blobs and high-dimensional vector similarity, while Neo4j specializes strictly in relationship traversal. Keeping raw text out of Neo4j keeps graph indexing fast and lightweight."
        },
        {
          decision: "Why dynamic LLM selection for Managers?",
          reason: "Different enterprise departments have varying latency and reasoning priorities. Benchmarking informs managers (hallucination rate, tokens/sec, ROUGE) so they can choose the optimal model for their use case."
        }
      ],

      engineeringFacts: [
        "Ensemble retrieval weighting pgvector (60%) and Neo4j (40%)",
        "Dynamic multi-model runtime (Llama 3.1, Mistral, Qwen 2.5)",
        "3 dedicated role portals: Customer, Manager, and Admin",
        "Automated human escalation for zero ungrounded responses"
      ],

      whatILearned: "Mastered hybrid retrieval mechanics combining dense embeddings with graph databases, fine-tuned retrieval confidence thresholds to eliminate hallucinations, and built multi-tenant isolation patterns.",
      techStack: ["FastAPI", "Python", "Neo4j", "pgvector", "PostgreSQL", "LangChain", "Docker", "React"],
      githubUrl: "https://github.com/MahranHadjSalah",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20AltiVox"
    },
    {
      id: "smart-finance-analyzer",
      title: "SmartFinanceAnalyzer",
      badge: "Full-Stack AI · FinTech",
      role: "Full-Stack AI Engineer",
      status: "Production Prototype",
      category: "AI Financial Health Diagnostics & Analytics",
      tagline: "AI-powered corporate financial health diagnostics, risk evaluation, CSV bulk import, and automated PDF reporting.",
      summary: "A full-stack corporate financial analytics platform that aggregates balance sheets, revenues, and expenditures to generate real-time AI financial health scores (0–100), automated solvency/liquidity risk evaluations, and executive PDF reports powered by Google Gemini.",
      contextNote: "Full-Stack Financial Health & Risk SaaS",

      // Architectural Flow
      architectureFlow: [
        { step: "Data Ingestion", desc: "Bulk CSV statement upload or manual accounting balance entry" },
        { step: "Metric Engine", desc: "Deterministic calculations of Liquidity, Profitability, and Solvency ratios" },
        { step: "Gemini AI Diagnostics", desc: "LLM pattern analysis detecting cash-flow anomalies & debt surges" },
        { step: "Risk Action Planning", desc: "Prioritized recommendations with projected impact & remediation timeframe" },
        { step: "Executive Reporting", desc: "Interactive Recharts visualizer & one-click PDF export via PDFKit" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Full-stack analytics architecture with React 18, TypeScript, Node.js, and PostgreSQL",
        "Deterministic financial diagnostic engine evaluating Liquidity, Profitability, and Solvency",
        "Google Gemini AI integration generating risk assessments and strategic action plans",
        "Bulk CSV file ingestion with Multer, CSV-Parser, and automated column mapping",
        "Automated executive-ready PDF report generation engine using PDFKit",
        "Interactive financial charting suite powered by Recharts (trends, donuts, ratio cards)",
        "Secure JWT authentication and salted bcrypt password protection with RBAC"
      ],

      problem: "Small-to-medium businesses struggle to diagnose financial warning signs early due to fragmented spreadsheets and the high cost of external financial consultants, leading to preventable cash-flow crises.",
      solution: "Engineered an end-to-end financial intelligence platform combining deterministic ratio computations with Google Gemini AI analysis, translating complex accounting data into actionable health scores, risk detections, and executive PDF summaries.",
      myRole: "Architect and full-stack engineer: designed the PostgreSQL schema, built the Express REST API and CSV parser, integrated Google Gemini generative AI, developed the React TypeScript frontend, and built the PDFKit generation service.",

      architectureHighlights: [
        "Dual-layer diagnostic: deterministic mathematical ratios combined with Gemini generative reasoning",
        "PostgreSQL relational database with normalized schema for company profiles, records, and historical analyses",
        "Streaming CSV processing handling bulk transaction statements without memory spikes",
        "PDFKit document generator creating branded executive reports directly on the server"
      ],

      technicalDecisions: [
        {
          decision: "Why combine deterministic formulas with LLM reasoning?",
          reason: "Financial metrics (current ratio, debt-to-equity) require exact mathematical precision where LLMs can hallucinate calculations. Computing exact figures in code and feeding them to Gemini for qualitative risk synthesis guarantees 100% numerical accuracy."
        },
        {
          decision: "Why PDFKit over client-side HTML print?",
          reason: "Server-side PDF generation ensures consistent formatting across operating systems and browsers, enabling automated background report generation and email distribution."
        }
      ],

      engineeringFacts: [
        "Comprehensive 0–100 automated financial health scoring",
        "Multi-ratio solvency, liquidity, and debt evaluation",
        "Google Gemini API risk synthesis & recommendations",
        "Server-side PDFKit executive report compilation"
      ],

      whatILearned: "Deepened understanding of corporate financial accounting principles, mastered hybrid deterministic + LLM analytical pipelines, and gained experience with server-side document synthesis.",
      techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Google Gemini", "Tailwind CSS", "Recharts"],
      githubUrl: "https://github.com/MahranHadjSalah/Smart-Finance-Analyzer",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20SmartFinanceAnalyzer"
    },
    {
      id: "senior-voice",
      title: "SeniorVoice",
      badge: "Hackathon 38 Explorers · Voice AI",
      role: "AI & Full-Stack Engineer",
      status: "Hackathon Deliverable",
      category: "Multimodal Bilingual Voice Assistant",
      tagline: "Accessible bilingual voice assistant designed specifically for senior citizens in French and Tunisian Darija.",
      summary: "An accessible speech-driven assistant web application tailored for elderly individuals, enabling natural voice interactions in French and Tunisian Arabic (Darija) for emergency SOS alerts, daily medication schedules, agenda reminders, and loved-ones calling with speech synthesis.",
      contextNote: "Multimodal Tunisian Darija & French Voice Assistant",

      // Architectural Flow
      architectureFlow: [
        { step: "Audio Streaming", desc: "Browser Web Audio recording captured as WebM and converted via FFmpeg" },
        { step: "Whisper STT", desc: "OpenAI Whisper model fine-prompted for French and Tunisian Darija vocabulary" },
        { step: "Bilingual NLP Engine", desc: "Intent classification and entity extraction for dialectal phrasing" },
        { step: "Action Engine", desc: "Dispatches SOS triggers, medication tracking, agendas, and contact dialer" },
        { step: "Accessible Feedback", desc: "High-contrast tablet UI updates + Web Speech API (TTS) audio confirmations" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Bilingual voice assistant pipeline processing French and Tunisian Darija speech commands",
        "Custom-prompted OpenAI Whisper speech-to-text integration with FFmpeg audio resampling",
        "Bilingual regex & NLP processor classifying emergency, medication, call, and reminder intents",
        "FastAPI backend handling voice ingest, intent execution, and state persistence in SQLite",
        "Emergency SOS alert system with quick-voice triggers and simulated family alerts",
        "Medication management engine tracking daily intake times (morning, noon, evening)",
        "Senior-accessible frontend with high contrast, large touch targets, and Web Speech API TTS"
      ],

      problem: "Elderly individuals, particularly in North Africa, face severe technological barriers with smartphone interfaces, compounded by voice assistants lacking comprehension of Tunisian Darija and mixed French code-switching.",
      solution: "Built SeniorVoice, an accessible multimodal voice interface combining Whisper STT prompted for dialectal phonetics with a bilingual NLP engine, allowing seniors to manage emergencies, medications, and calls using their mother tongue.",
      myRole: "AI and full-stack engineer: designed the audio conversion pipeline with FFmpeg, integrated OpenAI Whisper, engineered the bilingual Darija/French intent classifier in Python, and developed the high-contrast accessible React frontend.",

      architectureHighlights: [
        "Sub-second audio pipeline converting browser WebM to 16kHz mono WAV via FFmpeg",
        "Custom-conditioned Whisper STT prompts improving dialectal transcription accuracy for Tunisian Darija",
        "Stateful Action Engine in FastAPI triggering database updates and emergency dispatch routines",
        "Accessible tablet-first UI adhering to WCAG AAA contrast standards for visually impaired seniors"
      ],

      technicalDecisions: [
        {
          decision: "Why custom-conditioned prompts in Whisper for Darija?",
          reason: "Tunisian Darija mixes Arabic roots with French loanwords. Priming the Whisper decoder with bilingual contextual prompts significantly reduces Word Error Rate (WER) compared to unconditioned recognition."
        },
        {
          decision: "Why Web Speech API for TTS on the client side?",
          reason: "Client-side SpeechSynthesis eliminates round-trip audio bandwidth delay, allowing instant spoken confirmations even on low-bandwidth mobile connections."
        }
      ],

      engineeringFacts: [
        "Dual-language support: French and Tunisian Darija",
        "Instant SOS trigger with single-voice command",
        "Medication reminder schedule across 3 daily slots",
        "WCAG AAA high-contrast accessible interface"
      ],

      whatILearned: "Learned how to handle non-standard spoken dialect transcription, manage browser audio stream conversion with FFmpeg, and build human-centered interfaces for elderly users.",
      techStack: ["Python", "FastAPI", "OpenAI Whisper", "SQLite", "React", "Vite", "FFmpeg", "Web Speech API"],
      githubUrl: "https://github.com/MahranHadjSalah/senior-voice",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20SeniorVoice"
    },
    {
      id: "flutter-ecommerce",
      title: "Flutter E-Commerce UI Kit",
      badge: "Mobile App · Flutter & Dart",
      role: "Mobile Application Developer",
      status: "Production-Ready UI Kit",
      category: "Cross-Platform Mobile Application",
      tagline: "A modern, responsive, and feature-rich E-Commerce UI Kit built with Flutter for Android and iOS.",
      summary: "A complete commercial-grade mobile e-commerce application template built with Flutter and Dart, covering the entire retail journey from interactive onboarding and biometric auth to catalog search, multi-step checkout, and virtual wallet management with zero-latency shimmer skeletons.",
      contextNote: "End-to-End Cross-Platform Mobile Shopping System",

      // Architectural Flow
      architectureFlow: [
        { step: "Onboarding & Auth", desc: "Dynamic carousel walkthrough, login/signup, password recovery, and OTP verification" },
        { step: "Discovery & Catalog", desc: "Hero banners, category pills, flash sales timers, and filtered search engine" },
        { step: "Product Experience", desc: "Image gallery carousel, color/size config, customer reviews, and size guide modal" },
        { step: "Cart & Checkout", desc: "Live item tally, shipping address selector, payment method gateway, and order review" },
        { step: "Order & Wallet", desc: "Active order timeline tracker, delivered history, and virtual wallet balance manager" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Modular, cross-platform mobile application architecture built with Flutter 3.x and Dart",
        "Comprehensive 9-module user journey across 20+ production-grade mobile screens",
        "Custom shimmer skeleton loading system eliminating jarring blank loading screens",
        "Centralized named route generator (router.dart) with smooth animated transitions",
        "Decoupled data layer with strong DTO models ready for REST, GraphQL, or Firebase backend integration",
        "Dynamic typography and design system with Plus Jakarta Display and Grandis Extended fonts",
        "Virtual wallet and multi-payment card interface with transaction histories"
      ],

      problem: "Building commercial e-commerce apps from scratch often suffers from fragmented UI components, poor cross-platform consistency between iOS and Android, and abrupt loading states that degrade user conversion.",
      solution: "Engineered a production-ready, modular Flutter architecture featuring fluid animations, reusable design widgets, and custom skeleton loaders, providing a turnkey foundation for consumer shopping apps.",
      myRole: "Mobile application developer: architected the feature-first folder structure, developed the component library, built the routing engine, implemented custom skeleton animations, and validated cross-platform responsive scaling.",

      architectureHighlights: [
        "Feature-first directory organization separating screens, shared widgets, models, and themes",
        "Shimmer placeholder cards matching exact dimensions of banners, products, and order cards",
        "Centralized theme configuration with standardized spacing, border radiuses, and color palettes",
        "Container transform and fade motion transitions using Flutter's animations package"
      ],

      technicalDecisions: [
        {
          decision: "Why custom shimmer skeleton loaders over basic spinners?",
          reason: "Skeleton placeholders preserve layout stability, prevent cumulative layout shifts, and dramatically improve perceived performance on mobile networks."
        },
        {
          decision: "Why centralized named routes with route constants?",
          reason: "Decouples screen implementations from navigation triggers, simplifying deep-linking, push notification navigation, and route guard middleware."
        }
      ],

      engineeringFacts: [
        "20+ fully responsive screens across Android and iOS",
        "9 complete functional retail lifecycle modules",
        "Zero-shift shimmer skeleton loading architecture",
        "Decoupled model layer ready for any backend API"
      ],

      whatILearned: "Deepened mastery of Flutter widget lifecycles, advanced cross-platform responsive layout principles, state-driven UI animations, and clean mobile architectural design.",
      techStack: ["Flutter", "Dart", "Android", "iOS", "Material Design 3", "Animations", "SVG"],
      githubUrl: "https://github.com/MahranHadjSalah/E-commerce-Complete-Flutter-UI-master",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20Flutter%20E-Commerce"
    },
    {
      id: "hand-detectors",
      title: "AI Hand Vision & Gesture Studio",
      badge: "Real-Time AI · Computer Vision",
      role: "Computer Vision Engineer",
      status: "Working Application Suite",
      category: "Computer Vision & Interactive Gesture AI",
      tagline: "Real-time computer vision suite featuring cyberpunk neon tracking, 3D air canvas drawing, and gesture game AI.",
      summary: "An interactive computer vision suite powered by Google MediaPipe Tasks and OpenCV. Turns any standard webcam into a high-precision gesture controller featuring 21-point neon hand tracking with particle physics, pressure-sensitive 3D air canvas sketching, and an AI-powered Rock-Paper-Scissors-Lizard-Spock game.",
      contextNote: "Real-Time 3D Hand Tracking & Computer Vision Suite",

      // Architectural Flow
      architectureFlow: [
        { step: "Webcam Capture", desc: "Real-time 60 FPS BGR video stream acquisition via OpenCV" },
        { step: "3D Landmark Extraction", desc: "MediaPipe Vision Tasks detecting 21 3D hand landmarks per hand" },
        { step: "EMA Coordinate Smoothing", desc: "Exponential Moving Average filtering eliminating fingertip jitter" },
        { step: "Spatial Gesture Engine", desc: "Geometric trigonometry evaluating finger curls, pinch distances, and palm depth" },
        { step: "Cyberpunk Rendering", desc: "Gaussian glow skeleton overlay, dynamic particle emitters, and pyttsx3 voice synthesis" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Real-time multi-hand computer vision suite processing 60 FPS webcam video with MediaPipe & OpenCV",
        "Cyberpunk neon skeleton renderer with Gaussian bloom shaders and dynamic particle trails",
        "Exponential Moving Average (EMA) coordinate smoothing filter eliminating tracking jitter",
        "Air Studio Pro: 3D air-drawing canvas with depth-sensitive stroke dynamics (4px–30px)",
        "Smart gesture recognition system (Index Draw, Peace Hover, Open Palm Eraser, Fist Reset)",
        "Rock-Paper-Scissors-Lizard-Spock game with predictive probability engine and voice commentary",
        "Artwork export pipeline saving high-resolution vector-quality images from air sketches"
      ],

      problem: "Traditional webcam gesture detection suffers from noisy coordinate jitter, heavy CPU latency, and lack of intuitive spatial controls, making hands-free drawing and gesture interfaces frustrating to use.",
      solution: "Engineered an optimized real-time vision pipeline combining MediaPipe's lightweight 3D hand landmarker bundle with EMA temporal smoothing and depth-derived stroke dynamics, enabling ultra-responsive air drawing and gesture interactions.",
      myRole: "Computer vision engineer: implemented the MediaPipe Tasks pipeline, wrote the EMA jitter reduction filters, engineered the spatial gesture recognition logic, built the particle emitter physics, and integrated offline speech synthesis.",

      architectureHighlights: [
        "MediaPipe Vision Tasks pipeline tracking 21 3D spatial points with minimal CPU footprint",
        "Exponential Moving Average (EMA) filter smoothing landmark coordinates across consecutive video frames",
        "Depth-sensitive pen pressure calculated through real-time Euclidean distance between wrist and index MCP",
        "Predictive Markov-inspired AI engine analyzing opponent gesture frequency to counter moves"
      ],

      technicalDecisions: [
        {
          decision: "Why Exponential Moving Average (EMA) smoothing?",
          reason: "Raw vision landmark coordinates fluctuate by a few pixels each frame due to sensor noise. EMA filtering dampens high-frequency fluctuations while preserving instantaneous responsiveness for fluid writing."
        },
        {
          decision: "Why wrist-to-palm distance for stroke pressure?",
          reason: "Monocular webcams lack true depth sensors. Normalizing the distance between landmark 0 (wrist) and landmark 5 (index MCP) provides an accurate relative depth proxy to modulate brush thickness dynamically."
        }
      ],

      engineeringFacts: [
        "Real-time 60 FPS 21-point 3D hand landmark tracking",
        "Sub-10ms EMA coordinate smoothing latency",
        "5 interactive gesture states for canvas operations",
        "Offline text-to-speech feedback via pyttsx3"
      ],

      whatILearned: "Gained deep practical expertise in real-time computer vision pipelines, geometric spatial mathematics, landmark coordinate stabilization algorithms, and interactive human-computer interaction (HCI).",
      techStack: ["Python", "OpenCV", "MediaPipe Tasks", "NumPy", "pyttsx3", "Computer Vision"],
      githubUrl: "https://github.com/MahranHadjSalah/Hand-detectors",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20Hand%20Detectors"
    },
    {
      id: "university-absence",
      title: "University Attendance & Absence OS",
      badge: "Full-Stack SaaS · RBAC · Higher Ed",
      role: "Full-Stack Engineer",
      status: "Production Architecture",
      category: "Enterprise Academic Management Platform",
      tagline: "Role-based university attendance tracking platform connecting administration, faculty, and students in real time.",
      summary: "A full-stack academic operations platform that streamlines the student attendance lifecycle across higher education institutions, connecting administration, professors, and students with role-tailored portals, session roll-calls, justification processing, and attendance analytics.",
      contextNote: "Enterprise Academic Attendance Management Platform",

      // Architectural Flow
      architectureFlow: [
        { step: "Role-Guarded Access", desc: "JWT authenticated logins routing to Admin, Professor, or Student dashboards" },
        { step: "Academic Configuration", desc: "Admin maps departments, academic classes, modules, and professor assignments" },
        { step: "Session Scheduling", desc: "Professors schedule Cours, Travaux Dirigés (TD), or Travaux Pratiques (TP)" },
        { step: "Digital Roll-Call", desc: "Instant batch attendance recording with presence/absence toggles and justification motifs" },
        { step: "Attendance Analytics", desc: "Real-time student absence health indicator and module absence percentages" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Full-stack academic management system with React 18 frontend and Express.js REST API",
        "3 dedicated role-tailored dashboards: Administrator, Professor, and Student",
        "Relational database schema in SQLite3 with foreign key referential integrity",
        "Role-Based Access Control (RBAC) middleware verifying permissions for all endpoints",
        "Batch attendance roll-call registry allowing professors to record full classes in seconds",
        "Attendance justification workflow processing medical and authorized leave motifs",
        "Real-time attendance health metrics computing absence ratios per course and semester"
      ],

      problem: "Universities and academic faculties often rely on paper attendance sheets that are lost, manually tallied at the end of semesters, and lack real-time visibility for students at risk of academic elimination.",
      solution: "Engineered a centralized digital attendance platform providing instant digital roll-calls for professors, proactive absence tracking for students, and comprehensive compliance analytics for administration.",
      myRole: "Full-stack engineer: designed the relational schema, built the Express REST API with RBAC security guards, developed the React user interface, and implemented batch attendance marking handlers.",

      architectureHighlights: [
        "Granular RBAC middleware inspecting signed JWT payloads before executing route logic",
        "Relational integrity constraints linking students, enrollments, professors, modules, and absence entries",
        "Batch attendance recording endpoint minimizing database roundtrips during live lecture roll-calls",
        "Modular component architecture with shared state managed via React Context API"
      ],

      technicalDecisions: [
        {
          decision: "Why batch attendance submission via single POST?",
          reason: "A lecture can have 100+ students. Firing individual HTTP requests per student causes network congestion. A single batch payload processed in a database transaction executes atomically in under 30ms."
        },
        {
          decision: "Why distinguish session types (Cours, TD, TP)?",
          reason: "Academic regulations enforce distinct absence thresholds for practical labs (TP) versus lectures. Tracking session taxonomy enables precise automated warnings when thresholds are breached."
        }
      ],

      engineeringFacts: [
        "3-tier RBAC architecture (Admin, Professor, Student)",
        "Atomic batch attendance submission for entire classes",
        "Session categorization across Cours, TD, and TP",
        "Automated student attendance percentage indicators"
      ],

      whatILearned: "Strengthened full-stack capabilities in role-based authorization design, relational foreign key modeling, transactional batch operations, and responsive dashboard UX.",
      techStack: ["React", "Node.js", "Express", "SQLite", "JWT", "bcryptjs", "CSS3 Modules"],
      githubUrl: "https://github.com/MahranHadjSalah/University-Absence-Management",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20University%20Absence"
    },
    {
      id: "attt-mobile",
      title: "ATTT Vehicle Inspection Booking",
      badge: "Mobile Web · UI/UX Engineering",
      role: "Frontend & UI/UX Engineer",
      status: "Production Prototype",
      category: "Public Sector Mobile Web Application",
      tagline: "Mobile-first vehicle technical inspection reservation application engineered strictly from Figma specifications.",
      summary: "A mobile-first reservation web application built for the Tunisian Land Transport Technical Agency (ATTT). Guides vehicle owners through a seamless multi-step booking process: vehicle registration lookup, technical service selection, owner details validation, and digital appointment confirmation receipts.",
      contextNote: "Public Sector Mobile Reservation & Inspection Application",

      // Architectural Flow
      architectureFlow: [
        { step: "Home & Initiation", desc: "Clean landing screen with vehicle registration trigger and quick actions" },
        { step: "Service Selection", desc: "Interactive cards for Visite Périodique, Constat, and Réception à Titre Isolé" },
        { step: "Vehicle Information", desc: "Tunisian license plate syntax formatting and chassis number validation" },
        { step: "Owner Form", desc: "Personal details, telephone contact, and center location selection" },
        { step: "Receipt Confirmation", desc: "Digital appointment summary receipt with booking barcode and return to home" }
      ],

      // What I Built checklist
      whatIBuilt: [
        "Mobile-first web application engineered strictly according to Figma UI/UX design specifications",
        "Multi-step booking wizard with state persistence across views (Accueil → Service → Formulaire → Confirmation)",
        "Tunisian license plate parser and validator formatting input in real time",
        "Interactive service selection cards with visual feedback and price transparency",
        "Persistent mobile bottom navigation bar enabling rapid access across all application states",
        "Responsive mobile layout styled with custom CSS variables and Plus Jakarta Sans typography",
        "Appointment summary and confirmation receipt with printable booking credentials"
      ],

      problem: "Citizens attempting to book mandatory vehicle safety inspections often encounter confusing legacy portals that fail on mobile phones, causing high drop-off rates and long phone queues.",
      solution: "Engineered a modern, responsive mobile web application adhering faithfully to modern Figma UI/UX guidelines, streamlining the inspection booking procedure down to under 2 minutes on any smartphone.",
      myRole: "Frontend and UI/UX engineer: translated Figma wireframes and design systems into modular React components, implemented the multi-step form validation engine, and crafted the responsive mobile styling.",

      architectureHighlights: [
        "Strict 390px mobile viewport optimization ensuring perfect rendering on iOS Safari and Android Chrome",
        "Stateful booking context preserving customer selections throughout the multi-screen flow",
        "Figma design system parity: exact hex colors (#1A56A0 primary, #22C55E accent), border radiuses, and shadows",
        "Zero third-party heavyweight UI libraries, keeping bundle size minimal for fast 3G/4G cellular loading"
      ],

      technicalDecisions: [
        {
          decision: "Why lightweight modular CSS over heavy component frameworks?",
          reason: "Public mobile web portals are frequently accessed on mid-range devices over cellular data. Eliminating heavy component dependencies keeps the first contentful paint (FCP) under 1 second."
        },
        {
          decision: "Why step-by-step progressive disclosure?",
          reason: "Breaking a complex government booking into single-focus screens (Service → Vehicle → Owner → Summary) reduces cognitive load and minimizes input mistakes."
        }
      ],

      engineeringFacts: [
        "100% fidelity to official Figma UI/UX design specs",
        "Mobile-first responsive architecture (390px base)",
        "5-stage guided reservation stepper flow",
        "Sub-1s First Contentful Paint on mobile connections"
      ],

      whatILearned: "Mastered precise Figma-to-code translation, mobile touch interaction design, stateful multi-step form architecture, and performance optimization for public-facing consumer applications.",
      techStack: ["React", "JavaScript", "CSS3", "Mobile Web", "UI/UX", "Figma Design", "Responsive Design"],
      githubUrl: "https://github.com/MahranHadjSalah/app_mobile",
      liveUrl: "https://wa.me/21656187082?text=Hi%20Mahran,%20I'd%20like%20a%20demo%20of%20ATTT%20Booking"
    }
  ],

  // Education (CV Data)
  education: [
    {
      degree: "Computer Engineering Degree — Software Engineering",
      institution: "ISIMS Sfax",
      period: "2025 – Present",
      description: "Engineering program focused on modern software engineering: design and modeling (UML, design patterns), mathematics & optimization, complex & certifying systems, advanced database management, embedded systems & advanced networking, and fundamentals of computer security. Strong emphasis on Agile/Scrum methodologies, professional communication, and digital culture."
    },
    {
      degree: "Integrated Preparatory Cycle — Computer Science & Multimedia",
      institution: "ISIMS Sfax",
      period: "2023 – 2025",
      description: "High-level scientific and technical program spanning 4 semesters (120 credits), designed to build strong foundations in computer science and applied mathematics. Curriculum covers structured and object-oriented programming (C, Python, Java), advanced algorithms, data structures and complexity theory, mathematics (algebra, analysis, probability, graph theory, formal logic), operating systems and networking (TCP/IP, network services), relational database design, computer architecture, web development, multimedia technologies, and data compression. Complemented by cross-disciplinary modules in technical English and professional communication."
    }
  ],

  // My Engineering Journey (Chronological Milestones)
  engineeringJourney: [
    {
      year: "2023 — 2025",
      milestone: "Cycle Préparatoire Intégré — CS & Multimedia",
      organization: "ISIMS — Université de Sfax",
      details: "120 ECTS · Advanced Math, Algorithmic Complexity, C/Python/Java, Systems & Networks"
    },
    {
      year: "2025 — Present",
      milestone: "National Software Engineering Degree Cycle",
      organization: "ISIMS — Université de Sfax",
      details: "Software Architecture, Design Patterns, Certifying Systems, Distributed Databases"
    },
    {
      year: "2025 — 2026",
      milestone: "Production Product Delivery (SaaS & AI)",
      organization: "Autoreply · LUX Dental · AltiVox · SeniorVoice",
      details: "Shipped Meta-integrated RAG, clinical dental SaaS, enterprise GraphRAG & Voice AI."
    },
    {
      year: "2026",
      milestone: "Advanced Systems Focus & Open to Internships",
      organization: "Autonomous Agents · GraphRAG · Security",
      details: "Focus on multi-agent workflows, citation-grounded retrieval, and application security."
    }
  ],

  // Currently Learning
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
      topic: "Cloud & Deployment",
      status: "Building",
      details: "Dockerized microservices, reverse proxies, CI/CD routines, runtime telemetry"
    },
    {
      topic: "Distributed Systems & Architecture",
      status: "Deepening",
      details: "Distributed systems patterns, event-driven backends, database indexing strategies"
    }
  ],

  // Engineering Interests
  engineeringInterests: [
    "Independent SaaS Development",
    "AI Agents & Automation",
    "n8n Workflows",
    "Competitive Programming",
    "Software Architecture",
    "Cloud & DevOps"
  ],

  securityFocusNote: "Additional technical interest: Application Security (practicing via PortSwigger Web Security Academy).",

  // Technologies I Use in Real Projects (Enriched from CV)
  realProjectTech: {
    title: "Technologies I use in real projects",
    subtitle: "A proven, practical stack used to build and deploy real products — not arbitrary proficiency scores.",
    proofNote: "Used across Autoreply, SeniorVoice, LUX Dental, AltiVox and SupportAi",
    groups: [
      {
        category: "Languages",
        items: ["Python", "JavaScript", "Java", "C", "SQL"]
      },
      {
        category: "AI, LLM & ML",
        items: [
          "LangGraph & LangChain",
          "RAG & FAISS",
          "Whisper (STT)",
          "Groq & Ollama",
          "Scikit-Learn (Pipelines)",
          "XGBoost & Random Forest",
          "GridSearchCV & Cross-Val"
        ]
      },
      {
        category: "Backend & API",
        items: ["FastAPI", "Node.js", "Express", "REST APIs", "Webhooks"]
      },
      {
        category: "Frontend",
        items: ["React", "Vite", "Tailwind CSS", "HTML5 / CSS3"]
      },
      {
        category: "DevOps & Cloud",
        items: ["Hetzner VPS", "Docker", "Nginx", "Certbot SSL", "GitHub Actions (CI/CD)", "Linux"]
      },
      {
        category: "Automation & Tools",
        items: ["n8n Workflows", "Meta Graph API", "Postman", "PostgreSQL", "Redis"]
      }
    ]
  },

  // Featured Engineering Experiments
  engineeringExperiments: [
    {
      title: "SeniorVoice — AI Voice Assistant",
      category: "Hackathon 38 Explorers · Multimodal AI",
      description: "Voice assistant for elderly Tunisian users managing Darija / French code-switching with Whisper (STT), LLM comprehension, and TTS synthesis.",
      stack: ["Whisper (STT)", "FastAPI", "React", "Python", "REST API"]
    },
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
      "DevOps",
      "AI Product Development"
    ],
    note: "Particularly interested in teams working on AI products, intelligent automation, SaaS, DevOps, and backend systems."
  }
};
