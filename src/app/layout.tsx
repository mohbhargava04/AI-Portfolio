import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohbhargava-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Moh Bhargava — AI/ML Builder",
  description:
    "Portfolio of Moh Bhargava, an AI/ML builder and Computer Science and Mathematics student at BITS Pilani, Hyderabad Campus.",
  keywords: ["Moh Bhargava", "BITS Pilani", "AI/ML", "RAG", "Agentic AI", "Portfolio"],
  authors: [{ name: "Moh Bhargava" }],
  creator: "Moh Bhargava",
  openGraph: {
    title: "Moh Bhargava — AI/ML Builder",
    description: "Agentic AI systems, grounded retrieval, and practical products.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Moh Bhargava - AI/ML Builder" }],
  },
  twitter: { card: "summary_large_image", title: "Moh Bhargava — AI/ML Builder", description: "Agentic AI systems, grounded retrieval, and practical products." },
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
