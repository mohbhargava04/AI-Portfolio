import type { MetadataRoute } from "next";
import { fieldNotes } from "@/data/field-notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohbhargava-portfolio.vercel.app";
  return ["", "/field-notes", ...fieldNotes.map(({ slug }) => `/field-notes/${slug}`)].map((path) => ({ url: `${origin}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
