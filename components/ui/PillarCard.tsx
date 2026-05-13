"use client";

import { useState } from "react";
import Serial from "./Serial";

type Props = {
  n: string;
  trigger: string;
  name: string;
  body: string;
};

export default function PillarCard({ n, trigger, name, body }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--cream-50)",
        border: `1px solid ${hover ? "var(--violet-300)" : "var(--cream-300)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "36px 30px 32px",
        transition:
          "border-color var(--duration-base), transform var(--duration-base), box-shadow var(--duration-base)",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? "var(--shadow-hover)" : "none",
        position: "relative",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <Serial n={n} />
        <div
          style={{
            background: hover ? "var(--violet-100)" : "var(--violet-50)",
            color: "var(--violet-700)",
            fontSize: 11.5,
            fontWeight: 600,
            padding: "5px 11px",
            borderRadius: 999,
            transition: "background var(--duration-base)",
          }}
        >
          {trigger}
        </div>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 30,
          letterSpacing: "-0.018em",
          color: "var(--ink-900)",
          margin: "0 0 14px",
        }}
      >
        {name}
      </h3>
      <p style={{ fontSize: 15.5, color: "var(--ink-700)", lineHeight: 1.6, margin: 0 }}>{body}</p>
    </div>
  );
}
