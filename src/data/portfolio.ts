export const portfolioData = {
  personal: {
    name: "Moh Bhargava",
    tagline: "AI/ML Builder · Computer Science & Mathematics Student",
    bio: `I'm a Computer Science and Mathematics dual-degree student at BITS Pilani, Hyderabad Campus. I build practical AI systems - from multi-agent workflows and RAG pipelines to tools that make complex work faster and more reliable. I also care deeply about thoughtful product design, photography, and powerlifting.`,
    location: "BITS Pilani, Hyderabad Campus",
    email: {
      formal: "mohbhargava04@gmail.com",
      informal: "mohbhargava04@gmail.com",
    },
    phone: "+91 8882480750",
    links: {
      github: "https://github.com/mohbhargava04",
      linkedin: "https://www.linkedin.com/in/moh-bhargava",
    },
  },

  education: [
    {
      institution: "BITS Pilani, Hyderabad Campus",
      degree: "MSc. Mathematics + B.E. Computer Science (Dual Degree)",
      period: "2024 – Present",
      detail:
        "Pursuing a dual degree with a focus on AI systems, algorithms, data structures, and practical software development.",
      grade: "CGPA: 7.72",
    },
    {
      institution: "The Vivekanand School, Narela, Delhi",
      degree: "Class XII – CBSE",
      period: "2022 – 2024",
      detail:
        "Completed senior secondary education with a focus on Science (PCM).",
      grade: "Percentage: 88.4%",
    },
    {
      institution: "Delhi Public School, Rohini, Delhi",
      degree: "Class X – CBSE",
      period: "Until 2022",
      detail:
        "Completed foundational schooling with strong academic performance across all subjects.",
      grade: "Percentage: 98.17%",
    },
  ],

  skills: {
    languages: ["Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
    frameworks: ["Next.js", "React", "FastAPI", "Streamlit", "LangChain", "LlamaIndex", "crewAI", "AutoGen"],
    tools: ["Git", "Ollama", "ChromaDB", "PostgreSQL", "Supabase", "PyMuPDF", "ReportLab", "Figma", "Linux"],
    areas: [
      "Agentic AI Systems",
      "RAG Pipelines",
      "Multi-Agent Orchestration",
      "Vector Search & Hybrid Retrieval",
      "Prompt Engineering",
      "Machine Learning & NLP",
      "Data Structures & Algorithms",
    ],
  },

  internship: {
    organisation: "SimpleWorks Solutions · SimpleCRM",
    role: "AI/ML Intern",
    period: "May 2026 – July 2026",
    intro: "Built production-oriented agentic AI systems across sales enablement, insurance support, and hiring automation - with an emphasis on grounded retrieval, orchestration, and useful outputs.",
    highlights: ["7-agent ingestion pipeline", "Direct RAG hot path", "85% query-routing accuracy", "~70% less screening time"],
  },

  internshipProjects: [
    {
      name: "Insurance Policy Assistant",
      kicker: "Agentic RAG · Insurance support",
      description: "A five-agent insurance-policy assistant that combines structured customer and policy lookup with contextual document retrieval.",
      detail: "Routes each query between database retrieval and RAG, detects ambiguous policy documents, asks clarifying questions, and returns grounded policy answers with conversational continuity.",
      tech: ["AutoGen", "LlamaIndex", "MySQL", "SQLAlchemy", "Streamlit"],
      metric: "~4 min → ~18 sec",
      metricLabel: "average policy-query resolution",
      github: null,
    },
    {
      name: "PitchBot",
      kicker: "Live B2B sales copilot",
      description: "A scalable AI copilot for B2B pitch calls, built around a deliberate split between quality-focused ingestion and latency-focused live retrieval.",
      detail: "A seven-agent AutoGen ingestion pipeline chunks, extracts, validates, cross-checks, and embeds facts. The live path bypasses orchestration entirely: classify → retrieve from ChromaDB → synthesize a grounded answer.",
      tech: ["AutoGen", "ChromaDB", "Ollama", "Llama 3.2", "Streamlit"],
      metric: "7 agents · 2 pipelines",
      metricLabel: "with a direct RAG hot path",
      github: "https://github.com/mohbhargava04/pitchbot",
    },
    {
      name: "Internship Application Screener",
      kicker: "ATS scoring · recruitment workflow",
      description: "A six-agent application-screening system that turns a job description and candidate materials into a transparent, structured evaluation.",
      detail: "Uses a two-stage conditional pipeline and a deterministic 10-field, 100-point ATS rubric. Job descriptions are split into Required, Preferred, and Responsibility sections before grounded match scoring and gap analysis.",
      tech: ["Multi-Agent AI", "ATS Scoring", "RAG", "Python", "Ollama"],
      metric: "~70% faster",
      metricLabel: "manual screening per applicant",
      github: "https://github.com/mohbhargava04/internship-screener-agent",
    },
    {
      name: "Job Application Agent",
      kicker: "Career workflow automation",
      description: "A seven-agent local-first system that turns a role and a résumé into a focused application package in one run.",
      detail: "Researches the role and company, identifies hiring patterns, tailors a résumé, drafts a cover letter and recruiter email, surfaces a gap report, and produces interview talking points.",
      tech: ["crewAI", "Ollama", "PyMuPDF", "Streamlit", "Serper"],
      metric: "2–3 hrs → under 5 min",
      metricLabel: "application preparation time",
      github: "https://github.com/mohbhargava04/job-application-agent",
    },
  ],

  independentProjects: [
    {
      name: "Codebase Documentation Agent",
      tagline: "AI Documentation in a Single Run",
      description:
        "A three-agent sequential pipeline that ingests any GitHub repository URL and produces a complete documentation suite with no manual documentation work.",
      problem:
        "Engineering teams lose time understanding unfamiliar codebases and keeping README files, architecture overviews, onboarding guides, and inline documentation current.",
      solution:
        "Built an AI pipeline using crewAI, GitPython, and AST analysis that generates a README, architecture overview, onboarding guide, and inline docstrings in under three minutes.",
      tech: ["Python", "crewAI", "GitPython", "AST", "Streamlit"],
      type: "Agentic AI System",
      status: "Completed",
      github: null,
      live: null,
    },
    {
      name: "ReFind",
      tagline: "Campus Peer-to-Peer Marketplace",
      description:
        "A centralized campus marketplace designed to replace fragmented communication channels like WhatsApp groups. Built as Frontend Developer and UI/UX Lead in a team of three.",
      problem:
        "College students relied on noisy, unorganised WhatsApp groups to buy and sell second-hand items, making it hard to find listings or connect with the right people.",
      solution:
        "A structured, searchable marketplace with a Dynamic Request Module — a 'two-sided' approach letting users post specific item needs, enabling sellers to meet existing demand proactively.",
      tech: ["Next.js", "HTML", "CSS", "Figma"],
      type: "Frontend Web App",
      status: "Completed",
      github: null,
      live: null,
    },
  ],

  leadership: [
    {
      role: "Captain",
      organisation: "Powerlifting Team, BPHC",
      period: "April 2026 – Present",
      description:
        "Leading the BITS Hyderabad Powerlifting Team; increased team participation by over 60%. Previously served as Vice-Captain (June 2025 – April 2026). Won 2 silver medals in consecutive years at Arena, the sports fest of BITS Hyderabad.",
    },
    {
      role: "Web Dev & Design OC",
      organisation: "ATMoS 2025, BPHC",
      period: "August 2025 – November 2025",
      description:
        "Designed the website, brochure, and merchandise for BITS Hyderabad's annual technical festival.",
    },
    {
      role: "Active Member",
      organisation: "SEDS, BITS Hyderabad",
      period: "August 2025 – Present",
      description:
        "Member of the Society for Engineering Design and Science chapter at BITS Hyderabad.",
    },
    {
      role: "Student Mentor",
      organisation: "SWMC – Student Welfare and Mentorship Committee, BPHC",
      period: "August 2025 – Present",
      description:
        "Mentoring junior students through their transition into BITS Pilani, offering academic guidance, campus navigation support, and personal mentorship.",
    },
    {
      role: "Member",
      organisation: "AUGSD – Academic Undergraduate Studies Division, BPHC",
      period: "August 2025 – Present",
      description:
        "Assisted with course registration processes, guiding students through academic procedures and ensuring a smooth enrolment experience each semester.",
    },
    {
      role: "Senior Photographer",
      organisation: "DoPY – Department of Photography, BPHC",
      period: "September 2024 – Present",
      description:
        "Capturing campus life, events, and fests as part of the official photography department at BITS Hyderabad.",
    },
    {
      role: "Member",
      organisation: "Embryo, BITS Hyderabad",
      period: "August 2024 – Present",
      description:
        "Involved in curating and inviting motivational speakers and industry leaders for talks and sessions at campus.",
    },
  ],

  sampleQA: [
    {
      q: "What did Moh work on during her AI/ML internship?",
      a: "At SimpleWorks Solutions, I built production-oriented AI systems: PitchBot for live B2B sales calls, an agentic RAG insurance-policy assistant, and a dual-sided hiring automation pipeline for applications and screening.",
    },
    {
      q: "What college does Moh attend?",
      a: "I'm studying at BITS Pilani, Hyderabad Campus, pursuing a B.E. in Computer Science and an M.Sc. in Mathematics. My current CGPA is 7.72.",
    },
    {
      q: "What programming languages does Moh know?",
      a: "I work with Python, C, C++, TypeScript, JavaScript, and SQL. My AI stack includes Next.js, FastAPI, LangChain, LlamaIndex, crewAI, AutoGen, ChromaDB, and Supabase.",
    },
    {
      q: "What clubs is Moh part of?",
      a: "I'm a Senior Photographer with DoPY, a certified Student Mentor with SWMC, and an active member of SEDS, AUGSD, and Embryo. I also captain the BITS Powerlifting Team.",
    },
    {
      q: "What are Moh's sports achievements?",
      a: "I captain the BITS Hyderabad Powerlifting Team and have won 2 silver medals in consecutive years at Arena, the campus sports fest.",
    },
    {
      q: "How can I contact Moh?",
      a: "You can reach me at mohbhargava04@gmail.com or connect with me on LinkedIn.",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
