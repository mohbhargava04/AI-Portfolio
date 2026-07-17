export type FieldNote = {
  slug: string;
  title: string;
  category: "Photography" | "Powerlifting" | "AI Notes" | "Build Log";
  date: string;
  excerpt: string;
  photos: string[];
  body: string[];
};

export const fieldNotes: FieldNote[] = [
  {
    slug: "photographing-campus-in-motion",
    title: "Photographing campus in motion",
    category: "Photography",
    date: "Field note 01",
    excerpt: "A study of movement, low light, and the small moments between the main event.",
    photos: ["frame-01", "frame-02", "frame-03"],
    body: ["Photography has taught me to pay attention before I reach for the camera. The most interesting frame is often the moment just before or after the obvious one.", "This space is where I want to share the stories, experiments, and images that do not fit into a résumé bullet point."],
  },
  {
    slug: "what-powerlifting-taught-me-about-systems",
    title: "What powerlifting taught me about systems",
    category: "Powerlifting",
    date: "Field note 02",
    excerpt: "Consistency, progressive overload, and why good feedback loops beat heroic effort.",
    photos: ["lift-01", "lift-02"],
    body: ["Powerlifting is a practice in patient systems design. Small decisions compound: technique, recovery, logging, and showing up again.", "The same mindset carries into building technical projects. Start with the constraint, measure honestly, then improve one deliberate piece at a time."],
  },
  {
    slug: "building-ai-that-knows-when-not-to-answer",
    title: "Building AI that knows when not to answer",
    category: "AI Notes",
    date: "Field note 03",
    excerpt: "Why grounded retrieval and a graceful “I don’t know” matter more than a confident guess.",
    photos: ["ai-01", "ai-02", "ai-03", "ai-04"],
    body: ["The most useful AI systems are not the ones that sound most certain. They are the ones that preserve the connection between an answer and the evidence behind it.", "That is the principle behind the portfolio assistant: it should help visitors navigate my work, while staying honest about what it actually knows."],
  },
];

export function getFieldNote(slug: string) {
  return fieldNotes.find((note) => note.slug === slug);
}
