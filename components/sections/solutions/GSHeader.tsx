import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function GSHeader() {
  return (
    <section
      style={{ background: "var(--cream-100)", paddingTop: 156, paddingBottom: 72 }}
    >
      <Container size="xl">
        <div
          className="rise"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-500)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "var(--violet-700)" }}>● 03 / Growth Solutions</span>
          <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
          <span>3 ways to work together</span>
        </div>

        <div
          className="gs-head-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 80,
            alignItems: "end",
          }}
        >
          <h1
            className="rise d1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "var(--ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Real strategy.<br />
            Real implementation.<br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--violet-700)",
              }}
            >
              Real results.
            </span>
          </h1>
          <div className="rise d2">
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: "0 0 24px",
                maxWidth: 460,
              }}
            >
              Three ways to work together — from a focused brand sprint to a full
              quarterly engagement. Each one ends with a system you can keep running
              after we&apos;re done.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <PrimaryButton href="#apply-form">Apply to work together</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 880px) {
          .gs-head-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
