import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = portfolioData;
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true"><span /><i /><b /></div>
      <div className="contact-kicker"><span className="eyebrow">Let&apos;s make something useful</span><span>END / 2026</span></div>
      <h2>Have a hard<br /><em>problem to solve?</em></h2>
      <p>I&apos;m most excited by AI systems that make real work clearer, faster, and easier to trust. If that sounds like your kind of problem, let&apos;s talk.</p>
      <a className="contact-email" href={`mailto:${personal.email.formal}`}>{personal.email.formal}<span>↗</span></a>
      <div className="contact-links"><a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href={personal.links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
    </section>
  );
}
