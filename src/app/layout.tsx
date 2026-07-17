import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moh Bhargava — AI/ML Builder",
  description:
    "Portfolio of Moh Bhargava, an AI/ML builder and Computer Science and Mathematics student at BITS Pilani, Hyderabad Campus.",
  keywords: ["Moh Bhargava", "BITS Pilani", "AI/ML", "RAG", "Agentic AI", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain">{children}</body>
    </html>
  );
}
