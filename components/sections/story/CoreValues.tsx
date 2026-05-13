import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { CORE_VALUES } from "@/lib/content";

export default function CoreValues() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-200)", padding: "128px 0" }}
    >
      <Container size="xl">
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Eyebrow align="center">What keeps the engine running</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
              margin: 0,
            }}
          >
            Core values.
          </h2>
        </div>
        <div
          className="values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--cream-300)",
            borderBottom: "1px solid var(--cream-300)",
          }}
        >
          {CORE_VALUES.map((v, i) => (
            <div
              key={i}
              className="value-cell"
              style={{
                padding: "36px 28px",
                borderRight:
                  i < CORE_VALUES.length - 1
                    ? "1px solid var(--cream-300)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 40,
                    color: "var(--violet-500)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1,
                  }}
                >
                  {v.n}
                </div>
                <div
                  style={{
                    width: 18,
                    height: 1,
                    background: "var(--ink-300)",
                  }}
                />
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 22,
                  color: "var(--ink-900)",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                }}
              >
                {v.name}
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-700)",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: 280,
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 920px) {
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .value-cell:nth-child(2) { border-right: none !important; }
          .value-cell:nth-child(1), .value-cell:nth-child(2) { border-bottom: 1px solid var(--cream-300); }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .value-cell { border-right: none !important; border-bottom: 1px solid var(--cream-300); }
          .value-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </Reveal>
  );
}
