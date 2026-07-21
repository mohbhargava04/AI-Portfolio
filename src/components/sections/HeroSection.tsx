"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const fragments = ["<>", "{}", "//", "01", "◌", "⊹", "()", "◉", "++", "[]", "·", "⊕"];

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const { personal } = portfolioData;

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.from(".hero-kicker", { y: 12, opacity: 0, duration: 0.65 })
        .from(".hero-name-line", { yPercent: 105, duration: 0.95, stagger: 0.1 }, "-=0.35")
        .from(".hero-subline, .hero-command", { y: 18, opacity: 0, duration: 0.65, stagger: 0.12 }, "-=0.45")
        .from(".hero-object", { scale: 0.72, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.7");

      gsap.to(".hero-name-stage", { scale: 0.73, xPercent: -19, yPercent: -18, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.7 } });
      gsap.to(".name-fragment", { opacity: 1, x: (index) => (index % 2 ? 55 + index * 7 : -38 - index * 6), y: (index) => (index % 3 - 1) * 42, rotate: (index) => (index % 2 ? 1 : -1) * (12 + index * 4), stagger: 0.035, ease: "none", scrollTrigger: { trigger: root.current, start: "21% top", end: "67% top", scrub: true } });
      gsap.to(".hero-orbit", { rotate: 105, y: -54, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to(".hero-copy", { y: -55, opacity: 0.25, ease: "none", scrollTrigger: { trigger: root.current, start: "38% top", end: "bottom top", scrub: true } });
    }, root);
    return () => context.revert();
  }, []);

  const openAssistant = () => window.dispatchEvent(new Event("open-moh-ai"));

  return (
    <section ref={root} id="about" className="hero">
      <div className="hero-grid" />
      <div className="hero-name-stage">
        <div className="hero-kicker"><span className="status-dot" /> Portfolio / 2026</div>
        <div className="hero-name-wrap"><h1><span className="hero-name-line">Moh</span><span className="hero-name-line hero-name-italic">Bhargava<span className="blue-dot">.</span></span></h1></div>
        <div className="name-fragments" aria-hidden="true">{fragments.map((fragment, index) => <span className={`name-fragment fragment-${index}`} key={`${fragment}-${index}`}>{fragment}</span>)}</div>
      </div>
      <div className="hero-copy">
        <p className="hero-subline">{personal.tagline}</p>
        <p>{personal.bio}</p>
        <button type="button" className="hero-command" onClick={openAssistant}><span>Ask Moh&apos;s AI</span><kbd>⌘ K</kbd></button>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <div className="hero-object object-orb"><div className="orb-core" /><i /><b /></div>
        <div className="hero-object object-lens"><span /><span /><span /></div>
        <div className="hero-object object-weight"><span>MB</span></div>
      </div>
      <div className="hero-footer"><span>{personal.location}</span><span>Scroll to explore <b>↓</b></span></div>
    </section>
  );
}
