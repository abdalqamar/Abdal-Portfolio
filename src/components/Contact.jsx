import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Globe } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// EmailJS Config
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [error, setError] = useState("");

  // Validation
  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please write a message.";
    return null;
  }
  const CONTACT_LINKS = [
    {
      icon: <Mail size={18} />,
      label: "abdalqamar10@gmail.com",
      href: "mailto:abdalqamar10@gmail.com",
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "linkedin.com/in/abdalqamar",
      href: "https://linkedin.com/in/abdalqamar",
    },
    {
      icon: <FaGithub size={18} />,
      label: "github.com/abdalqamar",
      href: "https://github.com/abdalqamar",
    },
    {
      icon: <Globe size={18} />,
      label: "studyhubedu.online",
      href: "https://www.studyhubedu.online/",
    },
  ];

  async function handleSubmit() {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        PUBLIC_KEY,
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" }); // form reset
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  }

  const inputStyle = {
    width: "100%",
    background: "var(--inp-bg)",
    border: "1px solid var(--border)",
    borderRadius: "7px",
    padding: "0.7rem 0.95rem",
    color: "var(--text)",
    fontFamily: "'Syne', sans-serif",
    fontSize: "0.87rem",
    outline: "none",
    transition: "border-color 0.2s, background 0.3s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.62rem",
    color: "var(--muted)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.35rem",
  };

  return (
    <section
      id="contact"
      style={{ padding: "5.5rem clamp(1.2rem, 6vw, 4rem)" }}
    >
      {/* Section header */}
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
        // let's talk
      </p>
      <h2
        style={{
          fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "2.8rem",
          lineHeight: 1.1,
        }}
      >
        Get In <span style={{ color: "var(--accent)" }}>Touch</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* {left info} */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "0.7rem",
            }}
          >
            Ready for opportunities! 🚀
          </h3>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1.8rem",
            }}
          >
            I'm actively looking for junior developer roles and internships. If
            you have an opening or just want to connect — I'd love to hear from
            you!
          </p>

          {/* Contact links */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {CONTACT_LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "0.83rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "7px",
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    flexShrink: 0,
                    transition: "background 0.3s",
                  }}
                >
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/*  Right Form  */}
        <div
          style={{
            background: "var(--form-bg)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.8rem",
            transition: "background 0.4s",
          }}
        >
          {/* Success state  */}
          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Message Sent!
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  marginBottom: "1.2rem",
                }}
              >
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  color: "var(--muted)",
                  cursor: "pointer",
                  padding: "0.5rem 1.2rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                Send another →
              </button>
            </div>
          ) : (
            /* Form fields */
            <div ref={formRef}>
              {/* Name */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  disabled={status === "sending"}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  disabled={status === "sending"}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Hiring? Have a project idea? Let's talk..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "100px",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  disabled={status === "sending"}
                />
              </div>

              {/* Error message */}
              {error && (
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#f05f5f",
                    marginBottom: "0.75rem",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  ⚠ {error}
                </p>
              )}

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  background:
                    status === "sending" ? "var(--muted)" : "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "7px",
                  padding: "0.88rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  marginTop: "0.2rem",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "var(--accent-h)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    status === "sending" ? "var(--muted)" : "var(--accent)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
