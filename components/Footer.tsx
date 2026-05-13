"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Container from "./ui/Container";
import Dot from "./ui/Dot";
import VioletButton from "./ui/VioletButton";

type LinkSpec = { label: string; href?: string };

const NAV_LINKS: LinkSpec[] = [
  { label: "Home", href: "/" },
  { label: "My Story", href: "/story" },
  { label: "Growth Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
];

const RESOURCE_LINKS: LinkSpec[] = [
  { label: "Marketing", href: "/resources" },
  { label: "Sales", href: "/resources" },
  { label: "Mentality", href: "/resources" },
  { label: "Getting Hired", href: "/resources" },
  { label: "Client Acquisition", href: "/resources" },
];

const CONNECT_LINKS: LinkSpec[] = [
  { label: "LinkedIn ↗" },
  { label: "Twitter / X ↗" },
  { label: "Newsletter" },
  { label: "hello@xdolayinka.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const onJoin = () => {
    if (!email) return;
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      setEmail("");
    }, 2400);
  };

  return (
    <footer
      style={{
        background: "var(--ink-900)",
        color: "var(--cream-200)",
        padding: "96px 0 36px",
      }}
    >
      <Container size="xl">
        {/* Top word-mark + newsletter row */}
        <div
          className="footer-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(220,210,190,0.15)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "rgba(220,210,190,0.55)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              ● Currently · Lagos · 2026
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "white",
                margin: 0,
                maxWidth: 720,
                textWrap: "balance",
              }}
            >
              Want the weekly notes? Drop your address &amp; I&apos;ll send them.
            </h2>
          </div>
          <div className="footer-newsletter" style={{ minWidth: 360 }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(220,210,190,0.18)",
                borderRadius: 999,
                padding: 6,
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@something.com"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: 0,
                  outline: "none",
                  color: "white",
                  fontFamily: "inherit",
                  fontSize: 15,
                  padding: "10px 18px",
                }}
              />
              <VioletButton onClick={onJoin}>
                {joined ? "✓ You're in" : "Join free"}
              </VioletButton>
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "rgba(220,210,190,0.6)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Dot color="var(--success)" size={6} /> No spam. Unsubscribe whenever.
            </div>
          </div>
        </div>

        {/* Column grid */}
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            padding: "56px 0",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 28,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              XD<span style={{ color: "var(--violet-500)" }}>.</span>
            </div>
            <p
              style={{
                fontSize: 15,
                color: "var(--cream-200)",
                opacity: 0.7,
                maxWidth: 360,
                lineHeight: 1.6,
                margin: "16px 0 0",
              }}
            >
              Growth Performance Expert helping businesses and professionals turn fuzzy
              strategy into repeatable growth.
            </p>
          </div>

          <FooterCol heading="Navigate" links={NAV_LINKS} />
          <FooterCol heading="Resources" links={RESOURCE_LINKS} />
          <FooterCol heading="Connect" links={CONNECT_LINKS} />
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(220,210,190,0.15)",
            paddingTop: 28,
            marginTop: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontFamily: "var(--font-body)",
            fontSize: 12.5,
            color: "rgba(220,210,190,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          <div>© 2026 XD Olayinka. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink href="/404">System</FooterLink>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 860px) {
          .footer-top { grid-template-columns: 1fr !important; align-items: start !important; }
          .footer-newsletter { min-width: 0 !important; width: 100%; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ heading, links }: { heading: string; links: LinkSpec[] }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--cream-100)",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          marginBottom: 20,
        }}
      >
        {heading}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((l, i) => (
          <FooterLink key={i} href={l.href}>
            {l.label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

function FooterLink({ children, href }: { children: ReactNode; href?: string }) {
  const [hover, setHover] = useState(false);
  const style = {
    fontSize: 14.5,
    color: hover ? "var(--violet-300)" : "var(--cream-200)",
    opacity: hover ? 1 : 0.75,
    cursor: "pointer",
    transition: "color var(--duration-fast), opacity var(--duration-fast)",
    textDecoration: "none",
  } as const;

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}
