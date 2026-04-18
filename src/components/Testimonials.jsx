import { useInView, SectionLabel, SectionTitle } from "./Shared";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Your Professor / Mentor",
    role: "Faculty, Computer Science",
    avatar: "PM",
    color: "#6e54f7",
    text: "Abdal is a highly motivated developer who goes beyond coursework to build real production projects. His StudyHub LMS demonstrated excellent understanding of full-stack architecture, authentication systems, and payment integration.",
  },
  {
    id: 2,
    name: "Friend / Peer Developer",
    role: "Fellow Developer",
    avatar: "FD",
    color: "#00d9f5",
    text: "Working alongside Abdal, I've seen his dedication first-hand. He built a complete LMS from scratch — JWT auth, payments, role-based access — as a fresher. That level of initiative is rare.",
  },
  {
    id: 3,
    name: "Client Name (Optional)",
    role: "Business Owner",
    avatar: "CL",
    color: "#f05fa8",
    text: "Abdal delivered exactly what was discussed — clean code, on time, and with features I didn't even ask for. The attention to detail in his work is impressive for someone just starting out.",
  },
];

function TestimonialCard({ t, delay, visible }) {
  const v = visible ? " visible" : "";
  return (
    <div
      className={`fade-up ${delay}${v}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.8rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        transition: "border-color 0.2s, background 0.4s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--border2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          borderRadius: "16px 16px 0 0",
          background: `linear-gradient(90deg, ${t.color}, transparent)`,
        }}
      />

      {/* Big quote mark */}
      <div
        style={{
          fontSize: "3.5rem",
          lineHeight: 1,
          color: t.color,
          opacity: 0.2,
          fontFamily: "Georgia, serif",
          userSelect: "none",
          marginBottom: "-0.5rem",
        }}
      >
        "
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--text)",
          lineHeight: 1.85,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        "{t.text}"
      </p>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: t.color + "22",
            border: `1.5px solid ${t.color}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: t.color,
            flexShrink: 0,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "0.88rem",
              color: "var(--text)",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              color: "var(--muted)",
              fontFamily: "'Space Mono', monospace",
              marginTop: "0.1rem",
            }}
          >
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useInView();
  const v = visible ? " visible" : "";

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "5.5rem clamp(1.2rem, 6vw, 4rem)",
        background: "var(--bg2)",
        transition: "background 0.4s",
      }}
    >
      {/* Header — centered */}
      <div
        className={`fade-up${v}`}
        style={{ textAlign: "center", marginBottom: "0" }}
      >
        <SectionLabel>// what people say</SectionLabel>
        <SectionTitle>Testimonials</SectionTitle>
      </div>

      {/* ── Desktop: 3 cards  */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "1.2rem",
          alignItems: "stretch",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={t.id}
            t={t}
            delay={`d${i + 1}`}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
}
