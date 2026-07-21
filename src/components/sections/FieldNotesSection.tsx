import Link from "next/link";
import PandaTrail from "@/components/ui/PandaTrail";
import { fieldNotes } from "@/data/field-notes";

export default function FieldNotesSection() {
  return (
    <section id="field-notes" className="field-notes section-shell">
      <div className="section-heading field-heading">
        <div><span className="eyebrow">Field notes</span><h2>The work around the work.</h2></div>
        <Link href="/field-notes" className="text-link">View all notes <span>↗</span></Link>
      </div>
      <div className="notes-grid">
        {fieldNotes.slice(0, 3).map((note, index) => (
          <Link key={note.slug} href={`/field-notes/${note.slug}`} className="note-card">
            <div className={`note-image note-image-${index}`}><span>{note.category}</span><div className="note-art" /></div>
            <p className="note-date">{note.date}</p><h3>{note.title}</h3><p>{note.excerpt}</p><span className="read-note">Read note <b>→</b></span>
          </Link>
        ))}
      </div>
      <PandaTrail />
    </section>
  );
}
