import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { Check, XIcon } from "@/components/ui/Icons";
import { BEST_FIT, NOT_FIT } from "@/lib/content";

export default function BestFitNotFit() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-200)", padding: "128px 0" }}
    >
      <Container size="xl">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow align="center">Honest filter</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2rem, 3.6vw, 2.875rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Who this is — and isn&apos;t — for.
          </h2>
        </div>

        <div
          className="fit-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            marginBottom: 40,
            background: "var(--cream-50)",
            border: "1px solid var(--cream-300)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          <div
            className="fit-cell fit-best"
            style={{
              padding: "44px 44px",
              borderRight: "1px solid var(--cream-300)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "var(--violet-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check size={18} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 26,
                  letterSpacing: "-0.015em",
                  color: "var(--ink-900)",
                  margin: 0,
                }}
              >
                Best fit for
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {BEST_FIT.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: 16,
                    color: "var(--ink-900)",
                    lineHeight: 1.5,
                  }}
                >
                  <Check size={18} /> <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fit-cell fit-not" style={{ padding: "44px 44px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "var(--cream-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <XIcon size={18} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 26,
                  letterSpacing: "-0.015em",
                  color: "var(--ink-700)",
                  margin: 0,
                }}
              >
                Not a good fit
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {NOT_FIT.map((n, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: 16,
                    color: "var(--ink-700)",
                    lineHeight: 1.5,
                  }}
                >
                  <XIcon size={18} /> <span>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="fit-note"
          style={{
            background: "var(--violet-50)",
            border: "1px solid var(--violet-500)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            fontSize: 16,
            color: "var(--ink-900)",
            lineHeight: 1.55,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div>
            Most inquiries are a fit for{" "}
            <strong>Strategy &amp; Implementation</strong>. If you&apos;re not sure,
            apply anyway and I&apos;ll point you to the right tier.
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--violet-700)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            ● Reviewed within 48h
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 880px) {
          .fit-grid { grid-template-columns: 1fr !important; }
          .fit-best { border-right: none !important; border-bottom: 1px solid var(--cream-300); }
        }
        @media (max-width: 560px) {
          .fit-cell { padding: 32px 24px !important; }
        }
      `}</style>
    </Reveal>
  );
}
