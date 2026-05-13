import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import VioletButton from "@/components/ui/VioletButton";

export default function ClosingDarkCTA() {
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
          right: -60,
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
        XD
      </div>
      <Container size="md" style={{ position: "relative" }}>
        <Eyebrow align="center" color="var(--violet-300)">
          Next chapter
        </Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "white",
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          Now let&apos;s build yours.
        </h2>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--cream-200)",
            opacity: 0.8,
            lineHeight: 1.6,
            margin: "0 auto 40px",
            maxWidth: 540,
          }}
        >
          If my story sounds like the path you&apos;re on — let&apos;s talk about how
          we work together.
        </p>
        <VioletButton size="lg" href="/solutions">
          See how we work →
        </VioletButton>
      </Container>
    </Reveal>
  );
}
