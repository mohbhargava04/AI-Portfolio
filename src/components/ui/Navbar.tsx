"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ label: "Internship", href: "#internship" }, { label: "Projects", href: "#projects" }, { label: "Field Notes", href: "#field-notes" }, { label: "Contact", href: "#contact" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { const update = () => setScrolled(window.scrollY > 70); update(); window.addEventListener("scroll", update); return () => window.removeEventListener("scroll", update); }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const openAi = () => {
    setMenuOpen(false);
    window.dispatchEvent(new Event("open-moh-ai"));
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${menuOpen ? "navbar-menu-open" : ""}`}>
      <nav>
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>MB<span>.</span></Link>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <button type="button" className="nav-ai" onClick={openAi}>Ask AI <span>↗</span></button>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </nav>
      <div id="mobile-site-menu" className={`mobile-menu ${menuOpen ? "mobile-menu-visible" : ""}`}>
        <p>Navigate / 2026</p>
        {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}<b>↘</b></a>)}
        <button type="button" onClick={openAi}><span>◌</span>Ask Moh&apos;s AI<b>↗</b></button>
      </div>
    </header>
  );
}
