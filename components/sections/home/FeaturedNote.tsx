import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import { NOTEBOOK_CHECKPOINTS } from "@/lib/content";

export default function FeaturedNote() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-200)", padding: "128px 0" }}
    >
      <Container size="xl">
        <div
          className="featured-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow>From the notebook · #47</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "var(--ink-900)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              The reps that became resources.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: "24px 0 32px",
                maxWidth: 480,
              }}
            >
              Every framework on this site started as a Tuesday-morning note in a
              notebook I keep next to me. This week&apos;s issue: why the
              brief-to-launch loop should be measured in days, not quarters — and the
              four checkpoints I run a project through before it ships.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PrimaryButton href="/resources">Read the note</PrimaryButton>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--ink-500)",
                  letterSpacing: "0.08em",
                }}
              >
                · 7 min read · Marketing
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "8px -8px -8px 8px",
                background: "var(--cream-50)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--cream-300)",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "relative",
                background: "var(--cream-50)",
                border: "1px solid var(--cream-300)",
                borderRadius: "var(--radius-xl)",
                padding: "48px 44px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--violet-700)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  ISSUE #47 / NOTEBOOK
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--ink-500)",
                    letterSpacing: "0.1em",
                  }}
                >
                  FRI · MAY 8
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 28,
                  letterSpacing: "-0.018em",
                  lineHeight: 1.15,
                  color: "var(--ink-900)",
                  margin: "0 0 24px",
                }}
              >
                Brief to launch in days, not quarters — the four checkpoints
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  rowGap: 12,
                  columnGap: 16,
                  fontFamily: "var(--font-body)",
                  fontSize: 14.5,
                  color: "var(--ink-700)",
                  lineHeight: 1.5,
                }}
              >
                {NOTEBOOK_CHECKPOINTS.map(([n, t]) => (
                  <span key={n} style={{ display: "contents" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "var(--violet-700)",
                        fontSize: 16,
                        paddingTop: 2,
                      }}
                    >
                      {n}.
                    </div>
                    <div>{t}</div>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 920px) {
          .featured-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </Reveal>
  );
}
