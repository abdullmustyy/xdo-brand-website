"use client";

import { useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export default function FilterPill({ children, active, onClick }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: active ? "var(--ink-900)" : "transparent",
        color: active ? "white" : hover ? "var(--ink-900)" : "var(--ink-700)",
        border: active
          ? "1px solid var(--ink-900)"
          : `1px solid ${hover ? "var(--ink-900)" : "var(--ink-300)"}`,
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 14,
        padding: "9px 16px",
        borderRadius: 999,
        cursor: "pointer",
        transition: "all var(--duration-fast)",
      }}
    >
      {children}
    </button>
  );
}
