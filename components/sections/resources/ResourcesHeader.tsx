import Container from "@/components/ui/Container";

export default function ResourcesHeader() {
  return (
    <section
      style={{ background: "var(--cream-100)", paddingTop: 156, paddingBottom: 48 }}
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
          <span style={{ color: "var(--violet-700)" }}>● 04 / Resources</span>
          <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
          <span>7 published · More monthly</span>
        </div>
        <div
          className="resources-head-grid"
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
            Free frameworks,
            <br />
            playbooks,{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--ink-700)",
              }}
            >
              &amp;
            </span>{" "}
            <span style={{ color: "var(--violet-700)" }}>tools</span>.
          </h1>
          <div className="rise d2">
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: 460,
              }}
            >
              The reps, repackaged. Everything below is what I&apos;d hand to a
              younger version of me at the start of each stage.
            </p>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 880px) {
          .resources-head-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
