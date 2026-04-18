import { useInView, SectionLabel, SectionTitle } from "./Shared";

import { GraduationCap, Zap, Rocket, Target } from "lucide-react";

const ABOUT_CARDS = [
  [<GraduationCap />, "Status", "Fresher · Open to Work"],
  [<Zap />, "Specialization", "MERN Stack Development"],
  [<Rocket />, "Live Project", "studyhubedu.online"],
  [<Target />, "Looking For", "Junior Dev / Internship"],
];
export default function About() {
  const [ref, visible] = useInView();
  const v = visible ? " visible" : "";

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "5.5rem clamp(1.2rem,6vw,4rem)",
        background: "var(--bg2)",
        transition: "background 0.4s",
      }}
    >
      <div className={`fade-up${v}`}>
        <SectionLabel>// about me</SectionLabel>
        <SectionTitle>
          About <span style={{ color: "var(--accent)" }}>Me</span>
        </SectionTitle>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* Text */}
        <div className={`fade-up d1${v}`}>
          <p
            style={{
              fontSize: "0.93rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              marginBottom: "1.1rem",
            }}
          >
            I'm <strong style={{ color: "var(--text)" }}>Abdal Qamar</strong> —
            a MERN Stack developer who recently shipped a full-stack production
            project. I love building end-to-end applications, handling
            everything from frontend UI to backend auth, payments, and automated
            emails.
          </p>
          <p
            style={{
              fontSize: "0.93rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              marginBottom: "1.1rem",
            }}
          >
            My hands-on experience includes designing{" "}
            <strong style={{ color: "var(--text)" }}>
              role-based systems, payment workflows, and REST APIs
            </strong>{" "}
            — all implemented in my live project{" "}
            <strong style={{ color: "var(--cyan)" }}>StudyHub LMS</strong>,
            which is deployed and publicly accessible.
          </p>
          <p
            style={{
              fontSize: "0.93rem",
              color: "var(--muted)",
              lineHeight: 1.85,
            }}
          >
            I'm actively seeking{" "}
            <strong style={{ color: "var(--text)" }}>
              junior developer or internship opportunities
            </strong>{" "}
            where I can grow, contribute to a real team, and work on impactful
            products.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`fade-up d2${v}`}
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          {ABOUT_CARDS.map(([icon, label, val]) => (
            <div
              key={label}
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1rem 1.3rem",
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                transition: "border-color 0.2s, background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--border2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              <span style={{ fontSize: "1.4rem", minWidth: "1.8rem" }}>
                {icon}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "0.62rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    marginBottom: "0.15rem",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  {val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
