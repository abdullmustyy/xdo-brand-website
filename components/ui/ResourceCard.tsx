"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

type Props = {
  topic: string;
  title: string;
  description: string;
  meta: string;
  featured?: boolean;
};

export default function ResourceCard({
  topic,
  title,
  description,
  meta,
  featured = false,
}: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--cream-50)",
        border: `1px solid ${hover ? "var(--violet-300)" : "var(--cream-300)"}`,
        borderRadius: "var(--radius-lg)",
        padding: featured ? "36px 36px 36px" : "28px 28px 32px",
        position: "relative",
        cursor: "pointer",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        transition:
          "border-color var(--duration-base), transform var(--duration-base), box-shadow var(--duration-base)",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "var(--shadow-hover)" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: featured ? 36 : 28,
          right: featured ? 36 : 28,
          color: "var(--violet-700)",
          opacity: hover ? 1 : 0.35,
          transform: hover ? "translate(2px,-2px)" : "none",
          transition: "opacity var(--duration-fast), transform var(--duration-fast)",
        }}
      >
        <ArrowUpRight size={featured ? 22 : 18} />
      </div>
      <div
        style={{
          display: "inline-block",
          background: "var(--violet-50)",
          color: "var(--violet-700)",
          fontSize: 11,
          fontWeight: 600,
          padding: "4px 10px",
          borderRadius: 999,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 14,
          alignSelf: "flex-start",
        }}
      >
        {topic}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: featured ? 28 : 20,
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
          color: hover ? "var(--violet-700)" : "var(--ink-900)",
          margin: "0 0 12px",
          transition: "color var(--duration-fast)",
          textWrap: "balance",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: featured ? 16 : 15,
          color: "var(--ink-700)",
          lineHeight: 1.55,
          margin: "0 0 20px",
          display: "-webkit-box",
          WebkitLineClamp: featured ? 4 : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flex: 1,
        }}
      >
        {description}
      </p>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--ink-500)",
          letterSpacing: "0.04em",
        }}
      >
        {meta}
      </div>
    </div>
  );
}
