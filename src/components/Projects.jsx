import {
  useInView,
  SectionLabel,
  SectionTitle,
  BtnPri,
  BtnSec,
} from "./Shared";
import { PROJECTS } from "../data/portfolioData";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const [ref, visible] = useInView();
  const v = visible ? " visible" : "";

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "5.5rem clamp(1.2rem,6vw,4rem)",
        background: "var(--bg2)",
        transition: "background 0.4s",
      }}
    >
      <div className={`fade-up${v}`}>
        <SectionLabel>// what I've built</SectionLabel>
        <SectionTitle>
          Featured <span style={{ color: "var(--accent)" }}>Project</span>
        </SectionTitle>
      </div>

      {PROJECTS.map((project, i) => (
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.1}
        >
          <ProjectCard
            key={project.id}
            project={project}
            delay={`d${i + 1}`}
            visible={visible}
          />
        </Tilt>
      ))}

      {/* More projects teaser */}
      <div
        className={`fade-up d${PROJECTS.length + 1}${v}`}
        style={{
          marginTop: "1.3rem",
          background: "var(--more-bg)",
          border: "1px dashed var(--border2)",
          borderRadius: "12px",
          padding: "1.5rem 1.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          transition: "background 0.4s",
        }}
      >
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              marginBottom: "0.25rem",
            }}
          >
            More projects coming soon...
          </h4>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
            Currently building more. Check my GitHub for the latest work.
          </p>
        </div>
        <BtnSec href="https://github.com/abdalqamar">GitHub Profile →</BtnSec>
      </div>
    </section>
  );
}

//  Project card
function ProjectCard({ project, delay, visible }) {
  const { badge, title, subtitle, desc, features, stack, liveUrl, githubUrl } =
    project;

  return (
    <div
      className={`fade-up ${delay}${visible ? " visible" : ""}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "1.3rem",
        transition: "border-color 0.3s, background 0.4s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--border2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      {/* Top gradient bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg,var(--accent),var(--cyan),var(--pink))",
        }}
      />

      <div style={{ padding: "clamp(1.4rem,4vw,2.2rem)" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.1rem",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                background: "rgba(240,95,168,0.1)",
                border: "1px solid rgba(240,95,168,0.3)",
                color: "var(--pink)",
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                padding: "0.2rem 0.65rem",
                borderRadius: "4px",
                marginBottom: "0.7rem",
              }}
            >
              {badge}
            </span>
            <h3
              style={{
                fontSize: "clamp(1.5rem,3.5vw,2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.75rem",
                color: "var(--cyan)",
                marginTop: "0.25rem",
                letterSpacing: "0.04em",
              }}
            >
              // {subtitle}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <BtnPri href={liveUrl}>↗ Live Demo</BtnPri>
            <BtnSec href={githubUrl}>⌥ GitHub</BtnSec>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: "700px",
            marginBottom: "1.8rem",
          }}
        >
          {desc}
        </p>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(min(100%,270px),1fr))",
            gap: "0.65rem",
            marginBottom: "0.5rem",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "6px",
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  lineHeight: 1.55,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack footer */}
      <div
        style={{
          padding: "1.1rem clamp(1.4rem,4vw,2.2rem)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.62rem",
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginRight: "0.3rem",
          }}
        >
          Stack:
        </span>
        {stack.map((t) => (
          <span
            key={t}
            style={{
              background: "var(--hot-bg)",
              border: "1px solid var(--hot-br)",
              color: "var(--hot-cl)",
              borderRadius: "4px",
              padding: "0.18rem 0.58rem",
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.64rem",
              letterSpacing: "0.03em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
