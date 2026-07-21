"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      if (!cursor.current) return;
      cursor.current.style.left = `${event.clientX}px`;
      cursor.current.style.top = `${event.clientY}px`;
    };
    const over = (event: Event) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input, summary");
      const card = target.closest(".internship-project, .note-card, .all-note");
      const object = target.closest(".hero-orbit");
      cursor.current?.classList.toggle("cursor-active", Boolean(interactive || card || object));
      cursor.current?.classList.toggle("cursor-card", Boolean(card));
      cursor.current?.classList.toggle("cursor-orbit", Boolean(object));
      if (cursor.current) cursor.current.querySelector("span")!.textContent = object ? "◌" : card ? "↗" : "<>";
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
