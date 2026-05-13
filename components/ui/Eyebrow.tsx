import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center";
  color?: string;
  style?: CSSProperties;
};

export default function Eyebrow({
  children,
  align = "left",
  color = "var(--violet-700)",
  style,
}: Props) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-micro)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color,
        textAlign: align,
        marginBottom: "var(--space-4)",
        display: align === "center" ? "block" : "inline-flex",
        alignItems: "center",
        gap: 10,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
