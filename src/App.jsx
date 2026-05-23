import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ACCENT = "#CBACF9";
const BG = "#000000";
const CARD_BG = "#10101A";
const BORDER = "rgba(255,255,255,0.1)";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Navbar() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%", height: 64,
      background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${BORDER}`
    }}>
      <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.3px" }}>
        Hussein<span style={{ color: ACCENT }}>.</span>
      </span>
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {[["About","about"],["Projects","projects"],["Experience","experience"],["Contact","contact"]].map(([l,id]) => (
          <button key={id} onClick={() => go(id)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "Inter,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)",
            padding: 0, transition: "color 0.2s"
          }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}>
            {l}
          </button>
        ))}
        <a href="/Hussein_Itani_Resume___Mechanical.pdf" download style={{
          background: "transparent", border: `1px solid ${BORDER}`,
          color: "#fff", borderRadius: 8, padding: "8px 20px",
          fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 500,
          textDecoration: "none", transition: "border-color 0.2s, color 0.2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "#fff"; }}>
          Resume
        </a>
      </div>
    </nav>
  );
}

function GridBg({ opacity = 0.04 }) {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    }} />
  );
}

function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 60); }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" style={{
      minHeight: "100vh", background: BG, position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 5% 80px", overflow: "hidden"
    }}>
      <GridBg />
      {/* Purple glow top-left */}
      <div style={{ position: "absolute", top: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(101,52,178,0.25) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Purple glow bottom-right */}
      <div style={{ position: "absolute", bottom: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(101,52,178,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
          border: `1px solid ${BORDER}`, borderRadius: 999,
          padding: "6px 18px", background: "rgba(255,255,255,0.03)"
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            AUB Mechanical Engineering · Class of 2028
          </span>
        </div>

        <h1 style={{
          fontFamily: "Inter,sans-serif",
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 800, color: "#fff", lineHeight: 1.1,
          letterSpacing: "-2px", marginBottom: 20,
          opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
          transition: "all 1s ease"
        }}>
          Engineering Machines,<br />
          <span style={{ color: ACCENT }}>Driving Excellence.</span>
        </h1>

        <p style={{
          fontFamily: "Inter,sans-serif", fontSize: 18, fontWeight: 300,
          color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
          maxWidth: 560, margin: "0 auto 48px",
          opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
          transition: "all 1s ease 0.15s"
        }}>
          Hi! I'm Hussein, a Mechanical Engineer based in Beirut, Lebanon. I design electric vehicles, model wildfires, and build businesses.
        </p>

        <div style={{
          display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
          opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)",
          transition: "all 1s ease 0.25s"
        }}>
          <button onClick={() => go("projects")} style={{
            background: "#fff", color: "#000", border: "none",
            borderRadius: 10, padding: "14px 32px",
            fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 600,
            cursor: "pointer", transition: "background 0.2s"
          }}
            onMouseEnter={e => e.target.style.background = ACCENT}
            onMouseLeave={e => e.target.style.background = "#fff"}>
            Show my work
          </button>
          <button onClick={() => go("contact")} style={{
            background: "transparent", color: "#fff",
            border: `1px solid ${BORDER}`,
            borderRadius: 10, padding: "14px 32px",
            fontFamily: "Inter,sans-serif", fontSize: 14, fontWeight: 500,
            cursor: "pointer", transition: "border-color 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT}
            onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}>
            Get in touch
          </button>
        </div>

        {/* Photo */}
        <div style={{
          marginTop: 64, display: "flex", justifyContent: "center",
          opacity: vis ? 1 : 0, transition: "opacity 1.2s ease 0.4s"
        }}>
          <div style={{
            width: 140, height: 140, borderRadius: "50%",
            border: `2px solid ${BORDER}`, overflow: "hidden",
            boxShadow: `0 0 0 6px rgba(101,52,178,0.15)`
          }}>
            <img src="/images/hussein.jpg" alt="Hussein Itani" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: "enduravolt",
    title: "EnduraVolt",
    desc: "Co-designed a full electric off-road buggy with a regenerative suspension system converting kinetic energy to electricity — recovering up to 25% of energy. Validated with SolidWorks, suspension dynamics, and electromagnetic simulations.",
    tags: ["SolidWorks", "FEA", "Regenerative Systems", "CAD"],
    img: "/images/buggy-render1.png",
    imgStyle: { objectFit: "contain", padding: 24, background: "#0A0A14" }
  },
  {
    id: "uav",
    title: "Autonomous Firefighting UAV",
    desc: "Contributed to a UAV wildfire suppression research project under Dr. Bilal Kaddouh at AUB. Reviewed FlamMap/MTT fire propagation models adapted to Lebanese terrain, wind patterns, and fuel conditions.",
    tags: ["FlamMap/MTT", "UAV Design", "Fire Modeling", "Terrain Analysis"],
    img: "/images/aub-lab.jpg",
    imgStyle: { objectFit: "cover" }
  },
  {
    id: "hvac",
    title: "HVAC Optimisation — AUB",
    desc: "Led a 7-person team to resolve a 10°C chimney-effect thermal differential in the AUB Architecture building. Designed an Arduino-based automated skylight control system integrated with the BMS.",
    tags: ["Arduino", "Thermal Analysis", "BMS", "Airflow Modeling"],
    img: "/images/hvac-summary.jpg",
    imgStyle: { objectFit: "cover" }
  },
  {
    id: null,
    title: "Exotic Sneakers",
    desc: "Founded and scaled a premium sneaker brand from zero. Managing six-figure cash flows, a 10-person team, and full supply chain from imports to retail — since 2022.",
    tags: ["Operations", "Supply Chain", "Team Leadership", "P&L"],
    img: "/images/buggy-render3.png",
    imgStyle: { objectFit: "contain", padding: 24, background: "#0A0A14" }
  },
];

function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" style={{ background: BG, padding: "100px 5%", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 12 }}>
            A small selection of recent projects
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="rv" style={{
              background: CARD_BG, borderRadius: 20,
              border: `1px solid ${BORDER}`,
              overflow: "hidden", transition: "border-color 0.3s, transform 0.3s",
              cursor: p.id ? "pointer" : "default",
              display: "flex", flexDirection: "column"
            }}
              onClick={() => p.id && navigate(`/projects/${p.id}`)}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}>
              {/* Image */}
              <div style={{ height: 220, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", display: "block", transition: "transform 0.5s", ...p.imgStyle }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,16,26,0.7) 0%, transparent 50%)" }} />
              </div>
              {/* Body */}
              <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontFamily: "Inter,sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 12, letterSpacing: "-0.4px" }}>{p.title}</h3>
                <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20, fontWeight: 300, flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: p.id ? 20 : 0 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "Inter,sans-serif", fontSize: 12, color: ACCENT,
                      border: `1px solid rgba(203,172,249,0.2)`,
                      borderRadius: 6, padding: "4px 12px",
                      background: "rgba(203,172,249,0.06)"
                    }}>{t}</span>
                  ))}
                </div>
                {p.id && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 600, color: ACCENT, marginTop: "auto" }}>
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXP_LIST = [
  { role: "Co-Founder & Design Lead @ EnduraVolt", desc: "Designed an electric off-road buggy with regenerative suspension recovering up to 25% kinetic energy. SolidWorks, FEA, suspension dynamics and electromagnetic simulations.", period: "Mar 2025 – Present", logo: "/images/logos/aub.png" },
  { role: "Undergraduate Researcher @ VIPP, AUB", desc: "Wildfire suppression UAV research under Dr. Bilal Kaddouh. Reviewed FlamMap/MTT fire propagation models for Lebanese terrain, wind, topography, and fuel conditions.", period: "Jan 2025 – Present", logo: "/images/logos/aub.png" },
  { role: "Metal Fabrication Intern @ Attar Steel", desc: "Operated industrial shears, press brakes, and angle grinders. Supported hydraulic and power-transmission maintenance under engineer supervision.", period: "May – Aug 2025", logo: "/images/logos/attar.png" },
  { role: "Sales & Closing Associate @ Trifid Media", desc: "Generated qualified leads through scraping tools and outbound prospecting. Cold-called hundreds of clients and closed 30+ deals in 6 months.", period: "Jun 2025 – Present", logo: "/images/logos/trifid.png" },
  { role: "Project Leader @ SBC, SSEA AUB", desc: "Led 7-person team to address HVAC chimney-effect issue in AUB ARD building. Designed an Arduino-based automated window control system using temperature sensors.", period: "Sep 2024 – Jan 2025", logo: "/images/logos/ssea.png" },
  { role: "CEO & Founder @ Exotic Sneakers", desc: "Founded and scaled a premium sneaker brand. Managing six-figure cash flows, a 10-person team, full import logistics, inventory control, and quality oversight since 2022.", period: "Sep 2022 – Present", logo: "/images/logos/exotic.png" },
];

function Experience() {
  return (
    <section id="experience" style={{ background: BG, padding: "100px 5%", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#fff", letterSpacing: "-1px" }}>
            My work experience
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {EXP_LIST.map((e, i) => (
            <div key={i} className="rv" style={{
              background: CARD_BG, border: `1px solid ${BORDER}`,
              borderRadius: 16, padding: "24px 28px",
              transition: "border-color 0.25s, transform 0.25s",
              cursor: "default", display: "flex", gap: 20, alignItems: "flex-start"
            }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = ACCENT; el.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = BORDER; el.currentTarget.style.transform = "translateX(0)"; }}>
              {/* Logo */}
              <div style={{
                width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                background: "rgba(255,255,255,0.06)", border: `1px solid ${BORDER}`,
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <img src={e.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
                  onError={el => { el.target.style.display = "none"; el.target.parentNode.style.background = "rgba(203,172,249,0.1)"; }} />
              </div>
              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "Inter,sans-serif", fontSize: 17, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>{e.role}</h3>
                  <span style={{ fontFamily: "Inter,sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", flexShrink: 0 }}>{e.period}</span>
                </div>
                <p style={{ fontFamily: "Inter,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontWeight: 300 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: BG, padding: "100px 5%", position: "relative", overflow: "hidden", borderTop: `1px solid ${BORDER}` }}>
      <GridBg opacity={0.03} />
      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(101,52,178,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div className="rv">
          <h2 style={{ fontFamily: "Inter,sans-serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 700, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 16 }}>
            Let's work together.<br /><span style={{ color: ACCENT }}>I'm one message away.</span>
          </h2>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
            Whether it's an internship, a research collaboration, or a business opportunity — don't wait. Reach out now and let's make it happen.
          </p>
          {/* Two main CTA buttons */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="mailto:Hti02@mail.aub.edu"
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#fff", color: "#000", textDecoration: "none",
                borderRadius: 12, padding: "16px 32px",
                fontFamily: "Inter,sans-serif", fontSize: 15, fontWeight: 600,
                transition: "background 0.2s, color 0.2s", letterSpacing: "-0.2px"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Send an Email
            </a>
            <a href="https://wa.me/96181826512" target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "#fff", textDecoration: "none",
                borderRadius: 12, padding: "16px 32px",
                fontFamily: "Inter,sans-serif", fontSize: 15, fontWeight: 600,
                transition: "opacity 0.2s", letterSpacing: "-0.2px"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        {/* Social links row */}
        <div className="rv" style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {[["LinkedIn ↗","https://linkedin.com/in/husseinitani"]].map(([l,h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer"
              style={{
                fontFamily: "Inter,sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)",
                textDecoration: "none", border: `1px solid ${BORDER}`,
                borderRadius: 10, padding: "10px 24px", transition: "all 0.2s"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = ACCENT; e.currentTarget.style.borderColor = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = BORDER; }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: CARD_BG, borderTop: `1px solid ${BORDER}`,
      padding: "32px 5%", display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16
    }}>
      <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>
        Hussein<span style={{ color: ACCENT }}>.</span>
      </span>
      <span style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
        Copyright © 2025 Hussein Itani
      </span>
      <div style={{ display: "flex", gap: 16 }}>
        {[["LinkedIn","https://linkedin.com/in/husseinitani"],["GitHub","https://github.com/hti02"]].map(([l,h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{ fontFamily: "Inter,sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = ACCENT}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}>
            {l} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #000; -webkit-font-smoothing: antialiased; }
        .rv { opacity: 0; transform: translateY(24px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .rv.in { opacity: 1; transform: translateY(0); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        @media(max-width:768px){
          .proj-grid { grid-template-columns: 1fr !important; }
          nav div { gap: 16px !important; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
