"use client";

import { portfolioData } from "@/data/portfolio";

export default function EducationSection() {
  return <section id="education" className="education-v2"><div className="education-title"><span className="eyebrow">Education</span><h2>Curiosity with<br /><em>structure.</em></h2></div><div className="education-list">{portfolioData.education.map((item, index) => <article key={item.institution}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{item.period}</p><h3>{item.institution}</h3><em>{item.degree}</em><p className="education-detail">{item.detail}</p></div><strong>{item.grade}</strong></article>)}</div></section>;
}
