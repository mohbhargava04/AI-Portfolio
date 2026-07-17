"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ label: "Work", href: "#projects" }, { label: "Experience", href: "#experience" }, { label: "Field Notes", href: "#field-notes" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 70); update(); window.addEventListener("scroll", update); return () => window.removeEventListener("scroll", update); }, []);
  return <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}><nav><Link href="/" className="brand">MB<span>.</span></Link><div className="nav-links">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<a className="nav-ai" href="#about">Ask AI <span>↗</span></a></div></nav></header>;
}
