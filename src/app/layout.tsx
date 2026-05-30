import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moh Bhargava — CS Student & Builder",
  description:
    "Portfolio of Moh Bhargava, a 1st-year Computer Science student at BITS Pilani, Hyderabad Campus.",
  keywords: ["Moh Bhargava", "BITS Pilani", "CS Student", "Portfolio", "Full Stack Developer"],
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