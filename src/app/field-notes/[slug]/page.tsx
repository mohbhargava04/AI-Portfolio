import { notFound } from "next/navigation";
import Link from "next/link";
import PandaGuide from "@/components/ui/PandaGuide";
import { fieldNotes, getFieldNote } from "@/data/field-notes";

export function generateStaticParams() { return fieldNotes.map(({ slug }) => ({ slug })); }

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();
  return <main className="essay-page"><Link href="/field-notes" className="back-link">← Field Notes</Link><header className="essay-header"><span className="eyebrow">{note.category}</span><p className="note-date">{note.date}</p><h1>{note.title}</h1><p>{note.excerpt}</p></header><div className={`essay-gallery gallery-${note.photos.length}`}>{note.photos.map((photo, index) => <div key={photo} className={`essay-photo essay-photo-${index}`}><span>{String(index + 1).padStart(2, "0")}</span></div>)}</div><article>{note.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<PandaGuide variant={note.category === "Powerlifting" ? "lift" : note.category === "Photography" ? "camera" : "notes"} /></article></main>;
}
