"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Common = {
  children: ReactNode;
  full?: boolean;
  shimmer?: boolean;
  size?: "md" | "lg";
};

type Props = Common & ({ href?: undefined; onClick?: () => void } | { href: string; onClick?: never });

export default function VioletButton({
  children,
  onClick,
  href,
  full = false,
  shimmer = false,
  size = "md",
}: Props) {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!shimmer || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("shimmer-go");
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shimmer]);

  const style: CSSProperties = {
    background: hover ? "var(--violet-600)" : "var(--violet-500)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: size === "lg" ? 16 : 15,
    padding: size === "lg" ? "16px 30px" : "13px 26px",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    width: full ? "100%" : "auto",
    justifyContent: "center",
    whiteSpace: "nowrap",
    transform: hover ? "translateY(-1px)" : "none",
    position: "relative",
    overflow: "hidden",
    transition: "background var(--duration-fast), transform var(--duration-fast)",
    borderRadius: "999px",
    textDecoration: "none",
  };

  const className = shimmer ? "violet-shimmer" : undefined;

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
}
