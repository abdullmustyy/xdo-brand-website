"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Common = { children: ReactNode };

type Props = Common & ({ href?: undefined; onClick?: () => void } | { href: string; onClick?: never });

export default function SecondaryButton({ children, onClick, href }: Props) {
  const [hover, setHover] = useState(false);

  const style: CSSProperties = {
    background: "transparent",
    color: hover ? "var(--violet-700)" : "var(--ink-900)",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: 15,
    padding: "13px 8px",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    whiteSpace: "nowrap",
    transition: "color var(--duration-fast)",
    textDecoration: "none",
  };

  const inner = (
    <>
      <span
        style={{
          borderBottom: hover ? "1px solid var(--violet-700)" : "1px solid transparent",
          paddingBottom: 2,
          transition: "border-color var(--duration-fast)",
        }}
      >
        {children}
      </span>
      <ArrowRight size={16} />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
    >
      {inner}
    </button>
  );
}
