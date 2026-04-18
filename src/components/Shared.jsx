import { useRef, useEffect, useState } from "react";

// useInView hook

export function useInView(threshold = 0.14) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

// Section Label
export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.7rem",
        color: "var(--cyan)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "0.45rem",
      }}
    >
      {children}
    </p>
  );
}

//  Section Title

export function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        marginBottom: "2.8rem",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  );
}

export function Chip({ name, hot }) {
  return (
    <span
      style={{
        background: hot ? "var(--hot-bg)" : "var(--chip-bg)",
        border: `1px solid ${hot ? "var(--hot-br)" : "var(--chip-br)"}`,
        color: hot ? "var(--hot-cl)" : "var(--muted)",
        borderRadius: "6px",
        padding: "0.36rem 0.82rem",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.69rem",
        letterSpacing: "0.04em",
        display: "inline-block",
        transition: "all 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--text)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = hot
          ? "var(--hot-br)"
          : "var(--chip-br)";
        e.currentTarget.style.color = hot ? "var(--hot-cl)" : "var(--muted)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {name}
    </span>
  );
}

// primary button
export function BtnPri({ href, children, onClick }) {
  const style = {
    padding: "0.78rem 1.75rem",
    background: "var(--accent)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.74rem",
    letterSpacing: "0.06em",
    transition: "all 0.2s",
    display: "inline-block",
    border: "none",
    cursor: "pointer",
  };
  const onEnter = (e) => {
    e.currentTarget.style.background = "var(--accent-h)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.background = "var(--accent)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  if (onClick) {
    return (
      <button
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

//  Secondary Button

export function BtnSec({ href, children }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        padding: "0.78rem 1.75rem",
        background: "transparent",
        color: "var(--cyan)",
        textDecoration: "none",
        borderRadius: "8px",
        border: "1px solid rgba(0,217,245,0.3)",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.74rem",
        letterSpacing: "0.06em",
        transition: "all 0.2s",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,217,245,0.07)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}
