import { FOOTER_LINKS } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "1.6rem clamp(1.2rem,6vw,4rem)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.8rem",
        transition: "background 0.4s",
      }}
    >
      <p
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "0.68rem",
          color: "var(--muted)",
        }}
      >
        © 2026 Abdal Qamar · Designed &amp; Built with ❤️
      </p>
      <div style={{ display: "flex", gap: "1.2rem" }}>
        {FOOTER_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.68rem",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
