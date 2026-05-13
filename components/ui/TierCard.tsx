"use client";

import Serial from "./Serial";
import SecondaryButton from "./SecondaryButton";
import { Check } from "./Icons";

type Props = {
  n: string;
  label: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  cadence?: string;
  mostCommon?: boolean;
  applyHref?: string;
};

export default function TierCard({
  n,
  label,
  name,
  description,
  features,
  price,
  cadence,
  mostCommon,
  applyHref,
}: Props) {
  return (
    <div
      style={{
        background: mostCommon ? "var(--cream-50)" : "transparent",
        border: mostCommon
          ? "1px solid var(--violet-500)"
          : "1px solid var(--cream-300)",
        borderRadius: "var(--radius-lg)",
        padding: "40px 32px 36px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxShadow: mostCommon ? "var(--shadow-card)" : "none",
      }}
    >
      {mostCommon && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 28,
            background: "var(--violet-500)",
            color: "white",
            fontSize: 11,
            fontWeight: 600,
            padding: "5px 12px",
            borderRadius: 999,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Most common
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            fontWeight: 600,
            color: "var(--violet-700)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        <Serial n={n} color="var(--ink-400)" />
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 30,
          letterSpacing: "-0.018em",
          color: "var(--ink-900)",
          margin: "12px 0 14px",
          textWrap: "balance",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: 15.5,
          color: "var(--ink-700)",
          lineHeight: 1.6,
          margin: "0 0 24px",
        }}
      >
        {description}
      </p>
      <div style={{ borderTop: "1px solid var(--cream-300)", margin: "0 0 20px" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              fontSize: 15,
              color: "var(--ink-900)",
              lineHeight: 1.5,
            }}
          >
            <Check size={16} /> <span>{f}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--cream-300)", margin: "26px 0 18px" }} />
      <div
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <div>
          <div style={{ fontSize: 12, color: "var(--ink-500)" }}>Starting at</div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 34,
              color: "var(--ink-900)",
              marginTop: 2,
              letterSpacing: "-0.02em",
            }}
          >
            {price}
          </div>
          {cadence && (
            <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 2 }}>{cadence}</div>
          )}
        </div>
        {applyHref && <SecondaryButton href={applyHref}>Apply</SecondaryButton>}
      </div>
    </div>
  );
}
