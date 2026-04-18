import { useState, useEffect } from "react";
import { BtnPri, BtnSec } from "./Shared";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const cls = (delay = "") => `fade-up${mounted ? " visible" : ""} ${delay}`;

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem clamp(1.2rem,6vw,4rem) 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          background: "radial-gradient(circle,var(--orb1) 0%,transparent 65%)",
          top: "-180px",
          right: "-180px",
          pointerEvents: "none",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle,var(--orb2) 0%,transparent 65%)",
          bottom: "-80px",
          left: "0",
          pointerEvents: "none",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      <div
        style={{
          maxWidth: "820px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div className={cls("d1")} style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(0,217,245,0.08)",
              border: "1px solid rgba(0,217,245,0.25)",
              borderRadius: "100px",
              padding: "0.32rem 1rem",
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.68rem",
              color: "var(--cyan)",
              letterSpacing: "0.08em",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--cyan)",
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            Open to Work · Available Now
          </span>
        </div>

        {/* Name */}
        <div className={cls("d2")}>
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "clamp(0.75rem,1.5vw,0.9rem)",
              color: "var(--muted)",
              letterSpacing: "0.15em",
              marginBottom: "0.3rem",
            }}
          >
            // Hello, I'm
          </p>
          <h1
            style={{
              fontSize: "clamp(3.2rem,10vw,6.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              marginBottom: "0.05rem",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg,#a594ff 0%,var(--cyan) 50%,var(--pink) 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "grad-x 4s ease infinite",
              }}
            >
              Abdal
            </span>
          </h1>
          <h1
            style={{
              fontSize: "clamp(3.2rem,10vw,6.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              marginBottom: "1.1rem",
            }}
          >
            Qamar
          </h1>
        </div>

        {/* Role */}
        <div className={cls("d3")}>
          <p
            style={{
              fontSize: "clamp(1rem,2.5vw,1.3rem)",
              color: "var(--muted)",
              marginBottom: "1.5rem",
              lineHeight: 1.6,
            }}
          >
            Fullstack Developer &nbsp;
            <span
              style={{
                fontFamily: "'Space Mono',monospace",
                color: "var(--cyan)",
                fontSize: "0.9em",
              }}
            >
              // MERN Stack
            </span>
          </p>
        </div>

        {/* Description */}
        <div className={cls("d4")}>
          <p
            style={{
              fontSize: "clamp(0.88rem,1.8vw,1rem)",
              color: "var(--muted)",
              lineHeight: 1.9,
              maxWidth: "530px",
              marginBottom: "2.2rem",
            }}
          >
            I build production-ready, full-stack web applications with clean
            architecture and real-world features — from secure authentication
            and role-based systems to payment workflows and automated emails.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={cls("d5")}
          style={{
            display: "flex",
            gap: "0.9rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <BtnPri href="#projects">View My Project ↓</BtnPri>
          <BtnSec href="https://www.studyhubedu.online/">↗ Live Project</BtnSec>
        </div>

        {/* Stats */}
        <div
          className={cls("d5")}
          style={{
            display: "flex",
            gap: "clamp(1.5rem,4vw,3rem)",
            flexWrap: "wrap",
          }}
        >
          {[
            ["1", "Live Project"],
            ["12+", "Technologies"],
            ["MERN", "Core Stack"],
            ["✓", "Available Now"],
          ].map(([val, lbl]) => (
            <div key={lbl}>
              <span
                style={{
                  fontSize: "clamp(1.5rem,3vw,2.2rem)",
                  fontWeight: 800,
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {val}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "0.62rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  marginTop: "0.3rem",
                  display: "block",
                }}
              >
                {lbl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
