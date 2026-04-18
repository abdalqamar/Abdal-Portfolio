import { useState } from "react";

export default function ResumeButton({ variant = "primary" }) {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  function handleClick() {
    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    }, 1200);
  }

  const label = done
    ? "Downloaded ✓"
    : downloading
      ? "Downloading..."
      : "Download Resume";

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.78rem 1.75rem",
    borderRadius: "8px",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.74rem",
    letterSpacing: "0.06em",
    textDecoration: "none",
    cursor: downloading ? "wait" : "pointer",
    transition: "all 0.2s",
    border: "none",
    userSelect: "none",
  };

  const styles = {
    primary: {
      ...base,
      background: done ? "#2e7d32" : "var(--accent)",
      color: "#fff",
    },
    ghost: {
      ...base,
      background: "transparent",
      color: done ? "#4caf50" : "var(--cyan)",
      border: `1px solid ${done ? "rgba(76,175,80,0.4)" : "rgba(0,217,245,0.3)"}`,
    },
  };

  return (
    <a
      href="/resume-abdal-qamar.pdf"
      download="Abdal-Qamar-Resume.pdf"
      onClick={handleClick}
      style={styles[variant]}
      onMouseEnter={(e) => {
        if (!downloading && !done) {
          e.currentTarget.style.transform = "translateY(-2px)";
          if (variant === "primary")
            e.currentTarget.style.background = "var(--accent-h)";
          if (variant === "ghost")
            e.currentTarget.style.background = "rgba(0,217,245,0.07)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        if (variant === "primary")
          e.currentTarget.style.background = done ? "#2e7d32" : "var(--accent)";
        if (variant === "ghost")
          e.currentTarget.style.background = "transparent";
      }}
    >
      {/* Icon */}
      <span style={{ fontSize: "14px" }}>
        {done ? "✅" : downloading ? "⏳" : "📄"}
      </span>

      {label}
    </a>
  );
}
