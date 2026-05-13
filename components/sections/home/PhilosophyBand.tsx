import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { PHILOSOPHY_PRINCIPLES } from "@/lib/content";

export default function PhilosophyBand() {
  return (
    <Reveal
      as="section"
      style={{
        background: "var(--cream-200)",
        padding: "160px 0",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Container size="md">
        <Eyebrow align="center">The philosophy</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--ink-900)",
            margin: "0 auto",
            maxWidth: 880,
            textWrap: "balance",
          }}
        >
          Progress over perfection.{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--violet-700)",
            }}
          >
            Becoming
          </span>{" "}
          over staying the same.
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--ink-700)",
            lineHeight: 1.6,
            maxWidth: 620,
            margin: "36px auto 0",
          }}
        >
          The compounding doesn&apos;t come from one big bet. It comes from boring,
          repeated reps — refined publicly, shared openly, and pointed at the next
          person on the path.
        </p>

        <div
          className="principles"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--cream-300)",
            textAlign: "left",
          }}
        >
          {PHILOSOPHY_PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className="principle-cell"
              style={{
                padding: "32px 28px",
                borderRight: i < 2 ? "1px solid var(--cream-300)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 20,
                  color: "var(--violet-700)",
                  marginBottom: 12,
                }}
              >
                {p.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 22,
                  color: "var(--ink-900)",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.t}
              </div>
              <div style={{ fontSize: 14.5, color: "var(--ink-700)", lineHeight: 1.5 }}>
                {p.b}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 720px) {
          .principles { grid-template-columns: 1fr !important; }
          .principle-cell { border-right: none !important; border-bottom: 1px solid var(--cream-300); }
          .principle-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </Reveal>
  );
}
