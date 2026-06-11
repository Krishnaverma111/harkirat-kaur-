import React, { useState } from "react";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react";
import img from "./images/harkirat.jpg"
import pdf from "./images/harkirat Kaur.pdf"



const skills = [
  { label: "Manual Testing", level: 90 },
  { label: "Bug Reporting", level: 85 },
  { label: "Test Cases", level: 88 },
  { label: "Regression Testing", level: 80 },
  { label: "Client Handling", level: 82 },
  { label: "Communication", level: 92 },
];

const pteScores = [
  { label: "Overall", score: 7 },
  { label: "Speaking", score: 8 },
  { label: "Listening", score: 7 },
  { label: "Reading", score: 7 },
];

const education = [
  { degree: "MBA (Pursuing)", school: "Budha College", year: "2024 – Present" },
  { degree: "BCA — First Division", school: "Kurukshetra University", year: "2021 – 2024" },
  { degree: "PTE — Certified", school: "Pearson Test of English", year: "2024" },
];

const navLinks = ["Home", "About", "Resume", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0a0c10", color: "#fff", minHeight: "100vh" }}>

      {/* ── NAV ── */}
    
      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", paddingTop: 56
      }}>
        {/* dark gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(120deg, rgba(10,12,16,0.97) 45%, rgba(0,188,212,0.08) 100%)"
        }} />

        {/* subtle grid texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)"
        }} />

        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: 1100, margin: "0 auto", padding: "0 2rem",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center"
        }} className="hero-grid">

          <div>
            {/* eyebrow */}
            <p style={{ fontSize: 12, letterSpacing: 4, color: "#00bcd4", marginBottom: 16, textTransform: "uppercase" }}>
              Quality Analyst · MBA Student
            </p>

            <h1 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
              HARKIRAT<br />
              <span style={{ color: "#00bcd4" }}>KAUR</span>
            </h1>

            <p style={{ marginTop: 20, color: "#9ca3af", lineHeight: 1.8, maxWidth: 480, fontSize: 15 }}>
              Detail-oriented Quality Analyst with 1+ years of experience in Manual Testing,
              Bug Reporting, Test Case Execution, and Client Communication.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#resume"
                style={{
                  background: "transparent", border: "1.5px solid #00bcd4",
                  color: "#00bcd4", padding: "10px 28px", borderRadius: 4,
                  fontWeight: 600, fontSize: 13, letterSpacing: 1, cursor: "pointer",
                  textDecoration: "none", transition: "background .2s, color .2s"
                }}
                onMouseEnter={e => { e.target.style.background = "#00bcd4"; e.target.style.color = "#000"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#00bcd4"; }}>
                <a
                  href={pdf}
                  download="Harkirat-Kaur-Resume.pdf"
                >
                  Download Resume
                </a>
              </a>
              <a href="#contact"
                style={{
                  background: "transparent", border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "#fff", padding: "10px 28px", borderRadius: 4,
                  fontWeight: 600, fontSize: 13, letterSpacing: 1, cursor: "pointer",
                  textDecoration: "none"
                }}>
                CONTACT
              </a>
            </div>

            {/* social row placeholder */}
            <div style={{ marginTop: 40, display: "flex", gap: 16, alignItems: "center" }}>
              {["in", "G+", "✉"].map(s => (
                <span key={s} style={{
                  width: 32, height: 32, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, color: "#9ca3af", cursor: "pointer"
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* profile photo area */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: 320, height: 380, borderRadius: 2,
                background: "linear-gradient(160deg,#111318 0%,#1a1d24 100%)",
                border: "1px solid rgba(0,188,212,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", position: "relative"
              }}>
                {/* Replace src with actual img import in a real project */}
                <div style={{
                  width: "100%", height: "100%",
                  background: "linear-gradient(160deg,#1a2030,#0d1520)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 12
                }}>

                  <img
                    src={img}
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />

                </div>



                {/* cyan accent bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 3, background: "#00bcd4"
                }} />
              </div>

              {/* floating badge */}
              <div style={{
                position: "absolute", bottom: -20, right: -20,
                background: "#00bcd4", color: "#000",
                padding: "10px 16px", borderRadius: 2,
                fontWeight: 700, fontSize: 12, letterSpacing: 1
              }}>
                QA ANALYST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{
        padding: "100px 2rem",
        background: "#0d0f14"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">

          {/* B&W style photo block */}
          <div className="hidden md:block" style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "3/4", maxWidth: 420,
              background: "linear-gradient(180deg,#111318 0%,#0d0f14 100%)",
              borderRadius: 2, overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.06)"
            }}>
              <div style={{ textAlign: "center", color: "#9ca3af" }}>
                <div style={{ fontSize: 64, marginBottom: 8 }}>  <img
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                /></div>

              </div>
            </div>

            {/* location tag (matches design) */}
            <div style={{
              position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
              background: "rgba(10,12,16,0.9)", border: "1px solid rgba(0,188,212,0.3)",
              padding: "8px 20px", whiteSpace: "nowrap"
            }}>
              <p style={{ fontSize: 11, letterSpacing: 3, color: "#9ca3af", margin: 0 }}>KARNAL, HARYANA</p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 11, letterSpacing: 4, color: "#00bcd4", marginBottom: 8, textTransform: "uppercase" }}>Who I am</p>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, margin: "0 0 8px" }}>ABOUT</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 24 }}>kharkirat2004@gmail.com</p>

            <p style={{ color: "#c9cdd4", lineHeight: 1.9, fontSize: 15 }}>
              I am currently pursuing an MBA from Budha College while leveraging my BCA
              background to bridge business and technology. I have cleared the PTE (Pearson
              Test of English) with an Overall Score of 7 and a Speaking Score of 8, demonstrating
              strong communication skills essential for client-facing QA roles.
            </p>

            <p style={{ color: "#c9cdd4", lineHeight: 1.9, fontSize: 15, marginTop: 16 }}>
              I enjoy testing applications, writing thorough test cases, and ensuring high-quality
              software delivery — always with an eye for the edge case that everyone else missed.
            </p>

            {/* mini stats */}
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["1+", "Years Experience"], ["PTE 7/8", "English Score"], ["BCA", "First Division"], ["MBA", "Pursuing"]].map(([n, l]) => (
                <div key={l} style={{
                  borderLeft: "2px solid #00bcd4", paddingLeft: 12
                }}>
                  <p style={{ fontSize: 22, fontWeight: 800, margin: 0, color: "#00bcd4" }}>{n}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, letterSpacing: 1 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESUME / SKILLS / EDUCATION ── */}
      <section id="resume" style={{ padding: "100px 2rem", background: "#0a0c10", position: "relative" }}>
        {/* faint background text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "clamp(6rem,15vw,14rem)", fontWeight: 900,
          color: "rgba(255,255,255,0.02)", letterSpacing: 8, pointerEvents: "none",
          userSelect: "none", whiteSpace: "nowrap"
        }}>RESUME </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: "#00bcd4", textAlign: "center", textTransform: "uppercase" }}>My Qualifications</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, textAlign: "center", margin: "0 0 60px" }}>RESUME</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: 40 }} className="resume-grid">

            {/* col 1 – Skills bars */}
            <div>
              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
                QA SKILLS
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {skills.map(({ label, level }) => (
                  <div key={label}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, color: "#c9cdd4" }}>{label}</span>
                      <span style={{ fontSize: 12, color: "#00bcd4" }}>{level}%</span>
                    </div>
                    <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 1 }}>
                      <div style={{ height: "100%", width: `${level}%`, background: "#00bcd4", borderRadius: 1 }} />
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, margin: "40px 0 24px" }}>
                LANGUAGES
              </h3>
              {[["English", 90], ["Hindi", 95], ["Punjabi", 85]].map(([l, v]) => (
                <div key={l} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "#c9cdd4" }}>{l}</span>
                  </div>
                  <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 1 }}>
                    <div style={{ height: "100%", width: `${v}%`, background: "rgba(0,188,212,0.5)", borderRadius: 1 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* col 2 – Experience timeline (vertical line like reference) */}
            <div>
              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
                EXPERIENCE
              </h3>

              <div style={{ position: "relative", paddingLeft: 32 }}>
                {/* vertical line */}
                <div style={{ position: "absolute", left: 9, top: 0, bottom: 0, width: 1, background: "rgba(0,188,212,0.25)" }} />

                {[
                  { period: "2023 – 2024", company: "TechSoft Solutions", role: "Quality Analyst", desc: "Manual testing, bug reporting, and test case execution for enterprise web apps." },
                  { period: "2022 – 2023", company: "Internship Project", role: "QA Intern", desc: "Assisted in regression testing and client communication during UAT cycles." },
                  { period: "2021 – 2022", company: "Academic Projects", role: "Team Lead — QA", desc: "Led test case design and execution for BCA final year software project." },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: 32, position: "relative" }}>
                    {/* dot */}
                    <div style={{
                      position: "absolute", left: -32 + 5, top: 4,
                      width: 10, height: 10, borderRadius: "50%",
                      background: "#00bcd4", border: "2px solid #0a0c10"
                    }} />

                    <div style={{
                      display: "inline-block", fontSize: 10, letterSpacing: 2,
                      background: "rgba(0,188,212,0.1)", border: "1px solid rgba(0,188,212,0.3)",
                      color: "#00bcd4", padding: "2px 8px", marginBottom: 6
                    }}>{item.period}</div>

                    <h4 style={{ margin: "0 0 2px", fontSize: 15, fontWeight: 700 }}>{item.company}</h4>
                    <p style={{ margin: "0 0 6px", fontSize: 12, color: "#00bcd4", letterSpacing: 1 }}>{item.role}</p>
                    <p style={{ margin: 0, fontSize: 13, color: "#9ca3af", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Education under experience (matches reference layout) */}
              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, margin: "8px 0 24px" }}>
                EDUCATION
              </h3>
              {education.map(({ degree, school, year }) => (
                <div key={degree} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{degree}</p>
                      <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>{school}</p>
                    </div>
                    <span style={{ fontSize: 11, color: "#00bcd4", whiteSpace: "nowrap", marginLeft: 12 }}>{year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* col 3 – What can I do + PTE + personal skills */}
            <div>
              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
                WHAT CAN I DO?
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 8 }}>
                {["Functional Testing", "Test Case Design", "Bug Lifecycle Mgmt", "UAT Support", "Client Communication", "Defect Reporting"].map(s => (
                  <li key={s} style={{ fontSize: 13, color: "#9ca3af", paddingLeft: 12, borderLeft: "2px solid rgba(0,188,212,0.4)" }}>{s}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, marginBottom: 24 }}>
                PTE SCORES
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {pteScores.map(({ label, score }) => (
                  <div key={label} style={{
                    background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.2)",
                    padding: "14px 10px", textAlign: "center", borderRadius: 2
                  }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "#00bcd4", margin: 0 }}>{score}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af", margin: 0, letterSpacing: 1 }}>{label}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 13, letterSpacing: 3, color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 12, margin: "32px 0 16px" }}>
                PERSONAL SKILLS
              </h3>
              <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.8 }}>
                Attention to Detail · Team Work · Adaptability · Time Management · Critical Thinking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        padding: "100px 2rem",
        background: "#0d0f14"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: 4, color: "#00bcd4", textAlign: "center", textTransform: "uppercase" }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, textAlign: "center", margin: "0 0 60px" }}>CONTACT</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="contact-grid">
            {[
              { icon: <Phone size={24} />, label: "Phone", value: "8059780792" },
              { icon: <Mail size={24} />, label: "Email", value: "kharkirat2004@gmail.com" },
              { icon: <MapPin size={24} />, label: "Location", value: "Karnal, Haryana" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                background: "#111318", border: "1px solid rgba(255,255,255,0.06)",
                padding: "32px 20px", textAlign: "center", borderRadius: 2,
                transition: "border-color .2s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,188,212,0.4)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
              >
                <div style={{ color: "#00bcd4", marginBottom: 12, display: "flex", justifyContent: "center" }}>{icon}</div>
                <p style={{ fontSize: 11, letterSpacing: 3, color: "#9ca3af", margin: "0 0 6px", textTransform: "uppercase" }}>{label}</p>
                <p style={{ fontSize: 14, color: "#fff", margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "20px 2rem", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#0a0c10"
      }}>
        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, letterSpacing: 2 }}>
          © 2024 HARKIRAT KAUR — ALL RIGHTS RESERVED
        </p>
      </footer>

      {/* ── RESPONSIVE OVERRIDES ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .about-grid { grid-template-columns: 1fr !important; }
          .resume-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </div>
    </>
  );
}