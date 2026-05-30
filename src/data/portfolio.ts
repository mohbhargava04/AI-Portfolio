export const portfolioData = {
  personal: {
    name: "Moh Bhargava",
    tagline: "Mathematics & Computer Science Student · Builder · Problem Solver",
    bio: `I'm a 2nd-year MSc. Mathematics and B.E. Computer Science dual-degree student at BITS Pilani, Hyderabad Campus. I'm passionate about frontend development, UI/UX design, and competitive programming. I enjoy building clean, intuitive digital products and actively contribute to campus communities through tech, sports, and design.`,
    location: "BITS Pilani, Hyderabad Campus",
    email: {
      formal: "f20240845@hyderabad.bits-pilani.ac.in",
      informal: "f20240845@hyderabad.bits-pilani.ac.in",
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
      period: "2024 – 2029",
      detail:
        "Pursuing a dual degree in Mathematics and Computer Science with interests in algorithms, data structures, and frontend development.",
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
    languages: ["C", "C++", "Python"],
    frameworks: ["HTML", "CSS"],
    tools: ["Figma", "VS Code", "Linux", "LeetCode", "Codeforces"],
    areas: [
      "Frontend Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Wireframing & Prototyping",
      "Data Structures & Algorithms",
    ],
  },

  projects: [
    {
      name: "ReFind",
      tagline: "Campus Peer-to-Peer Marketplace",
      description:
        "A centralized campus marketplace designed to replace fragmented communication channels like WhatsApp groups. Built as Frontend Developer and UI/UX Lead in a team of three.",
      problem:
        "College students relied on noisy, unorganised WhatsApp groups to buy and sell second-hand items, making it hard to find listings or connect with the right people.",
      solution:
        "A structured, searchable marketplace with a Dynamic Request Module — a 'two-sided' approach letting users post specific item needs, enabling sellers to meet existing demand proactively.",
      tech: ["HTML", "CSS", "Figma"],
      type: "Frontend Web App",
      status: "Completed",
      github: null,
      live: null,
    },
  ],

  experience: [
    {
      role: "Captain",
      organisation: "Powerlifting Team, BPHC",
      period: "April 2026 – Present",
      description:
        "Leading the BITS Hyderabad Powerlifting Team; increased team participation by over 60%. Previously served as Vice-Captain (June 2025 – April 2026). Won 2 silver medals in consecutive years at Arena, the sports fest of BITS Hyderabad.",
    },
    {
      role: "Web Dev and Design OC",
      organisation: "ATMoS 2025, BPHC",
      period: "August 2025 – November 2025",
      description:
        "Contributed to the website and brochure design for ATMoS 2025. Designed merchandise for the executive team and assisted in organising and running the tech fest.",
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
      q: "What is ReFind?",
      a: "ReFind is a campus peer-to-peer marketplace I helped build as Frontend Developer and UI/UX Lead. It replaces chaotic WhatsApp groups with a structured platform where students can list items or post specific requests.",
    },
    {
      q: "What college does Moh attend?",
      a: "I'm studying at BITS Pilani, Hyderabad Campus — pursuing a dual degree in MSc. Mathematics and B.E. Computer Science (graduating 2029).",
    },
    {
      q: "What programming languages does Moh know?",
      a: "I'm proficient in C, C++, and Python, and I actively practise Data Structures and Algorithms on LeetCode and Codeforces.",
    },
    {
      q: "What clubs is Moh part of?",
      a: "I'm active in SEDS, SWMC (student mentoring), AUGSD (registration guidance), DoPY (photography), and Embryo (speaker series). I also captain the Powerlifting Team.",
    },
    {
      q: "What are Moh's sports achievements?",
      a: "I captain the BITS Hyderabad Powerlifting Team and have won 2 silver medals in consecutive years at Arena, the campus sports fest.",
    },
    {
      q: "How can I contact Moh?",
      a: "You can reach me at f20240845@hyderabad.bits-pilani.ac.in or connect on LinkedIn — the link is in the Contact section.",
    },
  ],
};

export type PortfolioData = typeof portfolioData;