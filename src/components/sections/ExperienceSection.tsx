"use client";

import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { internship, leadership } = portfolioData;
  return <>
    <section id="internship" className="internship-v2"><div className="internship-label"><span className="eyebrow">Internship</span><span>01 / 02</span></div><div className="internship-main"><p className="internship-period">{internship.period}</p><h2>{internship.role}<br /><em>at SimpleWorks.</em></h2><p>{internship.intro}</p><div className="internship-highlights">{internship.highlights.map((item) => <span key={item}>{item}</span>)}</div></div><div className="internship-side"><span>SimpleWorks Solutions</span><span>SimpleCRM · Nagpur, India</span><p>Enterprise AI-CRM for BFSI and healthcare workflows.</p></div><div className="internship-signal" aria-hidden="true"><span /><i /><b /></div></section>
    <section id="leadership" className="leadership-v2"><header><span className="eyebrow">Leadership & community</span><h2>Beyond the<br /><em>build.</em></h2><p>Teams, communities, mentorship, and the work that makes campus feel more alive.</p></header><div className="leadership-list">{leadership.map((item, index) => <article key={`${item.role}-${item.organisation}`}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{item.period}</p><h3>{item.role}</h3><em>{item.organisation}</em></div><p>{item.description}</p></article>)}</div></section>
  </>;
}
