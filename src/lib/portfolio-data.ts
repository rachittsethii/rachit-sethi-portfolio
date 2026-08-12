import resumeAsset from "@/assets/rachit_resume.pdf.asset.json";

export const profile = {
  name: "Rachit Sethi",
  role: "Machine Learning & Software Developer",
  tagline:
    "CSE undergrad building AI-driven tools with Python, machine learning and clean, practical interfaces.",
  location: "Jaipur, India",
  email: "rachitsethi004@gmail.com",
  phone: "+91 95491 01235",
  github: "https://github.com/rachittsethii",
  linkedin: "https://linkedin.com/in/rachit-sethi",
  resumeUrl: resumeAsset.url,
  about: [
    "I'm a Computer Science undergraduate at JECRC Foundation, Jaipur, focused on machine learning, Python and core computer science fundamentals like data structures and OOP.",
    "I like turning ideas into working software — from NLP-based resume scoring to end-to-end regression pipelines — and I'm happiest when a project moves from a notebook to something people can actually use.",
    "Outside code, I've captained football teams at school and college level and represented at state level in football and swimming, which is where most of my teamwork and leadership habits come from.",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming & Scripting", items: ["C", "C++", "Python", "Pandas", "NumPy", "Matplotlib"] },
  { group: "Machine Learning", items: ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Sentence Transformers"] },
  { group: "CS Fundamentals", items: ["Data Structures", "Object-Oriented Programming", "Operating Systems"] },
  { group: "Web & Tools", items: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "VS Code", "Google Colab", "Streamlit"] },
];

export const experience = [
  {
    role: "Copado Certified Copado AI",
    company: "Copado",
    period: "Jul 2026",
    points: ["Certified in applying Copado's AI capabilities to development and release workflows."],
  },
  {
    role: "Web Development Training with AI",
    company: "Internshala",
    period: "Aug 2024",
    points: [
      "Completed an 8-week training covering web development fundamentals alongside AI tooling.",
      "Built hands-on projects using HTML, CSS and JavaScript.",
    ],
  },
  {
    role: "Participant — Smart India Hackathon 2024",
    company: "JECRC HackQuest 7.0 (Internal Hackathon)",
    period: "2024",
    points: ["Worked in a team to prototype a solution under hackathon time constraints."],
  },
  {
    role: "Football Team Captain & Student Council Member",
    company: "JECRC Foundation / Chinar Public School",
    period: "2020 — Present",
    points: [
      "Captained college and school football teams in inter-college tournaments.",
      "Secured 2nd position at the RTU Inter-College Tournament (Nov 2023).",
      "Coordinated large-scale college fest events as a core member across cross-functional teams.",
    ],
  },
];

export const education = [
  {
    school: "Jaipur Engineering College and Research Center Foundation, Jaipur",
    degree: "B.Tech, Computer Science and Engineering — CGPA 7.54",
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
    name: "AI Resume Analyzer",
    blurb:
      "NLP-based ATS scoring tool that matches resumes to job descriptions using the all-MiniLM-L6-v2 transformer and cosine similarity, with PDF parsing, skill extraction and matched/missing skill analysis. Deployed on Streamlit Cloud.",
    stack: ["Python", "Streamlit", "Sentence Transformers", "Scikit-learn", "NLP"],
    link: "#",
    repo: "https://github.com/rachittsethii",
  },
  {
    name: "Housing Price Prediction",
    blurb:
      "End-to-end machine learning app predicting housing prices, covering data cleaning, categorical encoding, feature scaling and exploratory analysis of correlations, outliers and price distributions.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    link: "#",
    repo: "https://github.com/rachittsethii",
  },
];

export const certificates = [
  {
    name: "Copado Certified Copado AI",
    issuer: "Copado",
    date: "Jul 2026",
    // Replace with the actual credential URL from Copado/Credly.
    link: "#",
  },
  {
    name: "Web Development Training with AI",
    issuer: "Internshala",
    date: "Aug 2024",
    // Replace with the actual certificate verification URL from Internshala.
    link: "#",
  },
];
