import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/content";

export default function ProcessStrip() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "0 0 128px" }}
    >
      <Container size="xl">
        <div
          className="process-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            marginBottom: 56,
          }}
        >
          <div>
            <Eyebrow>The process</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.875rem, 3.2vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.018em",
                color: "var(--ink-900)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              From application to handoff in five moves.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 540,
              }}
            >
              Same five steps for every engagement, regardless of tier. The depth of
              each step is what scales — not the order.
            </p>
          </div>
        </div>

        <div
          className="process-steps"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            borderTop: "1px solid var(--ink-300)",
            borderBottom: "1px solid var(--ink-300)",
          }}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={i}
              className="process-cell"
              style={{
                padding: "32px 24px",
                borderRight:
                  i < PROCESS_STEPS.length - 1 ? "1px solid var(--ink-300)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "var(--violet-700)",
                  marginBottom: 14,
                }}
              >
                {s.n}.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 22,
                  color: "var(--ink-900)",
                  letterSpacing: "-0.015em",
                  marginBottom: 10,
                }}
              >
                {s.t}
              </div>
              <div style={{ fontSize: 14.5, color: "var(--ink-700)", lineHeight: 1.5 }}>
                {s.b}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 1000px) {
          .process-steps { grid-template-columns: repeat(2, 1fr) !important; }
          .process-cell { border-right: none !important; border-bottom: 1px solid var(--ink-300); }
          .process-cell:nth-child(even) { border-right: none !important; }
          .process-cell:nth-child(odd) { border-right: 1px solid var(--ink-300) !important; }
        }
        @media (max-width: 880px) {
          .process-head { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .process-steps { grid-template-columns: 1fr !important; }
          .process-cell { border-right: none !important; }
          .process-cell:nth-child(odd) { border-right: none !important; }
        }
      `}</style>
    </Reveal>
  );
}
