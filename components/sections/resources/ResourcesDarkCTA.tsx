import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import VioletButton from "@/components/ui/VioletButton";

export default function ResourcesDarkCTA() {
  return (
    <Reveal
      as="section"
      style={{
        background: "var(--ink-900)",
        padding: "128px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -60,
          top: -80,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 480,
          lineHeight: 0.85,
          color: "rgba(124,58,237,0.08)",
          letterSpacing: "-0.04em",
          pointerEvents: "none",
        }}
      >
        04
      </div>
      <Container size="md" style={{ position: "relative" }}>
        <Eyebrow align="center" color="var(--violet-300)">
          Beyond the reading
        </Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "white",
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          Need hands-on help with your growth?
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--cream-200)",
            opacity: 0.8,
            lineHeight: 1.6,
            margin: "0 auto 40px",
            maxWidth: 560,
          }}
        >
          The resources are a head start. The engagements are the engine — built
          around your specific business, with implementation, not just strategy.
        </p>
        <VioletButton size="lg" href="/solutions">
          Explore growth solutions →
        </VioletButton>
      </Container>
    </Reveal>
  );
}
