import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  caption?: string;
  size?: "md" | "lg";
  align?: "left" | "right";
};

export default function PullQuote({
  children,
  caption,
  size = "md",
  align = "right",
}: Props) {
  return (
    <blockquote
      style={{
        borderLeft: "3px solid var(--violet-500)",
        padding: "0px 0px 0px 24px",
        margin: "24px 0px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: size === "lg" ? 28 : 22,
          lineHeight: 1.35,
          color: "var(--ink-900)",
          margin: 0,
          textWrap: "balance",
          textAlign: align,
        }}
      >
        {children}
      </p>
      {caption && (
        <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 12 }}>{caption}</div>
      )}
    </blockquote>
  );
}
