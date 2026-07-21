import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", background: "#09090b", color: "#f4f4f5", padding: "68px", position: "relative", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.16, backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "58px 58px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", fontFamily: "monospace", color: "#8ec5ff", fontSize: 20, letterSpacing: 4 }}>PORTFOLIO / 2026</div>
        <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 108, lineHeight: 0.84, letterSpacing: -8 }}>Moh</div><div style={{ display: "flex", fontSize: 108, lineHeight: 0.84, letterSpacing: -8, fontStyle: "italic" }}>Bhargava<span style={{ color: "#8ec5ff" }}>.</span></div></div>
        <div style={{ display: "flex", fontFamily: "monospace", color: "#a1a1aa", fontSize: 23, letterSpacing: 2 }}>AI/ML BUILDER · AGENTIC SYSTEMS · RAG</div>
      </div>
      <div style={{ display: "flex", position: "absolute", right: 85, top: 117, width: 290, height: 290, borderRadius: "50%", border: "2px solid #52525b", boxShadow: "inset -35px -30px 50px #000, inset 16px 12px 34px #666" }}><div style={{ position: "absolute", inset: 45, borderRadius: "50%", border: "2px solid #8ec5ff", opacity: 0.55 }} /></div>
    </div>,
    size,
  );
}
