import type { CSSProperties } from "react";

type Props = {
  label?: string;
  color?: string;
  labelColor?: string;
  style?: CSSProperties;
};

export default function Rule({
  label,
  color = "var(--ink-300)",
  labelColor = "var(--ink-500)",
  style,
}: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, ...style }}>
      <div style={{ flex: 1, height: 1, background: color }} />
      {label && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: labelColor,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
      )}
      {label && <div style={{ flex: 1, height: 1, background: color }} />}
    </div>
  );
}
