import { useInView, SectionLabel, SectionTitle, Chip } from "./Shared";
import {
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  INTEGRATION_SKILLS,
  TOOL_SKILLS,
} from "../data/portfolioData";

function SkillGroup({ title, skills, delay, visible }) {
  return (
    <div className={`fade-up ${delay}${visible ? " visible" : ""}`}>
      <h4
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "0.7rem",
          color: "var(--cyan)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "0.9rem",
          paddingBottom: "0.45rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {title}
      </h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {skills.map((s) => (
          <Chip key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "5.5rem clamp(1.2rem,6vw,4rem)" }}
    >
      <div className={`fade-up${visible ? " visible" : ""}`}>
        <SectionLabel>// tech stack</SectionLabel>
        <SectionTitle>
          Skills &amp;{" "}
          <span style={{ color: "var(--accent)" }}>Technologies</span>
        </SectionTitle>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
          gap: "2.2rem",
        }}
      >
        <SkillGroup
          title="Frontend"
          skills={FRONTEND_SKILLS}
          delay="d1"
          visible={visible}
        />
        <SkillGroup
          title="Backend"
          skills={BACKEND_SKILLS}
          delay="d2"
          visible={visible}
        />
        <SkillGroup
          title="Integrations"
          skills={INTEGRATION_SKILLS}
          delay="d3"
          visible={visible}
        />
        <SkillGroup
          title="Tools"
          skills={TOOL_SKILLS}
          delay="d4"
          visible={visible}
        />
      </div>
    </section>
  );
}
