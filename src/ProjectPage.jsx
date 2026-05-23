import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS_DATA } from "./projects";

const ACCENT = "#CBACF9";
const BG = "#000000";
const CARD_BG = "#10101A";
const BORDER = "rgba(255,255,255,0.1)";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = PROJECTS_DATA[id];
  const [vis, setVis] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVis(true), 60);
  }, [id]);

  if (!p) {
    return (
      <div style={{ background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontFamily: "Inter,sans-serif", fontSize: 24 }}>Project not found.</p>
          <button onClick={() => navigate("/")} style={{ marginTop: 24, background: "#fff", color: "#000", border: "none", borderRadius: 10, padding: "12px 28px", fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "Inter,sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #000; -webkit-font-smoothing: antialiased; }
        .pg-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .pg-fade.in { opacity: 1; transform: translateY(0); }
        .img-thumb { cursor: pointer; opacity: 0.55; transition: opacity 0.2s, transform 0.2s; }
        .img-thumb.active { opacity: 1; }
        .img-thumb:hover { opacity: 0.85; transform: scale(1.04); }
      `}</style>

      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "0 5%", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}>
        <button onClick={() => navigate("/")} style={{ background: "none", border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.6)", borderRadius: 8, padding: "8px 18px", fontFamily: "Inter,sans-serif", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = BORDER; }}>
          ← Back
        </button>
        <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>Hussein<span style={{ color: ACCENT }}>.</span></span>
        <div style={{ width: 80 }} />
      </div>

      <div style={{ height: "60vh", minHeight: 400, marginTop: 64, overflow: "hidden", position: "relative", opacity: vis ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <img src={p.hero} alt={p.title} style={{ width: "100%", height: "100%", display: "block", ...p.heroStyle }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 48, left: "5%", right: "5%", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all 0.9s ease 0.2s" }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, fontWeight: 500, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.tag}</span>
          <h1 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.05, marginTop: 10 }}>{p.title}</h1>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{p.subtitle} · {p.period}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 5% 120px" }}>
        <div className="pg-fade in" style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: ACCENT, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>Overview</p>
          <p style={{ fontSize: "clamp(18px,2.2vw,24px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, fontWeight: 300, maxWidth: 780 }}>{p.summary}</p>
        </div>

        {p.images.length > 0 && (
          <div className="pg-fade in" style={{ marginBottom: 80 }}>
            <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: CARD_BG, border: `1px solid ${BORDER}`, marginBottom: 16, position: "relative" }}>
              <img src={p.images[imgIdx].src} alt={p.images[imgIdx].caption} style={{ width: "100%", height: "100%", display: "block", ...p.images[imgIdx].style }} />
              {p.images[imgIdx].caption && (
                <div style={{ position: "absolute", bottom: 16, left: 20, fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{p.images[imgIdx].caption}</div>
              )}
            </div>
            {p.images.length > 1 && (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {p.images.map((img, i) => (
                  <div key={i} className={`img-thumb${i === imgIdx ? " active" : ""}`} onClick={() => setImgIdx(i)}
                    style={{ width: 90, height: 64, borderRadius: 8, overflow: "hidden", border: `2px solid ${i === imgIdx ? ACCENT : "transparent"}`, flexShrink: 0 }}>
                    <img src={img.src} alt={img.caption} style={{ width: "100%", height: "100%", display: "block", ...img.style }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="pg-fade in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 64 }}>
          {[["The Challenge", p.challenge], ["The Approach", p.approach]].map(([label, text]) => (
            <div key={label} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "32px 28px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: ACCENT, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>{label}</p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontWeight: 300 }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="pg-fade in" style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: ACCENT, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 24 }}>Key Results</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {p.results.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 24px" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "Inter,sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pg-fade in" style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: ACCENT, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>Tools & Methods</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {p.tools.map(t => (
              <span key={t} style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: ACCENT, border: `1px solid rgba(203,172,249,0.2)`, borderRadius: 8, padding: "8px 18px", background: "rgba(203,172,249,0.06)" }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="pg-fade in" style={{ textAlign: "center", paddingTop: 40, borderTop: `1px solid ${BORDER}` }}>
          <button onClick={() => navigate("/")} style={{ background: "#fff", color: "#000", border: "none", borderRadius: 12, padding: "16px 40px", fontFamily: "Inter,sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = ACCENT}
            onMouseLeave={e => e.target.style.background = "#fff"}>
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
