import Link from "next/link";
import PandaGuide from "@/components/ui/PandaGuide";
import { fieldNotes } from "@/data/field-notes";

export default function FieldNotesPage() {
  return <main className="notes-page"><Link href="/" className="back-link">← Moh Bhargava</Link><header className="notes-page-header"><span className="eyebrow">Field notes</span><h1>Things I am learning,<br /><em>building, and noticing.</em></h1><PandaGuide variant="camera" /></header><div className="all-notes">{fieldNotes.map((note, index) => <Link key={note.slug} href={`/field-notes/${note.slug}`} className="all-note"><div className={`note-image note-image-${index}`}><span>{note.category}</span><div className="note-art" /></div><div><p className="note-date">{note.date}</p><h2>{note.title}</h2><p>{note.excerpt}</p><span className="read-note">Read essay →</span></div></Link>)}</div></main>;
}
