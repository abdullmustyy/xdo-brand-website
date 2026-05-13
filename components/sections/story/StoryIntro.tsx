import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Portrait from "@/components/ui/Portrait";
import Reveal from "@/components/ui/Reveal";
import { STORY_INTRO_STATS } from "@/lib/content";

export default function StoryIntro() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "64px 0 96px" }}
    >
      <Container size="xl">
        <div
          className="intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "440px 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          <div>
            <Portrait aspect="4/5" caption="LAGOS · MAY 2026" />
          </div>
          <div style={{ maxWidth: 580, paddingTop: 16 }}>
            <Eyebrow>The short version</Eyebrow>
            <p
              style={{
                fontSize: "1.375rem",
                color: "var(--ink-900)",
                lineHeight: 1.55,
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                letterSpacing: "-0.005em",
              }}
            >
              <span
                style={{
                  float: "left",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 92,
                  color: "var(--violet-700)",
                  lineHeight: 0.85,
                  marginRight: 14,
                  marginTop: 6,
                }}
              >
                I
              </span>
              tried, briefly, to work for other people. It didn&apos;t fit. Not because
              I was unwilling — but because I could see a different path, and the more
              I looked, the more the path looked like building something of my own.
            </p>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.7,
                margin: "32px 0 0",
              }}
            >
              Everything since has been a reps problem. Trading taught me discipline
              and the cost of being wrong with conviction. Freelancing taught me
              sales. Building a business forced me into branding, hiring, and finally,
              into teaching what I&apos;d learned.
            </p>

            <div
              className="intro-stats"
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                borderTop: "1px solid var(--ink-300)",
                borderBottom: "1px solid var(--ink-300)",
              }}
            >
              {STORY_INTRO_STATS.map(([v, l], i) => (
                <div
                  key={i}
                  className="intro-stat"
                  style={{
                    padding: "20px 18px",
                    borderRight:
                      i < 2 ? "1px solid var(--ink-300)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 30,
                      fontWeight: 500,
                      color: "var(--ink-900)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--ink-500)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 880px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </Reveal>
  );
}
