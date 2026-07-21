"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PandaGuide from "@/components/ui/PandaGuide";

gsap.registerPlugin(ScrollTrigger);

export default function PandaTrail() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(".panda-trail-guide", { x: -36, rotate: -9 }, {
        x: () => Math.min(window.innerWidth * 0.52, 560),
        rotate: 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 82%", end: "bottom 30%", scrub: 1.1 },
      });
      gsap.to(".panda-trail-dots", { backgroundPosition: "90px 0", ease: "none", scrollTrigger: { trigger: root.current, start: "top 85%", end: "bottom 40%", scrub: 1 } });
    }, root);
    return () => context.revert();
  }, []);

  return <div ref={root} className="panda-trail" aria-hidden="true"><div className="panda-trail-dots" /><div className="panda-trail-guide"><PandaGuide variant="camera" /><span>collecting small stories</span></div></div>;
}
