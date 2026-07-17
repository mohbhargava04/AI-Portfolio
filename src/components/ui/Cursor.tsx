"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      cursor.current?.style.setProperty("transform", `translate(${event.clientX}px, ${event.clientY}px)`);
    };
    const over = (event: Event) => {
      const target = event.target as HTMLElement;
      cursor.current?.classList.toggle("cursor-active", Boolean(target.closest("a, button, input")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  return <div ref={cursor} className="cursor" aria-hidden="true"><span>{"<>"}</span></div>;
}
