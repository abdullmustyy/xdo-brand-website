"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, MenuIcon, XIcon } from "./ui/Icons";
import { NAV_ITEMS } from "@/lib/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled || drawerOpen ? "rgba(244,239,230,0.88)" : "transparent",
        backdropFilter: scrolled || drawerOpen ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled || drawerOpen ? "blur(10px)" : "none",
        borderBottom:
          scrolled || drawerOpen
            ? "1px solid var(--ink-300)"
            : "1px solid transparent",
        transition:
          "background var(--duration-base), border-color var(--duration-base)",
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "18px 32px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 32,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: "-0.01em",
            color: "var(--ink-900)",
            cursor: "pointer",
            justifySelf: "start",
            textDecoration: "none",
          }}
        >
          XD<span style={{ color: "var(--violet-500)" }}>.</span>
        </Link>

        <div className="nav-links" style={{ display: "flex", gap: 4, justifySelf: "center" }}>
          {NAV_ITEMS.map((it) => (
            <NavItem
              key={it.id}
              n={it.n}
              label={it.label}
              href={it.href}
              active={isActive(pathname, it.href)}
            />
          ))}
        </div>

        <div className="nav-cta" style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 12 }}>
          <WorkWithMeCTA />
          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
            className="nav-burger"
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid var(--ink-300)",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              color: "var(--ink-900)",
            }}
          >
            {drawerOpen ? <XIcon size={20} color="var(--ink-900)" /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Scroll progress hairline */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: -1,
          height: 2,
          width: `${progress * 100}%`,
          background: "var(--violet-500)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity var(--duration-base)",
        }}
      />

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className="nav-drawer"
          style={{
            background: "var(--cream-100)",
            borderTop: "1px solid var(--ink-300)",
            padding: "12px 0 28px",
          }}
        >
          <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 32px" }}>
            {NAV_ITEMS.map((it) => (
              <Link
                key={it.id}
                href={it.href}
                onClick={() => setDrawerOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--cream-300)",
                  color: isActive(pathname, it.href) ? "var(--ink-900)" : "var(--ink-700)",
                  fontFamily: "var(--font-body)",
                  fontSize: 18,
                  fontWeight: isActive(pathname, it.href) ? 600 : 500,
                  textDecoration: "none",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--violet-700)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {it.n}
                  </span>
                  {it.label}
                </span>
                <ArrowRight size={16} color="var(--ink-500)" />
              </Link>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link
                href="/solutions"
                onClick={() => setDrawerOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--ink-900)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "12px 22px",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                }}
              >
                Work with me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-inner { grid-template-columns: 1fr auto !important; }
          .nav-links { display: none !important; }
          .nav-cta > a { display: none !important; }
          .nav-burger { display: inline-flex !important; align-items: center; }
        }
      `}</style>
    </nav>
  );
}

function NavItem({
  n,
  label,
  href,
  active,
}: {
  n: string;
  label: string;
  href: string;
  active: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: active ? 600 : 500,
        color: active ? "var(--ink-900)" : "var(--ink-700)",
        cursor: "pointer",
        position: "relative",
        padding: "8px 14px",
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "color var(--duration-fast)",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          color: active ? "var(--violet-700)" : "var(--ink-400)",
          letterSpacing: "0.1em",
          opacity: active || hover ? 1 : 0.6,
          transition: "opacity var(--duration-fast), color var(--duration-fast)",
        }}
      >
        {n}
      </span>
      <span>{label}</span>
      {active && (
        <span
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 2,
            height: 2,
            background: "var(--violet-500)",
          }}
        />
      )}
    </Link>
  );
}

function WorkWithMeCTA() {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/solutions"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "var(--violet-900)" : "var(--ink-900)",
        color: "white",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 14,
        padding: "10px 20px",
        borderRadius: "var(--radius-md)",
        border: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "background var(--duration-fast)",
        whiteSpace: "nowrap",
        textDecoration: "none",
      }}
    >
      Work with me <ArrowRight size={16} />
    </Link>
  );
}
