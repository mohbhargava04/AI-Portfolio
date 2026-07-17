export default function PandaGuide({ variant = "camera" }: { variant?: "camera" | "lift" | "notes" }) {
  const accessory = variant === "camera" ? "◉" : variant === "lift" ? "━" : "✦";
  return (
    <div className={`panda panda-${variant}`} aria-hidden="true">
      <div className="panda-ear panda-ear-left" />
      <div className="panda-ear panda-ear-right" />
      <div className="panda-head"><span className="panda-eye panda-eye-left" /><span className="panda-eye panda-eye-right" /><span className="panda-nose" /></div>
      <div className="panda-body"><span>{accessory}</span></div>
    </div>
  );
}
