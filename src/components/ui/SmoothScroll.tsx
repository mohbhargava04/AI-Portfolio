"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const update = (time: number) => gsap.updateRoot(time / 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>{children}</ReactLenis>;
}
