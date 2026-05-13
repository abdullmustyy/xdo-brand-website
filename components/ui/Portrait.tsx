import type { CSSProperties } from "react";
import Dot from "./Dot";

type Props = {
  aspect?: string;
  radius?: string;
  caption?: string;
  badge?: string;
  style?: CSSProperties;
  halo?: boolean;
};

export default function Portrait({
  aspect = "4/5",
  radius = "var(--radius-xl)",
  caption,
  badge,
  style,
  halo = true,
}: Props) {
  return (
    <div style={{ ...style }}>
      <div
        style={{
          aspectRatio: aspect,
          borderRadius: radius,
          background: "linear-gradient(180deg, #DCD2BE 0%, #C7C2CE 100%)",
          boxShadow: halo ? "var(--shadow-portrait)" : "none",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMax meet"
          style={{ width: "100%", height: "100%", opacity: 0.65 }}
        >
          <g fill="#6B6577">
            <circle cx="200" cy="200" r="62" />
            <path d="M88 460 C88 360 130 308 200 308 C270 308 312 360 312 460 L312 500 L88 500 Z" />
          </g>
        </svg>
        {badge && (
          <div
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              background: "rgba(21,19,28,0.85)",
              color: "white",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "8px 12px",
              borderRadius: 999,
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Dot color="var(--violet-300)" size={6} /> {badge}
          </div>
        )}
      </div>
      {caption && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-500)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: 12,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
