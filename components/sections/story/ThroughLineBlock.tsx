import Reveal from "@/components/ui/Reveal";

export default function ThroughLineBlock() {
  return (
    <Reveal style={{ position: "relative", marginTop: 32 }}>
      <div
        className="throughline-marker"
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--violet-700)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "var(--cream-100)",
            padding: "0 10px",
            marginBottom: 12,
            whiteSpace: "nowrap",
          }}
        >
          THE THROUGH-LINE
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--violet-500)",
            border: "1px solid var(--violet-500)",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            color: "white",
          }}
        >
          05
        </div>
      </div>

      <div
        className="throughline-card"
        style={{
          marginTop: 96,
          background: "rgba(243,238,255,0.55)",
          border: "1px solid var(--violet-100)",
          borderRadius: "var(--radius-xl)",
          padding: "64px 80px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            color: "var(--ink-900)",
            margin: "0 auto 24px",
            maxWidth: 680,
            textWrap: "balance",
          }}
        >
          The engine beneath it all.
        </h3>
        <p
          style={{
            fontSize: 17,
            color: "var(--ink-700)",
            lineHeight: 1.7,
            margin: "0 auto",
            maxWidth: 640,
          }}
        >
          Underneath every chapter is the same engine — reliance on God, a refusal to
          stop learning, and an unreasonable confidence that the next rep matters.
          The pillars come and go. The engine stays the same.
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .throughline-marker { position: relative !important; left: 0 !important; transform: none !important; flex-direction: row !important; gap: 12px; margin-bottom: 24px; }
          .throughline-card { margin-top: 0 !important; padding: 40px 28px !important; }
        }
      `}</style>
    </Reveal>
  );
}
