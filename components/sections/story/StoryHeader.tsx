import Container from "@/components/ui/Container";

export default function StoryHeader() {
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
          <span style={{ color: "var(--violet-700)" }}>● 02 / My Story</span>
          <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
          <span>A first-person account</span>
        </div>
        <h1
          className="rise d1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 6.5vw, 6rem)",
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--ink-900)",
            margin: 0,
            maxWidth: 980,
            textWrap: "balance",
          }}
        >
          Young, Nigerian, and{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--violet-700)",
            }}
          >
            betting on myself
          </span>{" "}
          before anyone else would.
        </h1>
        <div
          className="rise d2"
          style={{
            marginTop: 40,
            display: "flex",
            gap: 32,
            alignItems: "center",
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-500)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Five chapters · One engine</span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: "var(--ink-300)",
              minWidth: 24,
            }}
          />
          <span>Reading time · 6 min</span>
        </div>
      </Container>
    </section>
  );
}
