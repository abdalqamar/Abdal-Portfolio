import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { BtnPri } from "./Shared";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.85rem clamp(1.2rem, 5vw, 2.5rem)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Logo — left */}
      <div
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        abdal<span style={{ color: "var(--cyan)" }}>.dev</span>
      </div>

      {/* Links  */}
      <ul
        className="desktop-nav"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1.8rem",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.73rem",
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right — toggle + hire me */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexShrink: 0,
        }}
      >
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <ThemeToggle />
          <BtnPri href="#contact">Hire Me</BtnPri>
        </div>
        <div
          className="hamburger"
          style={{ display: "none", alignItems: "center", gap: "0.6rem" }}
        >
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              color: "var(--text)",
              cursor: "pointer",
              padding: "0.42rem 0.6rem",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: "var(--mob-bg)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            zIndex: 999,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.85rem",
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
