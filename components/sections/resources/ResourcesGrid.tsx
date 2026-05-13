"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import FilterPill from "@/components/ui/FilterPill";
import ResourceCard from "@/components/ui/ResourceCard";
import { RESOURCES, TOPICS } from "@/lib/content";

export default function ResourcesGrid() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? RESOURCES : RESOURCES.filter((r) => r.topic === active)),
    [active]
  );

  return (
    <section style={{ background: "var(--cream-100)", padding: "32px 0 128px" }}>
      <Container size="xl">
        <div
          className="resources-sticky"
          style={{
            position: "sticky",
            top: 72,
            zIndex: 10,
            background: "rgba(244,239,230,0.92)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "20px 0 24px",
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--ink-300)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--violet-700)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}>
            {TOPICS.map((t) => (
              <FilterPill
                key={t}
                active={active === t}
                onClick={() => setActive(t)}
              >
                {t}
              </FilterPill>
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-500)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {filtered.length} of {RESOURCES.length}
          </div>
        </div>

        <div
          className="resources-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {filtered.map((r, i) => (
            <div
              key={`${active}-${i}`}
              style={{
                animation: `fade-rise var(--duration-base) var(--ease-out) ${
                  i * 40
                }ms both`,
              }}
            >
              <ResourceCard {...r} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 80,
              color: "var(--ink-500)",
              fontSize: 16,
            }}
          >
            No resources in this topic yet — check back soon.
          </div>
        )}
      </Container>
      <style>{`
        @media (max-width: 980px) {
          .resources-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .resources-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
