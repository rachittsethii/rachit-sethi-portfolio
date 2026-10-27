import resumeAsset from "@/assets/rachit_resume.pdf.asset.json";

export const profile = {
  name: "Rachit Sethi",
  role: "AI / Machine Learning Engineer",
  tagline:
    "AI/NLP Intern at Ericsson building LLM-powered multi-agent services with LangGraph, A2A and MCP. Strong foundation in Python, C++ and OOP.",
  location: "Jaipur, India",
  email: "rachitsethi004@gmail.com",
  phone: "+91 95491 01235",
  github: "https://github.com/rachittsethii",
  linkedin: "https://www.linkedin.com/in/rachittsethi/",
  resumeUrl: resumeAsset.url,
  about: [
    "I'm a Computer Science undergraduate at JECRC Foundation, Jaipur, currently interning as an AI/NLP Engineer at Ericsson, where I build and monitor LLM-powered multi-agent services with LangGraph, A2A and MCP, plus PII masking and guardrails.",
    "I like turning ideas into measurable systems — I built a local RAG studio whose hybrid retrieval lifted Hit Rate@8 from 66.7% to 83.3%, and an NLP-based ATS resume scorer deployed on Streamlit Cloud. Strong foundation in OOP and C++.",
    "Outside code, I've captained football teams at school and college level, represented the state in football and swimming, served on the Student Council and coordinated large college fest events.",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "C++", "C", "JavaScript"],
  },
  {
    group: "AI / ML / NLP",
    items: [
      "LLM APIs",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "BM25 / Hybrid Search",
      "Ollama",
      "Agent-to-Agent (A2A)",
      "Model Context Protocol (MCP)",
      "Sentence Transformers",
      "Scikit-learn",
      "Cosine Similarity",
      "PII Masking / LLM Guardrails",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    group: "Backend & Observability",
    items: ["REST APIs", "Postman", "Arize Phoenix", "Azure Monitor"],
  },
  {
    group: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems"],
  },
  {
    group: "Web, Tools & Cloud",
    items: [
      "Streamlit",
      "Streamlit Cloud",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "VS Code",
      "Microsoft Azure",
      "Google Colab",
      "PyMuPDF",
    ],
  },
];

export const experience = [
  {
    role: "AI/NLP Intern",
    company: "Ericsson",
    period: "Sep 2026 — Present",
    points: [
      "Built and shipped an LLM API end-to-end for a multi-agent (LangGraph, A2A) compliance-reporting system, adding per-user request attribution via an SSO-sourced header for auditing and traceability; covered by 6 unit tests.",
      "Building automated health, liveness and guardrail checks — agent liveness probes, round-trip response verification and MCP server health checks.",
      "Worked on a pipeline that generates report sections in parallel using the LangGraph Send API and masks PII before every LLM call.",
      "Ran UAT for an LLM research assistant, documenting ten test cases and flagging three issues: latency, citation formatting and unrendered links.",
    ],
  },
  {
    role: "Football Captain & State-level Athlete",
    company: "JECRC Foundation / Chinar Public School",
    period: "2020 — Present",
    points: [
      "Captained school and college teams; runners-up at the RTU Inter-College Tournament (Nov 2023).",
      "Represented the state in football and swimming.",
      "Core member of the Student Council and the college fest organizing team.",
    ],
  },
];

export const education = [
  {
    school: "Jaipur Engineering College and Research Centre (JECRC), Jaipur",
    degree: "B.Tech, Computer Science and Engineering — CGPA 7.58",
    period: "2023 — Present",
  },
  {
    school: "Chinar Public School, Alwar",
    degree: "Senior Secondary, CBSE — 65.4%",
    period: "2023",
  },
  {
    school: "Chinar Public School, Alwar",
    degree: "Secondary, CBSE — 77%",
    period: "2020",
  },
];

export const projects = [
  {
    name: "Measured RAG Studio",
    date: "Oct 2026",
    blurb:
      "Local RAG system over SEBI regulatory documents using LangChain, FAISS, BM25 and bge-small-en-v1.5 embeddings, answered by a local Ollama (Llama 3.2) model via a Streamlit UI. Benchmarked dense vs hybrid (RRF) retrieval and two chunk sizes on 30 ground-truth questions — hybrid lifted Hit Rate@8 from 66.7% to 83.3% (MRR 0.42 → 0.61); 500-char chunks beat 1000-char chunks by 13 points.",
    stack: ["Python", "LangChain", "FAISS", "BM25", "Ollama", "Streamlit"],
    link: "#",
    repo: "https://github.com/rachittsethii",
  },
  {
    name: "AI Resume Analyzer",
    date: "Aug 2026",
    blurb:
      "Deployed Streamlit app that scores a resume against a job description and flags missing skills. Matches on meaning rather than keywords: embeds text with all-MiniLM-L6-v2, ranks fit by cosine similarity and reads PDFs with PyMuPDF to produce an ATS score.",
    stack: ["Python", "Streamlit", "Sentence Transformers", "PyMuPDF", "NLP"],
    link: "#",
    repo: "https://github.com/rachittsethii",
  },
];

export const certificates = [
  {
    name: "Copado Certified Copado AI",
    issuer: "Copado",
    date: "Jul 2026",
    link: "https://drive.google.com/file/d/1pAcU8K3RNOwl8BANbf6sbOqycm-j0gBE/view?usp=drive_link",
  },
  {
    name: "Web Development Training with AI",
    issuer: "Internshala",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1OY6gyi4Ae6TeeWFBLABwg5tICGLF1DKu/view?usp=drive_link",
  },
  {
    name: "REN 2025 Core Team",
    issuer: "JECRC",
    date: "2025",
    link: "https://drive.google.com/file/d/1UIu2-n_n-34j0IUkUS8Vy0vjBGbJy5kD/view?usp=drive_link",
  },
  {
    name: "Smart India Hackathon 2024",
    issuer: "JECRC HackQuest 7.0",
    date: "2024",
    link: "https://drive.google.com/file/d/1yYrij2W0F6y4F23uMPTutY1PKSNFdoGh/view?usp=drive_link",
  },
  {
    name: "2nd Position — RTU Inter-College Football Tournament",
    issuer: "RTU",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/1lye71gXk1j8Ohw-OiRWbK6Gnh8qwvuj8/view?usp=drive_link",
  },
  {
    name: "Learning C++",
    issuer: "LinkedIn",
    date: "2024",
    link: "https://drive.google.com/file/d/1ALs5rh6vnSCgv1rieoozzVdWjSsCpulA/view?usp=drive_link",
  },
];
