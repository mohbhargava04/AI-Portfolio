"use client";

import { portfolioData } from "@/data/portfolio";

function ProjectLink({ href }: { href: string | null }) {
  return href ? <a href={href} target="_blank" rel="noreferrer" className="project-repo">Repository <span>↗</span></a> : <span className="project-private">Internship brief</span>;
}

const flows = [
  ["identify", "retrieve", "clarify", "answer"],
  ["ingest", "extract", "retrieve", "respond"],
  ["parse", "score", "analyse", "shortlist"],
  ["research", "tailor", "prepare", "reach out"],
];

export default function ProjectsSection() {
  return <section id="projects" className="projects-v3">
    <header className="projects-header"><span className="eyebrow">Internship projects</span><h2>Four systems.<br /><em>Different stakes.</em></h2><p>Each project started with a workflow that was slow, fragmented, or difficult to trust - then became a focused agentic system with a clear job to do.</p></header>
    <div className="internship-project-grid">{portfolioData.internshipProjects.map((project, index) => <article className="internship-project interactive-card" key={project.name}>
      <div className="project-card-top"><span>0{index + 1}</span><p>{project.kicker}</p><ProjectLink href={project.github} /></div>
      <h3>{project.name}</h3><p className="project-summary">{project.description}</p>
      <div className="project-signal"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
      <div className="project-flow" aria-label={`${project.name} flow`}>{flows[index].map((step, stepIndex) => <span key={step}>{step}<i>{stepIndex < 3 ? "→" : ""}</i></span>)}</div>
      <details><summary>How it works <b>+</b></summary><p>{project.detail}</p></details>
      <div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
    </article>)}</div>
    <div className="independent-work"><div><span className="eyebrow">Also building</span><h3>Independent work</h3></div><div className="independent-list">{portfolioData.independentProjects.map((project) => <article key={project.name}><div><p>{project.type}</p><h4>{project.name}</h4><span>{project.tagline}</span></div><p>{project.description}</p></article>)}</div></div>
  </section>;
}
