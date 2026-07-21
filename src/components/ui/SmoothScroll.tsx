"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const update = (time: number) => gsap.updateRoot(time / 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const revealTargets = gsap.utils.toArray<HTMLElement>(".section-intro, .projects-header, .internship-project, .independent-work, .education-list article, .note-card, .all-note");
    const triggers = revealTargets.map((target) => ScrollTrigger.create({
      trigger: target,
      start: "top 87%",
      once: true,
      onEnter: () => gsap.fromTo(target, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72, ease: "power3.out" }),
    }));
    const internship = document.querySelector<HTMLElement>(".internship-v2");
    const internshipTimeline = internship ? gsap.timeline({ scrollTrigger: { trigger: internship, start: "top 72%", once: true } })
      .fromTo(internship.querySelectorAll(".internship-label, .internship-main, .internship-side"), { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72, stagger: 0.14, ease: "power3.out" })
      .fromTo(internship.querySelector(".internship-signal"), { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.35") : null;
    const leadershipItems = gsap.utils.toArray<HTMLElement>(".leadership-list article");
    leadershipItems.forEach((item, index) => {
      triggers.push(ScrollTrigger.create({ trigger: item, start: "top 84%", once: true, onEnter: () => gsap.fromTo(item, { x: index % 2 ? 28 : -28, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }) }));
    });
    return () => { gsap.ticker.remove(update); triggers.forEach((trigger) => trigger.kill()); internshipTimeline?.kill(); };
  }, []);

  return <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>{children}</ReactLenis>;
}
