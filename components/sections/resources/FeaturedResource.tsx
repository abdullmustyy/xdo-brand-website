import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import Rule from "@/components/ui/Rule";
import { FEATURED_CONTENTS, FEATURED_RESOURCE } from "@/lib/content";

export default function FeaturedResource() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "32px 0 48px" }}
    >
      <Container size="xl">
        <Rule label="EDITOR'S PICK · MAY 2026" style={{ marginBottom: 28 }} />
        <div
          className="featured-grid"
          style={{
            background: "var(--cream-50)",
            border: "1px solid var(--cream-300)",
            borderRadius: "var(--radius-xl)",
            padding: 0,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
          }}
        >
          <div className="featured-text" style={{ padding: "56px 56px" }}>
            <div
              style={{
                display: "inline-block",
                background: "var(--violet-50)",
                color: "var(--violet-700)",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              {FEATURED_RESOURCE.topic} · Featured
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.018em",
                color: "var(--ink-900)",
                margin: "0 0 20px",
                textWrap: "balance",
              }}
            >
              {FEATURED_RESOURCE.title}
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: "0 0 32px",
                maxWidth: 480,
              }}
            >
              {FEATURED_RESOURCE.description}
            </p>
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PrimaryButton href="/resources">Read the guide</PrimaryButton>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--ink-500)",
                  letterSpacing: "0.06em",
                }}
              >
                {FEATURED_RESOURCE.meta}
              </div>
            </div>
          </div>

          <div
            className="featured-visual"
            style={{
              background:
                "linear-gradient(135deg, var(--cream-200) 0%, var(--cream-300) 100%)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              padding: 36,
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -60,
                right: -40,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 380,
                lineHeight: 0.85,
                color: "var(--cream-100)",
                opacity: 0.7,
                letterSpacing: "-0.04em",
              }}
            >
              01
            </div>
            <div
              style={{
                position: "relative",
                background: "var(--cream-50)",
                border: "1px solid var(--cream-300)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 28px",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--violet-700)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Contents
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  rowGap: 10,
                  columnGap: 14,
                  fontSize: 14.5,
                  color: "var(--ink-900)",
                }}
              >
                {FEATURED_CONTENTS.map(([n, t]) => (
                  <span key={n} style={{ display: "contents" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        color: "var(--violet-700)",
                        fontSize: 16,
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
        @media (max-width: 880px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-text { padding: 40px 28px !important; }
          .featured-visual { min-height: 280px; padding: 24px !important; }
        }
      `}</style>
    </Reveal>
  );
}
