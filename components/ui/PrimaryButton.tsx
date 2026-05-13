"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Common = {
  children: ReactNode;
  full?: boolean;
  style?: CSSProperties;
  size?: "md" | "lg";
  type?: "button" | "submit" | "reset";
};

type Props = Common & ({ href?: undefined; onClick?: () => void } | { href: string; onClick?: never });

export default function PrimaryButton({
  children,
  onClick,
  href,
  full = false,
  style,
  size = "md",
  type = "button",
}: Props) {
  const [hover, setHover] = useState(false);
  const pad = size === "lg" ? "16px 30px" : "13px 26px";

  const sharedStyle: CSSProperties = {
    background: hover ? "var(--violet-900)" : "var(--ink-900)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: size === "lg" ? 16 : 15,
    padding: pad,
    borderRadius: "var(--radius-md)",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    width: full ? "100%" : "auto",
    justifyContent: "center",
    whiteSpace: "nowrap",
    transform: hover ? "translateY(-1px)" : "none",
    boxShadow: hover ? "var(--shadow-card)" : "none",
    transition:
      "background var(--duration-fast), transform var(--duration-fast), box-shadow var(--duration-fast)",
    textDecoration: "none",
    ...style,
  };

  const inner = (
    <>
      {children} <ArrowRight />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={sharedStyle}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={sharedStyle}
    >
      {inner}
    </button>
  );
}
