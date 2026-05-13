import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillarCard from "@/components/ui/PillarCard";
import Reveal from "@/components/ui/Reveal";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { PILLARS } from "@/lib/content";

export default function FourPillars() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "144px 0" }}
    >
      <Container size="xl">
        <div
          className="pillars-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginBottom: 72,
            alignItems: "end",
          }}
        >
          <div>
            <Eyebrow>What I teach</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.25rem, 4.2vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ink-900)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Four pillars of leveling up.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 480,
              }}
            >
              Every engagement, framework, and resource on this site maps to one of
              these four. They&apos;re how I think about the work — and the order in
              which leverage actually shows up.
            </p>
            <div style={{ marginTop: 20 }}>
              <SecondaryButton href="/solutions">See how we work</SecondaryButton>
            </div>
          </div>
        </div>
        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
          }}
        >
          {PILLARS.map((p, i) => (
            <PillarCard key={i} {...p} />
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 1100px) {
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 880px) {
          .pillars-head { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Reveal>
  );
}
