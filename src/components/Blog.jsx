// ─────────────────────────────────────────────────────────────────────────────
// Blog.jsx  —  Static blog / articles section
//
// SETUP:
//   1. BLOG_POSTS array mein apne articles add karo
//   2. App.jsx mein <Blog /> add karo (Testimonials ke baad)
//   3. Har post ka slug = URL pe open hoga (agar router add karo)
//
// ARTICLES IDEAS (freshers ke liye):
//   - "What I learned building StudyHub"
//   - "JWT Authentication explained simply"
//   - "MongoDB vs PostgreSQL — which I chose and why"
//   - "My MERN stack learning journey"
//   - "Common mistakes I made as a beginner"
//
// NOTE: Actual article content ke liye 2 options:
//   Option A (simple)  — Hashnode/Dev.to pe publish karo, yahan link karo
//   Option B (full)    — React Router add karo, har post ka alag page banao
// ─────────────────────────────────────────────────────────────────────────────

import { useInView, SectionLabel, SectionTitle } from "./Shared";

// ── Blog posts data ───────────────────────────────────────────────────────────
const BLOG_POSTS = [
  {
    id: 1,
    title: "What I Learned Building StudyHub — A Full-Stack LMS",
    excerpt:
      "Building a production-ready LMS from scratch taught me more than any tutorial. JWT auth, payment flows, role-based systems — here's everything I learned the hard way.",
    date: "Dec 2024",
    readTime: "6 min read",
    tags: ["MERN", "Authentication", "Lessons Learned"],
    url: "https://dev.to/abdal-qamar", // ← apna Dev.to/Hashnode URL
    featured: true,
  },
  {
    id: 2,
    title: "JWT Authentication Explained — From Scratch",
    excerpt:
      "JSON Web Tokens confused me for weeks. This is the explanation I wish I had — with real code examples from my own project.",
    date: "Nov 2024",
    readTime: "5 min read",
    tags: ["Node.js", "Security", "JWT"],
    url: "https://dev.to/abdal-qamar",
    featured: false,
  },
  {
    id: 3,
    title: "TanStack Query vs useEffect — Why I Switched",
    excerpt:
      "I was writing useEffect for every API call. Then I discovered TanStack Query and it changed everything — caching, loading states, error handling, all handled.",
    date: "Oct 2024",
    readTime: "4 min read",
    tags: ["React", "TanStack Query", "Performance"],
    url: "https://dev.to/abdal-qamar",
    featured: false,
  },
];

// ── Tag colors ────────────────────────────────────────────────────────────────
const TAG_COLORS = {
  MERN: {
    bg: "rgba(110,84,247,0.1)",
    border: "rgba(110,84,247,0.3)",
    color: "#a594ff",
  },
  Authentication: {
    bg: "rgba(0,217,245,0.08)",
    border: "rgba(0,217,245,0.25)",
    color: "var(--cyan)",
  },
  "Lessons Learned": {
    bg: "rgba(240,95,168,0.08)",
    border: "rgba(240,95,168,0.25)",
    color: "var(--pink)",
  },
  "Node.js": {
    bg: "rgba(76,175,80,0.08)",
    border: "rgba(76,175,80,0.25)",
    color: "#66bb6a",
  },
  Security: {
    bg: "rgba(244,67,54,0.08)",
    border: "rgba(244,67,54,0.25)",
    color: "#ef5350",
  },
  JWT: {
    bg: "rgba(255,152,0,0.08)",
    border: "rgba(255,152,0,0.25)",
    color: "#ffa726",
  },
  React: {
    bg: "rgba(0,217,245,0.08)",
    border: "rgba(0,217,245,0.25)",
    color: "var(--cyan)",
  },
  "TanStack Query": {
    bg: "rgba(110,84,247,0.1)",
    border: "rgba(110,84,247,0.3)",
    color: "#a594ff",
  },
  Performance: {
    bg: "rgba(76,175,80,0.08)",
    border: "rgba(76,175,80,0.25)",
    color: "#66bb6a",
  },
  default: {
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    color: "var(--muted)",
  },
};

function PostTag({ label }) {
  const c = TAG_COLORS[label] || TAG_COLORS.default;
  return (
    <span
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.color,
        borderRadius: "4px",
        padding: "0.18rem 0.6rem",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

// ── Blog Card ─────────────────────────────────────────────────────────────────
function BlogCard({ post, delay, visible }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className={`fade-up ${delay}${visible ? " visible" : ""}`}
      style={{
        display: "block",
        background: "var(--card-bg)",
        border: `1px solid ${post.featured ? "rgba(110,84,247,0.35)" : "var(--border)"}`,
        borderRadius: "14px",
        padding: "1.6rem",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color 0.2s, transform 0.2s, background 0.4s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border2)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = post.featured
          ? "rgba(110,84,247,0.35)"
          : "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Featured bar */}
      {post.featured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, var(--accent), var(--cyan))",
          }}
        />
      )}

      {/* Featured badge */}
      {post.featured && (
        <span
          style={{
            display: "inline-block",
            background: "rgba(110,84,247,0.1)",
            border: "1px solid rgba(110,84,247,0.3)",
            color: "var(--accent)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            padding: "0.18rem 0.6rem",
            borderRadius: "4px",
            marginBottom: "0.75rem",
          }}
        >
          FEATURED
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
          fontWeight: 700,
          lineHeight: 1.35,
          marginBottom: "0.65rem",
          color: "var(--text)",
        }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.75,
          marginBottom: "1.1rem",
        }}
      >
        {post.excerpt}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.45rem",
          marginBottom: "1rem",
        }}
      >
        {post.tags.map((tag) => (
          <PostTag key={tag} label={tag} />
        ))}
      </div>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--muted)",
          }}
        >
          {post.date} · {post.readTime}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--cyan)",
          }}
        >
          Read →
        </span>
      </div>
    </a>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Blog() {
  const [ref, visible] = useInView();
  const v = visible ? " visible" : "";

  return (
    <section
      id="blog"
      ref={ref}
      style={{ padding: "5.5rem clamp(1.2rem, 6vw, 4rem)" }}
    >
      <div className={`fade-up${v}`}>
        <SectionLabel>// thoughts & learnings</SectionLabel>
        <SectionTitle>
          Blog <span style={{ color: "var(--accent)" }}>Articles</span>
        </SectionTitle>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "1.2rem",
          marginBottom: "1.8rem",
        }}
      >
        {BLOG_POSTS.map((post, i) => (
          <BlogCard
            key={post.id}
            post={post}
            delay={`d${i + 1}`}
            visible={visible}
          />
        ))}
      </div>

      {/* View all link */}
      <div className={`fade-up d4${v}`} style={{ textAlign: "center" }}>
        <a
          href="https://dev.to/abdal-qamar" // ← apna Dev.to/Hashnode profile
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "0.08em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          View all articles on Dev.to →
        </a>
      </div>
    </section>
  );
}
