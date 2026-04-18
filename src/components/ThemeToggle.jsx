import { useTheme } from "../context/themeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
      style={{
        width: "52px",
        height: "28px",
        borderRadius: "14px",
        border: "1.5px solid var(--border2)",
        background: dark ? "rgba(110,84,247,0.18)" : "rgba(110,84,247,0.1)",
        cursor: "pointer",
        padding: "3px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        transition: "background 0.35s, border-color 0.35s",
        flexShrink: 0,
      }}
    >
      {/* Background icons */}
      <span
        style={{
          position: "absolute",
          left: "6px",
          opacity: dark ? 0.5 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <Moon size={14} />
      </span>

      <span
        style={{
          position: "absolute",
          right: "6px",
          opacity: dark ? 0 : 0.7,
          transition: "opacity 0.3s",
        }}
      >
        <Sun size={14} />
      </span>

      {/* Sliding thumb */}
      <span
        key={dark ? "dark" : "light"}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          transform: dark ? "translateX(0)" : "translateX(24px)",
          transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
          boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
          animation: "thumb-pop 0.25s ease",
        }}
      >
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}
