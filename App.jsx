import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Engineering", "Business", "Leadership", "Contact"];

const ENGINEERING_PROJECTS = [
  {
    id: 1,
    tag: "Active Project",
    title: "EnduraVolt",
    subtitle: "Electric Off-Road Buggy with Regenerative Suspension",
    description:
      "Designed an electric off-road buggy featuring a regenerative suspension system capable of converting kinetic motion into electrical energy — recovering up to 25% of energy during operation.",
    details: ["Suspension dynamics simulation", "Electromagnetic regeneration modeling", "Coil–magnet behavior analysis", "Online-validated design specs"],
    color: "#C8522A",
    icon: "⚡",
  },
  {
    id: 2,
    tag: "Research",
    title: "Autonomous Firefighting UAV",
    subtitle: "Wildfire Suppression — VIPP, AUB",
    description:
      "Contributed to a UAV-based wildfire suppression research project under Dr. Bilal Kaddouh. Reviewed FlamMap/MTT fire propagation methodologies adapted to Lebanese terrain and fuel conditions.",
    details: ["Fire propagation modeling", "FlamMap/MTT simulation", "Wind & topography analysis", "Vegetation moisture assessment"],
    color: "#2A6CC8",
    icon: "🚁",
  },
  {
    id: 3,
    tag: "Team Lead",
    title: "SBC HVAC Optimization",
    subtitle: "Arduino-Based Automated Window Control System",
    description:
      "Led a 7-member team to address HVAC inefficiencies driven by chimney-effect airflow in AUB's ARD building. Designed an Arduino-based automated control system using temperature sensors.",
    details: ["Arduino programming", "Temperature sensor integration", "Airflow modeling", "Energy efficiency proposals"],
    color: "#2A8C5A",
    icon: "🌡️",
  },
  {
    id: 4,
    tag: "Internship",
    title: "Metal Fabrication",
    subtitle: "Attar Steel — Industrial Operations",
    description:
      "Performed metal cutting and bending operations using industrial equipment including shears, press brakes, and angle grinders. Supported hydraulic and power-transmission maintenance.",
    details: ["Shears & press brakes", "Angle grinder operations", "Hydraulic systems", "Power transmission maintenance"],
    color: "#8C2A8C",
    icon: "🔩",
  },
];

const SKILLS = [
  { category: "CAD & Simulation", items: ["SolidWorks", "AutoCAD", "FlamMap/MTT", "Online FEA Tools"], icon: "⚙️" },
  { category: "Programming & Systems", items: ["MATLAB", "Arduino", "Python", "Excel/VBA"], icon: "💻" },
  { category: "Fabrication", items: ["3D Printing", "Metal Fabrication", "Machine Shop", "Prototyping"], icon: "🔧" },
  { category: "Data & Analytics", items: ["Tableau", "Data Analytics", "Financial Modeling", "Reporting"], icon: "📊" },
  { category: "Business", items: ["Sales & Closing", "Lead Generation", "E-commerce", "Inventory Systems"], icon: "📈" },
  { category: "Leadership", items: ["Project Management", "Team Building", "Treasury Management", "Training"], icon: "🎯" },
];

const TIMELINE = [
  { year: "2022", title: "Founded Exotic Sneakers", desc: "Started CEO role managing six-figure cash flows, a 10-person team, imports & logistics.", type: "business" },
  { year: "2024 Jan", title: "Dear Diary Media", desc: "Co-founded a marketing agency; built and scaled sales operations with weekly training programs.", type: "business" },
  { year: "2024 Aug", title: "Joined AUB — Merit Scholarship", desc: "Began BEng Mechanical Engineering. Dean's Honor List from semester one.", type: "engineering" },
  { year: "2024 Sep", title: "SBC Project Leader", desc: "Led 7-person team to redesign HVAC airflow system in AUB ARD building using Arduino.", type: "engineering" },
  { year: "2025 Jan", title: "UAV Research Contributor", desc: "Joined VIPP under Dr. Bilal Kaddouh — wildfire suppression UAV research.", type: "engineering" },
  { year: "2025 Mar", title: "Co-Founded EnduraVolt", desc: "Designing electric off-road buggy with regenerative suspension recovering up to 25% energy.", type: "engineering" },
  { year: "2025 May", title: "Insight Club Treasurer", desc: "Managing 5-figure annual budget for AUB's largest student organization (1,000+ members).", type: "leadership" },
  { year: "2025 May", title: "Attar Steel Internship", desc: "Metal fabrication intern — industrial shears, press brakes, hydraulic systems.", type: "engineering" },
  { year: "2025 Jun", title: "Trifid Media — Sales Associate", desc: "Closed 30+ deals in 6 months through cold outreach, prospecting, and client meetings.", type: "business" },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
      transition: "all 0.4s ease",
      padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.5px", color: "#111" }}>
          Hussein Itani
        </div>
        <div style={{ display: "flex", gap: 36 }} className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "#444", letterSpacing: "0.04em", textTransform: "uppercase", padding: "4px 0", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#C8522A"}
              onMouseLeave={e => e.target.style.color = "#444"}
            >{link}</button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: 22 }}>☰</button>
      </div>
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #eee", padding: "16px 5%" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "10px 0", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333" }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,82,42,0.18)"; ctx.fill();
      });
      particles.forEach((a, i) => particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(200,82,42,${0.06 * (1 - d / 120)})`; ctx.lineWidth = 0.8; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "#FAFAF8" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42%", background: "linear-gradient(135deg, #F5EFE8 0%, #EDE5D8 100%)", clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 5% 80px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FEF0EA", border: "1px solid #F5C4A8", borderRadius: 24, padding: "6px 16px", marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8522A", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#C8522A", letterSpacing: "0.08em", textTransform: "uppercase" }}>AUB Mechanical Engineering · Class of 2028</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700, color: "#111", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-2px" }}>
              Hussein<br /><em style={{ color: "#C8522A", fontStyle: "italic" }}>Itani</em>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#666", lineHeight: 1.75, maxWidth: 440, marginBottom: 40 }}>
              Mechanical engineer with the instincts of an entrepreneur. I build things that move — machines, teams, and businesses.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => document.getElementById("engineering")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "#C8522A", color: "white", border: "none", borderRadius: 4, padding: "14px 28px", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 24px rgba(200,82,42,0.3)" }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(200,82,42,0.4)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 24px rgba(200,82,42,0.3)"; }}>
                View Projects
              </button>
              <a href="/Hussein_Itani_Resume___Mechanical.pdf" download
                style={{ background: "transparent", color: "#111", border: "1.5px solid #111", borderRadius: 4, padding: "14px 28px", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", transition: "all 0.2s", display: "inline-block" }}
                onMouseEnter={e => { e.target.style.background = "#111"; e.target.style.color = "white"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#111"; }}>
                Download CV
              </a>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 56 }}>
              {[["Dean's List", "Every Semester"], ["Merit Scholar", "AUB · LIFE"], ["30+ Deals", "Closed in 6mo"]].map(([val, label]) => (
                <div key={val}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#111" }}>{val}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#999", marginTop: 2, letterSpacing: "0.04em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="hero-cards">
            {[
              { icon: "⚙️", label: "Engineering", desc: "UAVs · Buggies · HVAC · FEA" },
              { icon: "📈", label: "Business", desc: "CEO · Sales · Six-figure operations" },
              { icon: "🎯", label: "Leadership", desc: "Teams · Treasury · Strategy" },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ background: "white", borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 2px 20px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateX(6px)"; e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)"; }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 15, color: "#111" }}>{label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#888", marginTop: 2 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 32, height: 2, background: "#C8522A" }} />
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.14em", textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

function Engineering() {
  const [active, setActive] = useState(null);
  return (
    <section id="engineering" style={{ background: "#FAFAF8", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel>Engineering Projects</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, color: "#111", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Building the<br /><em style={{ color: "#C8522A" }}>physical world</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {ENGINEERING_PROJECTS.map((p, i) => (
            <div key={p.id} className="reveal" onClick={() => setActive(active === p.id ? null : p.id)}
              style={{ background: "white", borderRadius: 16, overflow: "hidden", border: active === p.id ? `2px solid ${p.color}` : "1.5px solid rgba(0,0,0,0.07)", cursor: "pointer", transition: "all 0.3s", boxShadow: active === p.id ? `0 8px 40px ${p.color}22` : "0 2px 16px rgba(0,0,0,0.05)", animationDelay: `${i * 0.1}s` }}
              onMouseEnter={e => { if (active !== p.id) e.currentTarget.style.boxShadow = "0 6px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { if (active !== p.id) e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; }}>
              <div style={{ height: 6, background: p.color }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{ background: `${p.color}15`, color: p.color, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>{p.tag}</span>
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 6, letterSpacing: "-0.5px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#999", marginBottom: 14, fontWeight: 500 }}>{p.subtitle}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.65 }}>{p.description}</p>
                {active === p.id && (
                  <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #f0f0f0" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Key Areas</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {p.details.map(d => (
                        <span key={d} style={{ background: "#F5F5F2", color: "#444", fontFamily: "'Inter', sans-serif", fontSize: 12, padding: "6px 12px", borderRadius: 20 }}>{d}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 16, fontFamily: "'Inter', sans-serif", fontSize: 12, color: p.color, fontWeight: 600 }}>
                  {active === p.id ? "▲ Less" : "▼ More"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Business() {
  return (
    <section id="business" style={{ background: "#111", padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,82,42,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#C8522A" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.14em", textTransform: "uppercase" }}>Business Ventures</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, color: "white", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Thinking like<br /><em style={{ color: "#C8522A" }}>an entrepreneur</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="business-grid">
          <div className="reveal" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 36, gridRow: "span 2" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>Flagship Venture · 2022–Present</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "white", marginBottom: 8, letterSpacing: "-0.5px" }}>Exotic Sneakers</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>CEO, Founder & Owner</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 28 }}>
              Founded and scaled a premium sneaker retail brand from the ground up. Managing six-figure cash flows, a 10-person team, and full supply chain operations from import logistics to quality control.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["6-Figure", "Annual Cash Flow"], ["10", "Team Members"], ["2022", "Founded"], ["3+", "Years Running"]].map(([val, label]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "16px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "white" }}>{val}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 28 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Sales · 2025–Present</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "white", marginBottom: 6 }}>Trifid Media</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Salesperson & Closing Associate</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>Generated leads through scraping & research, cold-called hundreds of clients, and closed 30+ deals in 6 months.</p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <div style={{ background: "rgba(200,82,42,0.2)", borderRadius: 8, padding: "12px 16px", flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#E8804A" }}>30+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Deals Closed</div>
              </div>
              <div style={{ background: "rgba(200,82,42,0.2)", borderRadius: 8, padding: "12px 16px", flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#E8804A" }}>6mo</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Timeframe</div>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 28 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Media Agency · 2024</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "white", marginBottom: 6 }}>Dear Diary Media</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Co-Founder & Team Leader</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>Recruited and onboarded staff, delivered weekly training sessions, and managed client outreach and deal closures to grow the agency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" style={{ background: "#FAFAF8", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel>Leadership & Impact</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, color: "#111", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Moving people,<br /><em style={{ color: "#C8522A" }}>not just machines</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="leadership-grid">
          <div className="reveal" style={{ background: "white", borderRadius: 16, padding: 28, border: "1.5px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🏦</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>2025–Present</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 6 }}>Insight Club</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#888", marginBottom: 14, fontWeight: 500 }}>Treasurer & Head of Treasury</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.65 }}>Managing a 5-figure annual budget for AUB's largest student organization with 1,000+ members. Leading a 12-person treasury team across all financial planning and allocations.</p>
          </div>
          <div className="reveal" style={{ background: "white", borderRadius: 16, padding: 28, border: "1.5px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🏆</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Academic Excellence</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 6 }}>AUB Scholarships</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#888", marginBottom: 14, fontWeight: 500 }}>Merit · LIFE · CCC · MSSF</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.65 }}>Dean's Honor List in every semester. Recipient of multiple merit scholarships including the President's Merit and LIFE (Leadership, Innovation & Future Endeavors) awards.</p>
          </div>
          <div className="reveal" style={{ background: "white", borderRadius: 16, padding: 28, border: "1.5px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>📜</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#C8522A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Certifications</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 6 }}>Professional Development</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#888", marginBottom: 14, fontWeight: 500 }}>Deloitte · Yale · Macquarie</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Data Analytics — Deloitte", "Financial Markets — Yale Online", "Business Data & Excel — Macquarie"].map(cert => (
                <div key={cert} style={{ background: "#F5F5F2", borderRadius: 8, padding: "8px 12px", fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#444" }}>✓ {cert}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 64 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#111", marginBottom: 32, letterSpacing: "-0.5px" }}>Journey Timeline</h3>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 80, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #C8522A, #E8D5C4)" }} className="timeline-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 0, alignItems: "flex-start", paddingBottom: 32 }}>
                  <div style={{ width: 80, flexShrink: 0, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: "#999", paddingTop: 14, textAlign: "right", paddingRight: 20 }}>{item.year}</div>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid white", background: item.type === "engineering" ? "#2A6CC8" : item.type === "business" ? "#C8522A" : "#2A8C5A", flexShrink: 0, marginTop: 11, zIndex: 2, boxShadow: "0 0 0 3px white" }} />
                  <div style={{ flex: 1, paddingLeft: 20, paddingTop: 6, background: "white", borderRadius: 12, padding: "16px 20px", marginLeft: 12, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, color: "#111", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section style={{ background: "#F2EDE5", padding: "80px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel>Skills & Tools</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#111", letterSpacing: "-1px" }}>
            The full toolkit
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {SKILLS.map((s, i) => (
            <div key={s.category} className="reveal" style={{ background: "white", borderRadius: 12, padding: "20px 20px", border: "1px solid rgba(0,0,0,0.06)", animationDelay: `${i * 0.08}s` }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, color: "#111", marginBottom: 12, letterSpacing: "0.02em" }}>{s.category}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {s.items.map(item => (
                  <div key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#C8522A", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 40, background: "white", borderRadius: 12, padding: "20px 28px", border: "1px solid rgba(0,0,0,0.06)", display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: "#999", letterSpacing: "0.08em", textTransform: "uppercase" }}>Languages</span>
          {["English", "Arabic", "German"].map(lang => (
            <span key={lang} style={{ background: "#F5F5F2", borderRadius: 20, padding: "6px 16px", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#333" }}>{lang}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#FAFAF8", padding: "100px 5%" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="reveal">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#111", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 16 }}>
            Let's build<br /><em style={{ color: "#C8522A" }}>something great</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#888", marginBottom: 48, lineHeight: 1.6 }}>
            Open to engineering internships, research collaborations, and business opportunities.
          </p>
        </div>
        {!sent ? (
          <div className="reveal" style={{ background: "white", borderRadius: 20, padding: "40px", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 40px rgba(0,0,0,0.06)", textAlign: "left" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E8E8E4", fontFamily: "'Inter', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", background: "#FAFAF8" }} />
              </div>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email</label>
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" type="email"
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E8E8E4", fontFamily: "'Inter', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box", background: "#FAFAF8" }} />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me what you're working on..." rows={5}
                style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E8E8E4", fontFamily: "'Inter', sans-serif", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", background: "#FAFAF8" }} />
            </div>
            <button onClick={handleSubmit}
              style={{ width: "100%", background: "#C8522A", color: "white", border: "none", borderRadius: 8, padding: "14px", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 20px rgba(200,82,42,0.3)" }}
              onMouseEnter={e => e.target.style.background = "#A83F1E"}
              onMouseLeave={e => e.target.style.background = "#C8522A"}>
              Send Message
            </button>
          </div>
        ) : (
          <div className="reveal" style={{ background: "white", borderRadius: 20, padding: "60px 40px", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 40px rgba(0,0,0,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#111", marginBottom: 10 }}>Message sent!</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#888" }}>I'll get back to you soon.</p>
          </div>
        )}
        <div className="reveal" style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/husseinitani", icon: "🔗" },
            { label: "Email", href: "mailto:Hti02@mail.aub.edu", icon: "✉️" },
            { label: "Phone", href: "tel:+96181826512", icon: "📱" },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 8, background: "white", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 8, padding: "12px 20px", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: "#333", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.border = "1.5px solid #C8522A"; e.currentTarget.style.color = "#C8522A"; }}
              onMouseLeave={e => { e.currentTarget.style.border = "1.5px solid rgba(0,0,0,0.08)"; e.currentTarget.style.color = "#333"; }}>
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#111", padding: "32px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "white", fontWeight: 700 }}>Hussein Itani</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>© 2025 · husseinitani.me</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>BEng Mechanical Engineering · AUB</div>
    </footer>
  );
}

export default function App() {
  useScrollReveal();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #FAFAF8; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media(max-width:768px){
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cards { display: none !important; }
          .business-grid { grid-template-columns: 1fr !important; }
          .leadership-grid { grid-template-columns: 1fr !important; }
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .timeline-line { left: 60px !important; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Engineering />
      <Business />
      <Leadership />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
