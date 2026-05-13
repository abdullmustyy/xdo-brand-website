import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import TierCard from "@/components/ui/TierCard";
import { TIERS } from "@/lib/content";

export default function TierGrid() {
  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "16px 0 128px" }}
    >
      <Container size="xl">
        <div
          className="tier-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {TIERS.map((t, i) => (
            <TierCard key={i} {...t} applyHref="#apply-form" />
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 960px) {
          .tier-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </Reveal>
  );
}
