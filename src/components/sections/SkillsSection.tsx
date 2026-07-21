"use client";

import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const groups = [
    ["01", "Languages", portfolioData.skills.languages],
    ["02", "Frameworks & systems", portfolioData.skills.frameworks],
    ["03", "Tools & infrastructure", portfolioData.skills.tools],
    ["04", "What I like solving", portfolioData.skills.areas],
  ] as const;
  return <section id="skills" className="skills-v2"><div className="section-intro"><span className="eyebrow">Capabilities</span><h2>I build for <em>clarity</em>,<br />speed, and trust.</h2><p>AI is only useful when it is grounded in real work. My stack reflects that: systems thinking, practical shipping, and a product eye.</p></div><div className="skill-rows">{groups.map(([number, label, items]) => <div className="skill-row" key={label}><span>{number}</span><h3>{label}</h3><div>{items.map((item) => <b key={item}>{item}</b>)}</div></div>)}</div></section>;
}
